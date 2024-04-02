import React,{useState,useRef,useEffect} from "react";
import { Link } from "react-router-dom"
import newRequest from '../utils/newRequest.js';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useQuery , useMutation } from "@tanstack/react-query";
import moment from "moment"

const Chats = ({item}) => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  

  const { isLoading, error, data} = useQuery({
    queryKey: ['chats'],
    queryFn: () =>
      newRequest.get(`/conversations`).then(res=> {
        return res.data;
      })
  })

  const { isLoading:isLoadingUser , error:errorUser, data:dataUser} = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      newRequest.get(`/users`).then(res=> {
        return res.data;
      })
  })

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/conversations/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"]);
    },
  });
  const handleRead = (id) => {
    mutation.mutate(id);
  };


  const [searchActive, setSearchActive] = useState(false);
  const searchClose = useRef(null)
  const [substringLength, setSubstringLength] = useState(100);
  
  useEffect(() => {
    const updateSubstring = () => {
      const newSubstringLength = window.innerWidth < 600 ? 30 : 100; 
      setSubstringLength(newSubstringLength);
    };
    window.addEventListener('resize', updateSubstring);
    updateSubstring();

    return () => {
      window.removeEventListener('resize', updateSubstring);
    };
  }, []);
  const handleBodyClick = (event) => {
    if (searchClose.current && !searchClose.current.contains(event.target)) {
      setSearchActive(false);
    }
  };
  useEffect(() => {
    if (searchActive) {
      document.addEventListener('click', handleBodyClick);
    }

    return () => {
      document.removeEventListener('click', handleBodyClick);
    };
  }, [searchActive]);
  
  const toggleSearchBar = () => {
    setSearchActive(!searchActive);
  };

  

  return (
   <div className="">
    {isLoading ? <img src='/images/loading.svg' alt='Loading' className='h-[85px] m-auto' /> : 
      error ? "Something went wrong!" : (<div name="container" className="" >
      <h1 className="font-amaze font-semibold text-[30px] pl-5">Conversations</h1>
      <div name="top" className="flex justify-between p-1 gap-2 px-6" >
        <h2 className="font-amaze font-semibold text-gray-500 text-lg ">All Messages</h2>
        {searchActive ? (
            <input
              type="text"
              placeholder="Search..."
              className="border-b-2 border-[#778DA9] p-1 focus:outline-none rounded"
              ref={searchClose}
            />
          ) : (
            <FaMagnifyingGlass className="h-5 w-5 sm:h-6 sm:w-6" onClick={(e) => {
              e.stopPropagation();
              toggleSearchBar();
            }} />
          )}
      </div>
      
      <div name="bottom" className="flex flex-col h-[23pc] border-2 border-[#778DA9] p-5 m-5 rounded-lg overflow-y-scroll bg-[#415A77] w-90% scrollable-content">
      {data.map(c=>(
          <Link to={`/chat/${c.id}`} className="w-full p-2" key={c.id}>
            <div name="messages" className="bg-[#778DA9] h-[62px] w-full rounded-lg hover:bg-[#0D1B2A] overflow-hidden">
             <div name='userchat' className="flex items-center p-2 gap-2">
                <img src={c.img || "/images/profile.jpg"} alt="pp" className="h-[40px] w-[40px] rounded-full object-cover"/>
              <div name="userchatinfo" className="flex flex-grow flex-col ">
                <span className="font-amaze text-[22px] font-normal text-white ">{currentUser.isSeller ? c.buyerId : c.sellerId}</span>
                <p className="font-amaze font-light text-white"> {c.lastMessage?.substring(0,75)}...</p>
              </div>
              <div className="justify-end ">
              <p className="font-amaze text-lg text-white">{moment(c.updateAt).fromNow()}</p>
              </div>
             </div>
            </div>
          </Link>))}
        </div>
    </div>)}
   </div>
  );
};

export default Chats;