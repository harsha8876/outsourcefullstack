import React from 'react';
import { Link } from 'react-router-dom';

const CatCard = ({ item }) => {
  return (
    <Link to="/gigs?cat=design">
      <div name="catcard" className="w-full h-[20pc] mx-2 text-white rounded-md cursor-pointer relative">
        <img src={item.img} alt="" className="w-full h-full object-contain hover:opacity-80 hover:scale-105 rounded-lg" />
      </div>
    </Link>
  );
};

export default CatCard;
