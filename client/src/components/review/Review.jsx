import React from 'react'
import { FaStar} from "react-icons/fa6";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';


const Review = ({ review }) => {

  const { isLoading, error, data } = useQuery(
    {
      queryKey: [review.userId],
      queryFn: () =>
        newRequest.get(`/users/${review.userId}`).then((res) => {
          return res.data;
        }),
    },
  );
 
  return (
    <div>
       <div name='reviewone'>
       {isLoading ? (
        <img src='/images/loading.svg' alt='Loading' className='h-[85px] m-auto' />
      ) : error ? (
        "error"
      ) : (<div name='infowho' className='flex gap-2'>
          <img src={data.img || "/images/profile.jpg"} alt='' className='h-[50px] w-[50px] rounded-full object-cover border-2 border-black'/>
          <div className='flex flex-col gap-0'>
            <span className='font-amaze font-semibold text-[#0D1B2A] text-[14px]'>{data.username}</span>
            
            <span className='font-amaze font-medium text-gray-500'>{data.country}</span>
            

          </div>
        </div>)}

        
        <div className='flex gap-1 items-center py-2'> {Array(review.star)
          .fill()
          .map((item, i) => (<FaStar className='text-yellow-500' key={i}/>))}<span className='font-amaze font-semibold text-[16px] text-gray-500'>{review.star}</span></div>
        <p className='font-amaze font-medium text-gray-600 leading-1'>{review.desc}</p>
        <div className='flex py-2 items-center gap-2 font-medium text-[14px]'>
          <span>Helpful?</span>
          <AiFillLike/>
          <span>Yes</span>
          <AiFillDislike/>
          <span>No</span>

        </div>
        <hr className='border-2px border-slate-500'></hr>
        </div>
    </div>
  )
}

export default Review

