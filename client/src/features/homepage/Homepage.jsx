import React from 'react'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slider/Slide';
import { cards, projects } from '../../data';
import CatCard from '../../components/catcard/CatCard';
import About from '../../components/aboutus/About';
import Bizz from '../../components/bizz/bizz';
import Procard from '../../components/procard/Procard';
const Homepage = () => {
  return (
    <div className='homepage'>
      <Featured/>
      <hr className='border border-solid border-gray-110'/>
      <div className='p-5 '>
      <Slide>
        {cards.map(card=>(
          <CatCard key={card.id} item={card}/>
        ))}
      </Slide>
      </div>
      <About/>

      <Bizz/>
      <div className='p-5'>
      <Slide>
        {projects.map(card=>(
          <Procard key={card.id} item={card}/>
        ))}
      </Slide>
      </div>
    </div>
  )
}

export default Homepage
