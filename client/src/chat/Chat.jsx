import React from 'react'
import { Link , useParams} from 'react-router-dom'
import { useQuery , useMutation , useQueryClient} from '@tanstack/react-query';
import newRequest from '../utils/newRequest';

const Chat = () => {

  const {id} = useParams();


  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };
  return (
    <div name="main" className='flex justify-center bg-[#DCF2F1] '>
      <div name="container" className=' h-full w-[550px] m-11 md:w-[1200px] bg-white rounded-xl'>
        <div className='bg-[#415A77] rounded-t-lg p-2 shadow-md'>
        <span name="breadcrumbs" className='font-medium text-[13px] text-gray-400 p-4'>
          <Link to="/chats">Messages</Link>
        </span></div>
        {isLoading ? "loading" : 
      error ? "Something went wrong!" :
       <div name="messages" className='px-2 sm:px-12 flex flex-col gap-5 h-96 overflow-y-auto scrollable-content'>
          
          {data.map(m=>(
          <div name="item" className={m.userId === currentUser._id ? "foritemowner" : "foritem"} key={m._id}>
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className='h-[40px] w-[40px] rounded-full object-cover'
            />
            <p className={m.userId === currentUser._id ? 'forclmsg ' : "formsg"}>
              {m.desc}
            </p>
          </div>))}
        </div>}
        <hr className='border-2'/>
        <form name="write" className='flex items-center justify-around pb-2 pt-6 bg-[#415A77]' onSubmit={handleSubmit}>
          <input type="text" placeholder="write a message..." className='h-[35px] sm:w-[400px] md:w-[600px] rounded-lg px-2 bg-gray-100 outline-none'/>
          <button className='forpopular w-[90px]' type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Chat