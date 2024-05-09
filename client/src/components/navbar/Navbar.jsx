import React, { useState,useRef, useEffect } from 'react'
import { FaBars, FaAngleDown, FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import ScreenSizeDetector from 'screen-size-detector';
import newRequest from '../../utils/newRequest';



const Navbar = () => {
  const screen = new ScreenSizeDetector();

  const checkdevice=()=>{  
      return screen.width < 768;};

const checkfull=()=>{  
      return screen.width < 1275;};



  const [open, setOpen]=useState(false);
  const [isMobile, setisMobile]=useState(checkdevice);
  const [isFull, setisFull]=useState(checkfull);
  const [showFeatures, setShowFeatures] = useState(!isMobile);
  const [showCats, setShowCats] = useState(!isFull);
  const dropdownRef = useRef(null);
  const browseDropdownRef = useRef(null);
  const MenuDropdownRef = useRef(null);

  const handleBodyClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };
  const handleBrowseout=(event)=>{
    if(isMobile && browseDropdownRef.current && !browseDropdownRef.current.contains(event.target)){
      setShowCats(false)
    }
  }
  const handlemenuout = (event) => {
    if (isMobile && MenuDropdownRef.current && !MenuDropdownRef.current.contains(event.target)) {
      setShowFeatures(false);
    }
  };
  
  const  handleResize=()=>{
    if (screen.width < 768) {
      setisMobile(true);
      setShowFeatures(false);
      
    } else {
      setisMobile(false);
      setShowFeatures(true);
      
    }
  };

  const handleFull=()=>{
    if(screen.width < 1275){
      setisFull(true);
      setShowCats(false);
      }else{
        setisFull(false);
        setShowCats(true);
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
    if (showCats) {
      document.addEventListener('click', handleBrowseout);
    }

    return () => {
      document.removeEventListener('click', handleBrowseout);
    };
  }, [showCats]);
  useEffect(() => {
    if (showFeatures) {
      document.addEventListener('click', handlemenuout);
    }

    return () => {
      document.removeEventListener('click', handlemenuout);
    };
  }, [showFeatures]);

    window.addEventListener('resize', handleResize);
    window.addEventListener('resize', handleFull);

    
  

  

  const handleBarsClick = () => {
    setShowFeatures(!showFeatures);
  };

  const handleBrowseClick = () => {
    setShowCats(!showCats);
  };  
  
  const currentUser= JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const handleLogout = async () =>
  {
    try{
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/")
      console.log(currentUser)
    }
    catch(err){
      console.log(err);
    }
  };

  const slideLeft=()=>
  {
    var slider=document.getElementById("categories");
    slider.scrollLeft=slider.scrollLeft-500;
  }
  const slideRight=()=>
  {
    var slider=document.getElementById("categories");
    slider.scrollLeft=slider.scrollLeft+500;
  }

  const handlehomeClick = () => {
    window.scrollTo(0, 0); 
  };
  return (
    <div className='sticky top-0 z-[999] w-full'>
      <div name='container' className='flex items-center bg-[#0D1B2A] h-[4pc] justify-between p-3 md:justify-around shadow-lg sticky top-0 z-[999]'>

         <div name='opt' className='object-cover cursor-pointer relative order-1 md:order-2' ref={MenuDropdownRef}>
         {isMobile && <div className={isMobile ?'':'dropd'}>
                <Link to="/login"><button  className='forbtn'>Sign In</button></Link>
              </div>}
         {showFeatures && <><div name="features" className={isMobile ? 'fordrop absolute top-[2pc] left-3 z-20' : 'flex flex-row justify-between gap-7'}>
          {/* <div className={isMobile ?'foroptspa group':'dropd group'}>
                <span className={isMobile ?'':'fortext'}>Business</span>
                <FaAngleDown className={isMobile ?'group-hover:rotate-180':'forangle'}/>
              </div>
              <div className={isMobile ?'foroptspa group':'dropd group'}>
                <span className={isMobile ?'':'fortext'}>Discover
                </span><FaAngleDown className={isMobile ?'group-hover:rotate-180':'forangle'}/>
              </div>
              {!currentUser?.isSeller && <div name='freelance' className={isMobile ?'foroptspa':'dropd'}>
              <span className={isMobile ?'':'fortext'}>FreeLance</span>
              </div>} */}
               {/* {isMobile && <div className={isMobile ?'foroptspa':'dropd'}>
                <Link to="/login"><button  className='forbtn'>Join</button></Link>
              </div> }  */}
              
         </div></>}
         </div>

        
         <div name='logo' className='order-2 md:order-1 border-none outline-none'>
          <Link to="/" onClick={handlehomeClick}>
         <img src='/images/logo-name.png' alt='OUTSOURCE' className='h-[42px] w-[11pc] md:w-[12pc] -mr-3 cursor-pointer hover:scale-105 border-none outline-none'></img>
         </Link>
         </div>

              <div className='order-3 flex gap-3 items-center'>{!isMobile && <div>
                {!isMobile && !currentUser && (
            <div>
              <Link to="/login"><button className='forbtn'>Sign In</button></Link>
            </div>
          )}
              </div>}
          {!currentUser && <div name='joinbutton' className='order-3'>
              <Link to="/register"><button  className='forbtn'>Join</button></Link>
            </div>}</div>

          {currentUser && (
            <div name="user" className='md:hover:bg-[#415A77] md:px-2 md:py-1 md: rounded-lg flex items-center gap-1 relative cursor-pointer order-4 ' onClick={()=>setOpen(!open)} ref={dropdownRef}>
              <img src={currentUser.img || '/images/profile.jpg'} className='h-[35px] w-[35px] rounded-full object-cover p-1'/>
              <span className='fortext tracking-tight hidden md:block'>{currentUser?.username}</span>
              {open && <div name="options" className="fordrop absolute top-[2pc] right-3 z-40" >
                {currentUser?.isSeller && (
                  <>
                  <Link to="mygigs" className='foroptspa'>Gigs</Link>
                  <Link to="add" className='foroptspa'>Add new gig</Link>
                  </>
                )}
                <Link to="orders" className='foroptspa'>Orders</Link>
                <Link to="chats" className='foroptspa'>Messages</Link>
                <Link onClick={handleLogout} className='foroptspa'>Logout</Link>
                </div>}
            </div>

          )}

         
      </div>
      <hr></hr>
      <div className='relative'>
      <div className="flex justify-start bg-[#415A77] shadow-3xl" name="Menu">
        <div className={isFull ? 'block':'hidden'} onClick={handleBrowseClick} ref={browseDropdownRef}>
        <div className='flex group items-center'>
          <span className='fortext p-2 text-[15px] group-hover:text-[#0D1B2A] group-hover:font-semibold'>Browse By Category</span>
          <FaAngleDown className={`forangle group-hover:text-[#0D1B2A] group-hover:font-semibold ${showCats ? 'rotate-180' : ''}`}/>
        </div></div></div>{showCats && <><div className={isFull ?'fordrop w-[300px] absolute top-[2pc] left-3' :'flex h-[50px] justify-center gap-3 bg-[#415A77] shadow-3xl items-center relative z-0 p-3 flex-nowrap shrink-0'}>

          <Link to="/gigs?cat=photography" className={isFull ? 'foroptspa' : 'forcategories'}>Photography</Link>
          <Link to="/gigs?cat=interiordesign" className={isFull ? 'foroptspa' : 'forcategories'}>Interior Design</Link>
          <Link to="/gigs?cat=logodesign" className={isFull ? 'foroptspa' : 'forcategories'}>Logo Design</Link>
          <Link to="/gigs?cat=dataentry" className={isFull ? 'foroptspa' : 'forcategories'}>Data Entry</Link>
          <Link to="/gigs?cat=socialmarketing" className={isFull ? 'foroptspa' : 'forcategories'}>Social Marketing</Link>
          <Link to="/gigs?cat=videoediting" className={isFull ? 'foroptspa' : 'forcategories'}>Video Editing</Link>
          <Link to="/gigs?cat=voiceover" className={isFull ? 'foroptspa' : 'forcategories'}>Voiceover</Link>
          <Link to="/gigs?cat=webdevelopment" className={isFull ? 'foroptspa' : 'forcategories'}>Web development</Link>

      </div></>}</div>
      
      </div>
      
      
      
  )

}

export default Navbar
