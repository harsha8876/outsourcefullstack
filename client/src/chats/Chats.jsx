import React,{useState,useRef,useEffect} from "react";
import { Link } from "react-router-dom"
import { FaComments,FaMagnifyingGlass } from "react-icons/fa6";
const Chats = ({item}) => {
  const [searchActive, setSearchActive] = useState(false);
  const searchClose = useRef(null)
  const [substringLength, setSubstringLength] = useState(100);
  
  useEffect(() => {
    const updateSubstring = () => {
      // Adjust substring length based on window width
      const newSubstringLength = window.innerWidth < 600 ? 30 : 100; // Adjust as needed
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
  

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
  nobis praesentium placeat.`;

  const toggleSearchBar = () => {
    setSearchActive(!searchActive);
  };
  const shortenedMessage = message.substring(0, substringLength) + '...';

  return (
   <div className="">
    <div name="container" className="" >
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
          <Link to="/chat/123" className="w-full p-2">
            <div name="messages" className="bg-[#778DA9] h-[62px] w-full rounded-lg hover:bg-[#0D1B2A] overflow-hidden">
             <div name='userchat' className="flex items-center p-2 gap-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Gl4edCwYs0OFjJ6_VJH8tk-msV2YHQwVjnKOJXWpUQ&s" alt="pp" className="h-[40px] w-[40px] rounded-full object-cover"/>
              <div name="userchatinfo" className="flex flex-grow flex-col ">
                <span className="font-amaze text-[22px] font-normal text-white ">Ladiij</span>
                <p className="font-amaze font-light text-white"> {shortenedMessage}...</p>
              </div>
              <div className="justify-end ">
              <p className="font-amaze text-lg text-white">9:45</p>
              </div>
             </div>
            </div>
          </Link>
          <Link to="/chat/123" className="w-full p-2">
            <div name="messages" className="bg-[#778DA9] h-[62px] w-full rounded-lg hover:bg-[#0D1B2A] overflow-hidden">
             <div name='userchat' className="flex items-center p-2 gap-2 ">
                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="pp" className="h-[40px] w-[40px] rounded-full object-cover"/>
              <div name="userchatinfo" className="flex flex-grow flex-col ">
                <span className="font-amaze text-[22px] font-normal text-white">Ladiij2</span>
                <p className="font-amaze font-light text-white"> {shortenedMessage}...</p>
              </div>
              <div className="justify-end ">
                <p className="font-amaze text-lg text-white">1:55</p>
              </div>
             </div>
            </div>
          </Link>
          <Link to="/chat/123" className="w-full p-2">
            <div name="messages" className="bg-[#778DA9] h-[62px] w-full rounded-lg hover:bg-[#0D1B2A] overflow-hidden ">
             <div name='userchat' className="flex items-center p-2 gap-2  ">
                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="pp" className="h-[40px] w-[40px] rounded-full object-cover"/>
              <div name="userchatinfo" className="flex flex-grow flex-col">
                <span className="font-amaze text-[22px] font-normal text-white">Ladiij3</span>
                <p className="font-amaze font-light text-white "> {shortenedMessage}...</p>
              </div>
              <div className="justify-end ">
              <p className="font-amaze text-lg text-white">7:35</p>
              </div>
             </div>
            </div>
          </Link>
          <Link to="/chat/123" className="w-full p-2">
            <div name="messages" className="bg-[#778DA9] h-[62px] w-full rounded-lg hover:bg-[#0D1B2A] overflow-hidden">
             <div name='userchat' className="flex items-center p-2 gap-2 ">
                <img src="https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="pp" className="h-[40px] w-[40px] rounded-full object-cover"/>
              <div name="userchatinfo" className="flex flex-grow flex-col ">
                <span className="font-amaze text-[22px] font-normal text-white">modi g fan</span>
                <p className="font-amaze font-light text-white"> {shortenedMessage}...</p>
              </div>
              <div className="justify-end ">
              <p className="font-amaze text-lg text-white">00:45</p>
              </div>
             </div>
            </div>
          </Link>
          <Link to="/chat/123" className="w-full p-2">
            <div name="messages" className="bg-[#778DA9] h-[62px] w-full rounded-lg hover:bg-[#0D1B2A] overflow-hidden">
             <div name='userchat' className="flex items-center p-2 gap-2 ">
                <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="pp" className="h-[40px] w-[40px] rounded-full object-cover"/>
              <div name="userchatinfo" className="flex flex-grow flex-col">
                <span className="font-amaze text-[22px] font-normal text-white">randy ortan</span>
                <p className="font-amaze font-light text-white"> {shortenedMessage}...</p>
              </div>
              <div className="justify-end ">
              <p className="font-amaze text-lg text-white">23:00</p>
              </div>
             </div>
            </div>
          </Link>
          <Link to="/chat/123" className="w-full p-2">
            <div name="messages" className="bg-[#778DA9] h-[62px] w-full rounded-lg hover:bg-[#0D1B2A] overflow-hidden">
             <div name='userchat' className="flex items-center p-2 gap-2 ">
                <img src="https://images.pexels.com/photos/1062280/pexels-photo-1062280.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="pp" className="h-[40px] w-[40px] rounded-full object-cover"/>
              <div name="userchatinfo" className="flex flex-grow flex-col ">
                <span className="font-amaze text-[22px] font-normal text-white">joe mama</span>
                <p className="font-amaze font-light text-white "> {shortenedMessage}...</p>
              </div>
              <div className="justify-end ">
              <p className="font-amaze text-lg text-white">8:00</p>
              </div>
             </div>
            </div>
          </Link>
          <Link to="/chat/123" className="w-full p-2">
            <div name="messages" className="bg-[#778DA9] h-[62px] w-full rounded-lg hover:bg-[#0D1B2A] overflow-hidden">
             <div name='userchat' className="flex items-center p-2 gap-2 ">
                <img src="https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="pp" className="h-[40px] w-[40px] rounded-full object-cover"/>
              <div name="userchatinfo" className="flex flex-grow flex-col">
                <span className="font-amaze text-[22px] font-normal text-white">ana</span>
                <p className="font-amaze font-light text-white"> {shortenedMessage}...</p>
              </div>
              <div className="justify-end ">
              <p className="font-amaze text-lg text-white">10:45</p>
              </div>
             </div>
            </div>
          </Link>
        </div>
    </div>
   </div>
  );
};

export default Chats;