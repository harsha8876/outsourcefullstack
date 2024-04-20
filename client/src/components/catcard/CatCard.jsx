// CatCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CatCard = ({ item }) => {
  const categoryLink = `/gigs?cat=${encodeURIComponent(item.category)}`;
  const handleCardClick = () => {
    window.scrollTo(1, 2); 
  };
  return (
    <Link to={categoryLink} onClick={handleCardClick}>
      <div name="catcard" className="w-full h-[20pc] mx-2 text-white rounded-md cursor-pointer relative">
        <img src={item.img} alt="" className="w-full h-full object-contain hover:opacity-80 hover:scale-105 rounded-lg" />
      </div>
    </Link>
  );
};

export default CatCard;
