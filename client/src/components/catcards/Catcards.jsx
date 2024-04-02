// Catcards.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Catcards = ({ category }) => {
  const categoryLink = `/gigs?cat=${encodeURIComponent(category)}`;

  return (
    <Link to={categoryLink}>
      <div name='catcard' className='w-[252px] h-[344px] rounded-md cursor-pointer'>
        <img src={item.img} alt={item.title} className='w-full h-full object-cover'/>
      </div>
    </Link>
  );
};

export default Catcards;
