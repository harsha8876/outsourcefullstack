import React from 'react'
import Review from '../review/Review';
import newRequest from '../../utils/newRequest.js';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';


const Reviews = ({gigId}) => {
  const queryClient = useQueryClient()
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/reviews/${gigId}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post("/reviews", review);
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(["reviews"])
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({ gigId, desc, star });
  };
  
  

  return (
    
    <div>
      <div name='review'>
        <h2  className='font-amaze font-semibold text-[#365486] text-[18px] py-4'>Reviews</h2>
        <div name='reviewall' className='flex flex-col gap-3'>
        {isLoading ? <img src='/images/loading.svg' alt='Loading' className='h-[85px] m-auto' /> : error ? "Something went wrong!" : data.map((review) => 
        <Review key={review._id} review={review}/>)}
        <div name="add">
        <h3 className='font-amaze font-semibold text-[#365486] text-[18px] py-4'>Add a review</h3>
        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-2' name="addreview">
          <div className='w-full flex justify-between'>
          <input type="text" placeholder="write your opinion" className='w-full rounded-lg'/>
          <select name="" id="" className='rounded-lg'>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select></div>
          <button type='submit' className='hover:border-[#365486] hover:text-[#365486] border-[1px] w-[90px] p-1 my-2 font-medium text-white bg-[#365486] hover:bg-white rounded-lg'>Send</button>
        </form>
      </div>
        </div>
        </div>
      </div>
    
  )
}

export default Reviews
