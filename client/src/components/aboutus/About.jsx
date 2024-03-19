import React from 'react'
import { FaCheck } from "react-icons/fa6";

const About = () => {
  return (
    <div name='container' className='flex flex-col md:flex-row w-full bg-[#DCF2F1] md:p-[52px] p-[40px]'>
      <div name='left' className=''>
         <h1 className=' font-amaze text-[28px] font-semibold p-4'>The best part everything</h1>

         <div name='points' className='p-4'>
         <div name='sub'  className='flex gap-2 items-center'><FaCheck className='text-white bg-black rounded-full w-[18px] h-[18px] p-[2px]'/><h2 className='font-amaze text-[18px] text-[#0D1B2A] font-semibold'>Wide Range of Services</h2></div>
         <div name='desc' className='font-amaze md:w-[36vw]'>Whether it's a small task or a big project, freelancers offer a wide range of services. You can find the right expertise for any job.</div>
         </div>

         <div name='points' className='p-4'>
         <div name='sub'  className='flex gap-2 items-center'><FaCheck className='text-white bg-black rounded-full w-[18px] h-[18px] p-[2px]'/><h2 className='font-amaze text-[18px] text-[#0D1B2A] font-semibold'>Budget-Friendly Options</h2></div>
         <div name='desc' className='font-amaze md:w-[36vw]'>You have control over your budget. Freelancers offer different price ranges, giving you the flexibility to choose based on your financial plan.</div>
         </div>

         <div name='points' className='p-4'>
         <div name='sub'  className='flex gap-2 items-center'><FaCheck className='text-white bg-black rounded-full w-[18px] h-[18px] p-[2px]'/><h2 className='font-amaze text-[18px] text-[#0D1B2A] font-semibold'>Platform Security</h2></div>
         <div name='desc' className='font-amaze md:w-[36vw]'>Freelance platforms often have systems in place to ensure your project is secure. Payments and deliverables are tracked, providing peace of mind.</div>
         </div>

         <div name='points' className='p-4'>
         <div name='sub'  className='flex gap-2 items-center'><FaCheck className='text-white bg-black rounded-full w-[18px] h-[18px] p-[2px]'/><h2 className='font-amaze text-[18px] text-[#0D1B2A] font-semibold'>Secure commumication</h2></div>
         <div name='desc' className='font-amaze md:w-[36vw]'>Clear and secure chat rooms where customers can discuss with pre-selected freelancers in order to convey their requirements regarding the work.</div>
         </div>
  

      </div>
      <div name='right' className='m-3 flex items-center justify-center md:w-[50vw]'>
      <img src='/images/aboutus.png' alt='Freelance Website' className='h-[15pc] w-[40pc] md:h-[23pc] md:w-[38pc] rounded-xl pt-2'></img>
      </div>
      
    </div>
  )
}

export default About
