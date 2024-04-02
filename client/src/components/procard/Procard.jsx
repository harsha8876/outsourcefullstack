import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest.js';
const Procard = ({ item }) => {
  
  const { isLoading, error, data } = useQuery({
    queryKey: [Procard],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  });
  
  return (
    <Link to={`/gig/${item._id}`}>
        {isLoading ? (<img src='/images/loading.svg' alt='Loading' className='h-[85px] m-auto' />) : error ? ("Something went wrong!") :
      <div className='w-full h-[20pc] mx-2 text-white rounded-md cursor-pointer relative flex items-center'>
      <div name="procard" className="flex flex-col h-fit mx-2 w-full hover:opacity-80 hover:scale-105 rounded-lg object-contain shadow-2xl">
         <img src={item.cover} alt='image' className='h-[210px] w-full'/>
         <div name='info' className='flex gap-4 pt-4 px-2'>
            <img src={data.img || "/images/profile.jpg" } alt='profile' className='h-[40px] w-[40px] rounded-full object-cover'/>
            <div name='text' className=''>
               <h2 className='font-amaze font-semibold text-black'>{item.cat}</h2>
               <span className='font-amaze text-gray-600'>{data.username}</span>
            </div>
         </div>      
      </div></div>}
    </Link>
  );
};

export default Procard;
