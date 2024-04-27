import React, { useState, useRef, useEffect } from 'react';
import Gigcard from '../../components/gigcard/Gigcard';
import { FaAngleDown } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import newRequest from '../../utils/newRequest';
import { Link, useLocation } from 'react-router-dom';
import { categories } from '../../data.js';

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");
  const minRef = useRef();
  const maxRef = useRef();

  const location = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['gigs'],
    queryFn: () =>
      newRequest.get(`/gigs${location.search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`).then(res => {
        return res.data;
      })
  });

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    refetch();
  };

  const dropdownRef = useRef(null);
  const handleBodyClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('click', handleBodyClick);
    }

    return () => {
      document.removeEventListener('click', handleBodyClick);
    };
  }, [open]);

  useEffect(() => {
    refetch();
  }, [location.search,sort]); 

  useEffect(() => {
    refetch();
  }, []);

  const category = new URLSearchParams(location.search).get('cat');
  const { breadcrumbs, title, description } = categories[category] || {};

  return (
    <div name='gigs' className=''>
      <div name='container' className='m-5 md:flex md:flex-col md:gap-[15px] md:px-[100px]'>
        <span name='breadcrumbs' className='font-amaze text-gray-500 text-sm font-medium'><Link to="/">OUTSOURCE</Link>{breadcrumbs}</span>
        <h1 className='text-[#0D1B2A] text-[30px] font-semibold py-2'>{title}</h1>
        <p className='text-gray-600 font-amaze font-medium'>{description}</p>

        <div name='menu' className='py-2 md:flex md:justify-between'>
          <div name='left' className='flex gap-3 w-full items-center'>
            <span className='font-amaze font-semibold text-[#0D1B2A]'>Budget</span>
            <input type='text' ref={minRef} placeholder='min' className='text-gray-500 font-medium w-1/4 border-gray-400 border-[1px] rounded-lg px-1 focus:border-blue-400 focus:outline-none'></input>
            <input type='text' ref={maxRef} placeholder='max' className='text-gray-500 font-medium w-1/4 border-gray-400 border-[1px] rounded-lg px-1 focus:border-blue-400 focus:outline-none'></input>
            <button className='forpopular font-medium px-2' onClick={apply}>Apply</button>
          </div>
          <div name='right' className='flex gap-2 items-center pt-2 md:w-1/2 md:justify-end'>
            <span className='font-amaze font-semibold text-[#0D1B2A]'>Sort By: </span>
            <div className='flex items-center gap-2 relative group cursor-pointer' onClick={() => setOpen(!open)} ref={dropdownRef}>
              <span className='text-gray-500 font-medium ' >{sort === "sales" ? "Best Selling" : "Newest"}</span>
              <FaAngleDown className='text-gray-500 font-medium group-hover:rotate-180 transition duration-150 ease-in-out transform' />

              {open && <div name='rightdrop' className='fordrop absolute top-5'>
                {sort === "sales" ? <span className='foroptspa' onClick={() => reSort("createdAt")}>Newest</span> :
                  <span className='foroptspa' onClick={() => reSort("sales")}>Best Selling</span>
                }
              </div>}</div>

          </div>
        </div>
        <div name='cards' className='md:flex md:flex-wrap md:justify-start md:gap-10'>
          {isLoading ? <img src='/images/loading.svg' alt='Loading' className='h-[85px] m-auto' /> : error ? "Something went wrong!" : data.map((gig) => (
            <Gigcard key={gig._id} item={gig} />
          ))}</div>
      </div>


    </div>

  );

}

export default Gigs;
