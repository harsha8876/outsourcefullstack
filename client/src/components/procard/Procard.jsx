import React from 'react';
import { Link } from 'react-router-dom';

const Procard = ({ item }) => {
  return (
    <Link to="/">
      <div className='w-full h-[20pc] mx-2 text-white rounded-md cursor-pointer relative flex items-center'>
      <div name="procard" className="flex flex-col h-fit mx-2 w-full hover:opacity-80 hover:scale-105 rounded-lg object-contain shadow-2xl">
         <img src={item.img} alt='image' className='h-[210px] w-full'/>
         <div name='info' className='flex gap-4 pt-4 px-2'>
            <img src={item.pp} alt='profile' className='h-[40px] w-[40px] rounded-full object-cover'/>
            <div name='text' className=''>
               <h2 className='font-amaze font-semibold text-black'>{item.cat}</h2>
               <span className='font-amaze text-gray-600'>{item.username}</span>
            </div>
         </div>      
      </div></div>
    </Link>
  );
};

export default Procard;
