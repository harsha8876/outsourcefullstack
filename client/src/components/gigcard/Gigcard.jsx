import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { FaStar, FaHeart } from "react-icons/fa6";
import {useQuery} from "@tanstack/react-query";
import newRequest from '../../utils/newRequest';


const Gigcard = ({item}) => {

   const { isLoading, error, data } = useQuery({
      queryKey: [item.userId],
      queryFn: () =>
        newRequest.get(`/users/${item.userId}`).then((res) => {
          return res.data;
        }),
    });

  return (
    <div className='m-3'>
      <Link to={`/gig/${item._id}`}>
         <div name='gigcard' className='bg-white m-3 rounded-lg shadow-lg md:w-[324px] h-fit'>
            <img src={item.cover} alt='user'className='h-1/2 w-full rounded-t-lg'/>
            {isLoading ? (<img src='/images/loading.svg' alt='Loading' className='h-[85px] m-auto' />) : error ? ("Something went wrong!") :
            (<div name='user' className='flex gap-3 py-3 px-2 items-center'>
               <img src={data.img || "/images/profile.jpg" } alt='profile' className='h-[20px] w-[20px] rounded-full object-cover border-2 border-black'/>
               <span className='font-amaze text-[15px] font-semibold text-black'>{data.username}</span>
            </div>)}
            <p name='desc' className='px-2 font-amaze text-[17px] font-medium leading-none'>{item.title.substring(0,100)}....</p>
            <div name='star' className='flex gap-1 p-2 items-center text-yellow-500'>
               <FaStar className='h-[18px]'/>
               <span className='font-amaze font-semibold text-[18px]'>{!isNaN (item.totalStars / item.starNumber) &&
               Math.round(item.totalStars / item.starNumber)}</span>
            </div>
            <hr className='w-full h-3'></hr>
            <div name='details'  className='text-gray-500 px-2 flex justify-between'>
               {/* <div >
               <FaHeart/>
               </div> */}
               <div name="price" className='flex gap-1 pb-2 items-center px-2'>
               <span className='font-amaze font-semibold text-[15px]'>Staring At</span>
               <h2 className='font-amaze font-semibold text-[15px]'>₹{(item.price)
               }</h2>
               </div>
            </div>
         </div>
      </Link>
      
    </div>
  )
}

export default Gigcard
