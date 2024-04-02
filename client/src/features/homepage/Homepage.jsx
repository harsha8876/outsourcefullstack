import React from 'react'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slider/Slide';
import { cards, gigs, projects } from '../../data';
import CatCard from '../../components/catcard/CatCard';
import About from '../../components/aboutus/About';
import Bizz from '../../components/bizz/bizz';
import Procard from '../../components/procard/Procard';
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest.js';
const Homepage = () => {
  const { isLoading, error, data} = useQuery({
    queryKey: ['progig'],
    queryFn: () =>
      newRequest.get(`/gigs`).then(res=> {
        return res.data;
      })
  })
  const featuredGigs = data ? data.filter(gig => gig.featured === true) : [];
  return (
    <div className='homepage'>
      <Featured/>
      <hr className='border border-solid border-gray-110'/>
      <div className='p-5 '>
      <Slide>
        {cards.map(card=>(
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      </div>
      <About/>

      <Bizz/>
      <div className='p-5'>
      <Slide>
      {isLoading ? <img src='/images/loading.svg' alt='Loading' className='h-[85px] m-auto' /> : error ? "Something went wrong!"
       :  featuredGigs.map((gig)=>(
          <Procard key={gig._id} items={gig}/>
        ))}
      </Slide>
      </div>
    </div>
  )
}

export default Homepage
