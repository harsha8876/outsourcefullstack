import React, { useState } from 'react'
import upload from '../utils/upload';
import newRequest from  '../utils/newRequest';
import {useNavigate} from "react-router-dom";


const Register = () => {

  const [file, setFile]=useState(null);
  const [user, setUser]=useState({
    username:"",
    email:"",
    password:"",
    img:"",
    country:"",
    isSeller:false,
    desc:""
  });

  const navigate = useNavigate()

  const handleChange = (e) =>{
    setUser((prev)=>{return {...prev,[e.target.name]: e.target.value}})
  };

  const handleSeller = (e) =>{
    setUser((prev)=>{return {...prev, isSeller: e.target.checked}})
  };

  const handleSubmit =async (e) =>{
    e.preventDefault()

    const url = await upload(file)
    try{
      await newRequest.post("/auth/register", {
        ...user,
        img:url,
      });
      navigate("/")
    }
    catch(err){
      console.log(err)
    }
  };



  return (
    <div name='register' className='m-5'>
      
      
      <form onSubmit={handleSubmit} name='entire' className='flex flex-col gap-5 items-center'>
        <div className='flex flex-col md:flex-row gap-5 w-full md:justify-center md:gap-10'>
        <div name='left' className='flex flex-col gap-3'>
        <h1 className="text-gray-600 text-[30px] font-semibold">Create a new account</h1>
        <label className='text-gray-500 font-medium'>Username</label>
        <input name="username" onChange={handleChange} className='text-gray-500 font-medium border-gray-400 border-[1px] p-2 focus:border-blue-400 focus:outline-none w-full' placeholder='Enter your username' />
        <label className='text-gray-500 font-medium'>Email</label>
        <input name="email" type='email' onChange={handleChange} className='text-gray-500 font-medium border-gray-400 border-[1px] p-2 focus:border-blue-400 focus:outline-none w-full' placeholder='Enter your email address'/>
        <label className='text-gray-500 font-medium'>Password</label>
        <input name="password" type='password' onChange={handleChange} placeholder='Enter your password' className='text-gray-500 font-medium border-gray-400 border-[1px] p-2 focus:border-blue-400 focus:outline-none w-full'/>
        <label className='text-gray-500 font-medium'>Profile picture</label>
        <input type='file' onChange={(e)=>setFile(e.target.files[0])}  className='text-gray-500 font-medium border-gray-400 border-[1px] p-2 focus:border-blue-400 focus:outline-none w-full'/>
        <label className='text-gray-500 font-medium'>Country</label>
        <input name="country" type='text' onChange={handleChange} className='text-gray-500 font-medium border-gray-400 border-[1px] p-2 focus:border-blue-400 focus:outline-none w-full' placeholder='e.g., United States'/>
        </div>

        
        
        
       
        <div  name='right' className='flex flex-col gap-3'>
        <h1 className="text-gray-600 text-[30px] font-semibold">I want to become a Seller.</h1>
        
            <div className='flex gap-2'>
            <label className='text-gray-500 font-medium text-[20px]'>Activate Seller account</label>
            <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" onChange={handleSeller}/>
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            </div>
        <label className='text-gray-500 font-medium'>Phone Number</label>
        <input name="phone" type='text' onChange={handleChange} className='text-gray-500 font-medium border-gray-400 border-[1px] p-2 focus:border-blue-400 focus:outline-none' placeholder='Enter your number'/>
        <label className='text-gray-500 font-medium'>Description</label>
        <textarea name="desc" onChange={handleChange} className='text-gray-500 font-medium border-gray-400 border-[1px] p-2 focus:border-blue-400 focus:outline-none' placeholder='Enter your description'/>
      </div></div>

      <div className='w-full md:w-[47vw]'>
        <button className='bg-[#0D1B2A] text-white rounded-lg hover:bg-[#365486] font-medium p-2 w-full'>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register
