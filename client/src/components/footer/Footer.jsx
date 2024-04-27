import React, { useState } from 'react'
import { FaAngleDown, FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ScreenSizeDetector from 'screen-size-detector';



const Footer = () => {
  const screen = new ScreenSizeDetector();

  const checkdevice=()=>{  
      return screen.width < 768;};

      const [isMobile, setisMobile]=useState(checkdevice);
      const [showFeatures1, setShowFeatures1] = useState(!isMobile);
      const [showFeatures2, setShowFeatures2] = useState(!isMobile);
      const [showFeatures3, setShowFeatures3] = useState(!isMobile);
      const [showFeatures4, setShowFeatures4] = useState(!isMobile);
      const [showFeatures5, setShowFeatures5] = useState(!isMobile);

      const  handleResize=()=>{
        if (screen.width < 768) {
          setisMobile(true);
          setShowFeatures1(false);
          setShowFeatures2(false);
          setShowFeatures3(false);
          setShowFeatures4(false);
          setShowFeatures5(false);
          
        } else {
          setisMobile(false);
          setShowFeatures1(true);
          setShowFeatures2(true);
          setShowFeatures3(true);
          setShowFeatures4(true);
          setShowFeatures5(true);
          
        }
      };

      window.addEventListener("resize",handleResize);

      const handleBarsClick1 = () => {
        setShowFeatures1(!showFeatures1);
      };
      const handleBarsClick2 = () => {
        setShowFeatures2(!showFeatures2);
      };
      const handleBarsClick3 = () => {
        setShowFeatures3(!showFeatures3);
      };
      const handleBarsClick4 = () => {
        setShowFeatures4(!showFeatures4);
      };
      const handleBarsClick5 = () => {
        setShowFeatures5(!showFeatures5);
      };

      const handleLinkClick = () => {
        resetDropdowns(isMobile);
        window.scrollTo(0, 0); 
      };
  return (
    <div>
    <div name="footer" className='bg-[#0F1035] flex flex-col absolute w-full '>
      <div name='drops' className='flex flex-col m-4 bg-[#1B263B] rounded-lg md:flex-row md:items-start'>
        <div name='heading' className='forfootheads group'>
          <div className='forfootfea' onClick= {isMobile ? handleBarsClick1 : null}><span>Categories</span>
          <FaAngleDown className={`md:hidden transition duration-150 ease-in-out transform ${showFeatures1 ? 'rotate-180' : ''}`}/></div>
          {showFeatures1 && <div className='flex flex-col gap-1 cursor-pointer'>
            <Link to="/gigs?cat=logodesign" className='hover:bg-[#365486]' onClick={handleLinkClick}>Logo Design</Link>
            <Link to="/gigs?cat=socialmarketing" className='hover:bg-[#365486]' onClick={handleLinkClick}>Social Marketing</Link>
            <Link to="/gigs?cat=photography" className='hover:bg-[#365486]' onClick={handleLinkClick}>Photography</Link>
            <Link to="/gigs?cat=webdevelopment" className='hover:bg-[#365486]' onClick={handleLinkClick}>Web Development</Link>
          </div>}
                </div>
        <div name='heading' className='forfootheads group'>
        <div className='forfootfea' onClick= {isMobile ? handleBarsClick2 : null}><span>About</span>
        <FaAngleDown className={`md:hidden transition duration-150 ease-in-out transform ${showFeatures2 ? 'rotate-180' : ''}`}/></div>
        {showFeatures2 && <div className='flex flex-col gap-1 cursor-pointer'>
            <Link to="/privacypolicy" onClick={handleLinkClick} className='hover:bg-[#365486]'>Privacy policy</Link >
            <Link to="/terms&service" onClick={handleLinkClick} className='hover:bg-[#365486]'>Terms of service</Link>
          </div>}
          
        </div>
        <div name='heading' className='forfootheads group'>
          <div className='forfootfea' onClick= {isMobile ? handleBarsClick3 : null}>
          <span>Support</span>
          <FaAngleDown className={`md:hidden transition duration-150 ease-in-out transform ${showFeatures3 ? 'rotate-180' : ''}`}/></div>
          {showFeatures3 && <div className='flex flex-col gap-1 cursor-pointer'>
            <Link to="/support" onClick={handleLinkClick} className='hover:bg-[#365486]'>Help & Support</Link>
            <Link to="/contactus"  onClick={handleLinkClick} className='hover:bg-[#365486]'>Contact Us</Link>
          </div>}
          
        </div>
        <div name='heading' className='forfootheads group'>
        <div className='forfootfea' onClick= {isMobile ? handleBarsClick4 : null}><span>Community</span>
        <FaAngleDown className={`md:hidden transition duration-150 ease-in-out transform ${showFeatures4 ? 'rotate-180' : ''}`}/></div>
        {showFeatures4 && <div className='flex flex-col gap-1 cursor-pointer'>
            {/* <span className='hover:bg-[#365486]'>Community hub</span> */}
            <Link to="/blog" onClick={handleLinkClick} className='hover:bg-[#365486]'>Outsource Blog</Link>
            <Link to="/social" onClick={handleLinkClick} className='hover:bg-[#365486]'>Social</Link>
          </div>}
          
        </div>
        <div name='heading' className='forfootheads group'>
        <div className='forfootfea' onClick= {isMobile ? handleBarsClick5 : null}><span>About us</span>
        <FaAngleDown className={`md:hidden transition duration-150 ease-in-out transform ${showFeatures5 ? 'rotate-180' : ''}`}/></div>
        {showFeatures5 && <div className='flex flex-col gap-1 cursor-pointer'>
            <Link to="/faqs" onClick={handleLinkClick} className='hover:bg-[#365486]'>FAQs</Link>
            <Link to="/purpose" onClick={handleLinkClick} className='hover:bg-[#365486]'>Purpose and Goals</Link>
            <Link to="/working" onClick={handleLinkClick} className='hover:bg-[#365486]'>How It Works</Link>
          </div>}
          
        </div>

      </div>
      <div className='p-4'>
      <div name='sm' className='flex flex-col items-center md:flex-row md:justify-between'>
      <Link to="/"><img src='/images/logo-name.png' alt='OUTSOURCE' className='h-[35px] w-[130px]'></img></Link>
        <span className='pt-2 text-gray-500 font-amaze font-normal'>Outsource - Freelance Marketplace application</span>
        <div className='flex p-2 text-white gap-5'>
          <a href="https://www.facebook.com/profile.php?id=61558851604355&is_tour_dismissed">
            <FaFacebook className='h-[20px] w-[20px]'/>
          </a>
          <a href="https://www.instagram.com/outsource809">
            <FaInstagram className='h-[20px] w-[20px]'/>
          </a>
          <a href="https://in.pinterest.com/outsource0004/">
            <FaPinterest className='h-[20px] w-[20px]'/>
          </a>
          <a href="https://twitter.com/outsource809">
            <FaXTwitter className='h-[20px] w-[20px]'/>
          </a>
        </div>
      </div>
      </div>
      
    </div>
    </div>
  )
}

export default Footer;