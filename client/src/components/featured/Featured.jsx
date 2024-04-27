import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate , Link} from 'react-router-dom';
import { useState } from 'react';

const Featured = () => {

   const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  const handleKeyDown = (event) => {
   if (event.key === 'Enter') {
     handleSubmit();
   }
 };
  return (
    <div name="container" className='flex flex-col bg-[#DCF2F1] w-full md:h-[40pc] items-center md:flex-row'>
      <div name="left" className='order-2 m-3 mt-0 pt-0 leading-none font-semibold flex flex-col items-center gap-7 p-4 w-full md:order-1 md:gap-10'>
         <h1 className='text-[#0F1035] font-amaze text-[30px] md:text-[40px] md:w-[38vw]'>Find the right freelance service, the better way</h1>
         <div name="search" className='flex hover:shadow-xl'>
         <div name="searchInput" className='flex bg-white rounded-l-lg'>
            <div name="searchicon" className='p-3'><FaMagnifyingGlass className='h-[20px] w-[20px] hover:scale-105'/></div>
            <input  type="text" placeholder="Search for a service..." 
             className='p-3 border-none outline-none md:w-[30vw] focus:ring-0'
             onChange={(e) => setInput(e.target.value)}
             onKeyDown={handleKeyDown}
             />
         </div>
         <div name="searchbutton" className='bg-[#0F1035] text-white p-3 rounded-r-lg hover:bg-[#365486]'><button onClick={handleSubmit} >Search</button></div>
         </div>
         <div name="popular" className='flex gap-7 font-amaze flex-wrap md:pt-6 '>
            <span className='text-[#0F1035] '>Popular:</span>
            <Link to="/gigs?cat=webdevelopment" className='forpopular'>web design</Link>
            <Link to="/gigs?cat=photography" className='forpopular'>Photography</Link>
            <Link to="/gigs?cat=voiceover" className='forpopular'>Voice Over</Link>
         </div>
      </div>
      <div name="right" className='order-1 m-3 md:order-2'>
         <img src='/images/featured-image.png' alt='Freelance Website' className='h-[20pc] w-[80pc] md:h-[30pc] md:w-[90pc]'></img>  
      </div>  
    </div>
  )
}

export default Featured
