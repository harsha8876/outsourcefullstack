import React, { useEffect, useState } from 'react'
import { FaStar} from "react-icons/fa6";
import { FaClock, FaArrowsRotate, FaCheck } from "react-icons/fa6";
import { Carousel } from 'flowbite-react';
import {useQuery} from "@tanstack/react-query"
import { Link, useParams } from 'react-router-dom';
import newRequest from '../../utils/newRequest.js';
import Reviews from '../../components/reviews/Reviews';



const Gig = () => {

  const {id}=useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ['gig'],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then(res=> {
        return res.data;
      })
  })


  const userId=data?.userId;

  const { isLoading:isLoadingUser , error:errorUser, data:dataUser,refetch: refetchUser} = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then(res=> {
        return res.data;
      }),
      enabled: !!userId,
  })

  useEffect(() => {
    if (userId) {
      refetchUser();
    }
  }, [id, userId, refetchUser]);

  const contactSeller = () => {
    const email = dataUser.email; 
    window.location.href = `mailto:${email}`;
  };
  const categoryLink = data ? `/gigs?cat=${encodeURIComponent(data.cat)}` : '';
  return (
    <div name='gig' className=''>
      {isLoading ? <img src='/images/loading.svg' alt='Loading' className='h-[85px] m-auto' /> : 
      error ? "Something went wrong!" : <div name='container' className='m-5 flex flex-col xl:mx-[125px] xl:flex-row xl:flex-wrap xl:relative'>
      <div name='left' className='flex flex-col xl:w-[48vw]'>
        <span name='breadcrumbs' className='font-amaze text-gray-500 text-sm font-medium'><Link to={categoryLink}> {data.cat.toUpperCase()} &gt;</Link></span>
          <h1 className='text-[#0D1B2A] text-[30px] font-semibold py-7 leading-none'>
            {data.title}</h1>
          {isLoadingUser ? (<img src='/images/loading.svg' alt='Loading' className='h-[85px] m-auto' />) : errorUser ? ("Something went wrong!") :<div name='profile' className='flex items-center gap-2'>
            <img src={dataUser.img || "/images/profile.jpg"} alt='' className='h-[35px] w-[35px] rounded-full object-cover border-2 border-black'/>
            <span className='font-amaze font-semibold text-gray-500'>{dataUser.username}</span>
            {!isNaN (data.totalStars / data.starNumber) && <><div name='stars' className='flex items-center text-yellow-500'>
                {Array(Math.round(data.totalStars / data.starNumber)).fill().map((item, i)=>(<FaStar key={i}/>))}
            </div>
            <span className='font-amaze font-medium text-[18px] text-gray-500'>
               {Math.round(data.totalStars / data.starNumber)}</span></>}
          </div>}
      <div>
      <div name="slider" className='w-3/4 m-auto'>
    <div name="container" className='mt-5 mb-5' >
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {data.images.map((img)=>(
      <img key={img} src={img} alt=''/>))}
      </Carousel>
    </div>


    </div>
  </div>
      </div>
      </div>
      <div name='right' className='flex flex-col p-3 xl:w-[25pc] xl:sticky xl:top-[10pc] xl:left-[60pc]'>
          <div name='pricing' className='border-[1px] border-slate-500 p-5'>
            <div className='flex justify-between'>
              <h2 className='font-amaze text-[#0D1B2A] font-semibold'>{data.shortTitle}</h2>
              <h2 className='font-amaze text-gray-600 text-[20px]'>₹{data.price}</h2>
            </div>
            <p className='font-amaze text-gray-600 font-medium py-5'>{data.shortDesc}</p>
            <div className='flex justify-between'>
              <div className='flex gap-1 items-center text-gray-700'>
                <FaClock/>
                <span className='text-[15px] font-medium'>{data.deliveryTime} days delivery</span>
              </div>
              <div className='flex gap-1 items-center text-gray-700'>
                <FaArrowsRotate/>
                <span className='text-[15px] font-medium'>{data.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className='py-2 flex flex-col'>
              {data.features.map((feature)=>(
              <div className='flex gap-2 items-center' key={feature}>
                <FaCheck className='text-[#365486]'/>
                <span>{feature}</span>
              </div>))}
            </div>
            <Link to={`/pay/${id}`}>
            <button className='hover:border-[#365486] hover:text-[#365486] border-[1px] w-full p-2 my-2 font-medium text-white bg-[#365486] hover:bg-white'>Continue</button>
            </Link>
          </div>

      </div>
      <div name='remainleft' className='flex flex-col xl:w-[48vw]'>
      <h2 className='font-amaze font-semibold text-[#365486] text-[18px] py-4 pt-2'>About this Gig</h2>
      <p name='desc' className='font-amaze text-gray-500 font-medium'>{data.desc}</p>
      
      {isLoadingUser ? (<img src='/images/loading.svg' alt='Loading' className='h-[85px] m-auto' />) : errorUser ? ("Something went wrong!") :<div name="seller" className='py-3'>
        <h2 className='font-amaze font-semibold text-[#365486] text-[18px] py-4'>About the Seller</h2>
        <div className='flex flex-col justify-center w-full items-center gap-3 xl:flex-row'>
          <img src={dataUser.img || "/images/profile.jpg"} alt='' className='h-[35px] w-[35px] rounded-full object-cover border-2 border-black'/>
          <div className='flex flex-col justify-center w-full items-center xl:items-start'>
            <span className='font-amaze font-semibold text-gray-500'>{dataUser.username}</span>
            {!isNaN (data.totalStars / data.starNumber) && <><div className='flex gap-3 items-center'>{Array(Math.round(data.totalStars / data.starNumber)).fill().map((item, i)=>(<FaStar className='text-yellow-500' key={i}/>))}<span className='font-amaze font-medium text-[18px] text-gray-500'>{Math.round(data.totalStars / data.starNumber)}</span></div></>}
            <button onClick={contactSeller} className='border-[#365486] text-[#365486] border-[1px] w-full p-2 font-medium hover:text-white hover:bg-[#365486] xl:w-[150px] xl:p-1'>Contact Me</button>
          </div>
        </div>
        <div className='border-gray-500 border-[1px] my-3 p-5'>
          <div className='pb-2 xl:flex'>
            <div  className='flex flex-col gap-3 xl:w-1/2 xl:justify-start'>
              <div className='flex flex-col gap-1'>
                <span className='font-amaze font-medium text-gray-600'>From</span>
                <span className='font-amaze font-semibold text-gray-900'>{dataUser.country}</span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='font-amaze font-medium text-gray-600'>Member since</span>
                <span className='font-amaze font-semibold text-gray-900'>Aug 2022</span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='font-amaze font-medium text-gray-600'>Average response time</span>
                <span className='font-amaze font-semibold text-gray-900'>5 hrs</span>
              </div>
            </div>
          <div  className='flex flex-col gap-3  xl:w-1/2 xl:justify-start'>
            <div className='flex flex-col gap-1'>
              <span className='font-amaze font-medium text-gray-600'>Latest Delivery</span>
              <span className='font-amaze font-semibold text-gray-900'>1 Day</span>
            </div>
            <div className='flex flex-col gap-1'>
              <span className='font-amaze font-medium text-gray-600'>Languages</span>
              <span className='font-amaze font-semibold text-gray-900'>English</span>
            </div>
          </div>
          </div>
          <hr className='py-2 border-2px border-slate-400'></hr>
          <p name='about'  className='font-amaze font-medium text-gray-600 leading-1'>{dataUser.desc}</p>
        </div>
      </div>} 
      <Reviews gigId={id} />

         
      </div>
      </div>}
    </div>
  )
}

export default Gig
