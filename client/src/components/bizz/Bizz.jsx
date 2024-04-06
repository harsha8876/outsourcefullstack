import React from 'react'
import { Link } from 'react-router-dom';

const Bizz = () => {
   return (<>
   <div name='container' className='flex flex-col md:flex-row w-full bg-[#0F1035] md:p-[52px] p-[40px]'>
      <div name='left' className='m-3 flex items-center justify-center md:w-[50vw]'>
         <img src='/images/33.png' alt='Freelance Website' className='h-[15pc] w-[40pc] md:h-[23pc] md:w-[38pc] rounded-xl pt-2'></img>
      </div>

      <div name='right' className=''>
      <h1 className=' font-amaze text-[24px] font-semibold p-4 text-white'>OUTSOURCE <i className='text-[23px] font-light'>Business</i></h1>
      <h1 className=' font-amaze text-[35px] font-semibold p-4 text-white'>Generate more leads in less time.</h1>
      <div name='desc' className='font-amaze md:w-[36vw] text-white p-4 text-[19px]'>Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations.</div>
      <Link to='/blog' className='flex pt-4'><button className='bg-[#7FC7D9] p-2 rounded-lg w-full font-amaze text-[#0F1035] font-semibold hover:bg-[#DCF2F1]'>Learn More</button></Link>
      </div>
   </div>
   </>
   
);
}

export default Bizz
