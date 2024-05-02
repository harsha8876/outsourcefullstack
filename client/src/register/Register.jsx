import React, { useState } from 'react'
import upload from '../utils/upload';
import newRequest from  '../utils/newRequest';
import {Link, useNavigate} from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const countries = [
  { label: 'United States', value: 'United States' },
  { label: 'Canada', value: 'Canada' },
  { label: 'United Kingdom', value: 'United Kingdom' },
  { label: 'Germany', value: 'Germany' },
  { label: 'France', value: 'France' },
  { label: 'Australia', value: 'Australia' },
  { label: 'China', value: 'China' },
  { label: 'India', value: 'India' },
  { label: 'Japan', value: 'Japan' },
  { label: 'South Korea', value: 'South Korea' },
  { label: 'Brazil', value: 'Brazil' },
  { label: 'Mexico', value: 'Mexico' },
  { label: 'Russia', value: 'Russia' },
  { label: 'South Africa', value: 'South Africa' },
  { label: 'Nigeria', value: 'Nigeria' },
  { label: 'Egypt', value: 'Egypt' },
  { label: 'Saudi Arabia', value: 'Saudi Arabia' },
  { label: 'Turkey', value: 'Turkey' },
  { label: 'United Arab Emirates', value: 'United Arab Emirates' },
  { label: 'Pakistan', value: 'Pakistan' },
  { label: 'Indonesia', value: 'Indonesia' },
  { label: 'Argentina', value: 'Argentina' },
  { label: 'Colombia', value: 'Colombia' },
  { label: 'Chile', value: 'Chile' },
  { label: 'Peru', value: 'Peru' },
];

const Register = () => {

  const [file, setFile]=useState(null);
  const [errors, setErrors] = useState({});
  const [user, setUser]=useState({
    username:"",
    email:"",
    password:"",
    img:"",
    country:"",
    isSeller:false,
    desc:""
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const handleChange = (e) =>{
    setUser((prev)=>{return {...prev,[e.target.name]: e.target.value}})
  };

  const handleSeller = (e) =>{
    setUser((prev)=>{return {...prev, isSeller: e.target.checked}})
    
  };
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[^\s]).{8,}$/;
    return regex.test(password);
  };


  const handleSubmit =async (e) =>{
    e.preventDefault()
    // Validate email
    if (!validateEmail(user.email)) {
      setErrors((prev) => ({ ...prev, email: 'Invalid email address' }));
      return;
    }

    // Validate password
    if (!validatePassword(user.password)) {
      setErrors((prev) => ({
        ...prev,
        password: 'Must contain 8+ characters, mixed case, numbers, and symbols.',
      }));
      return;
    }

    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div name='register' className='m-5'>
      
      
      <form onSubmit={handleSubmit} name='entire' className='flex flex-col gap-5 items-center'>
        <div className='flex flex-col md:flex-row gap-5 w-full md:justify-center md:gap-10'>
        <div name='left' className='flex flex-col gap-3'>
        <h1 className="text-gray-600 text-[30px] font-semibold">Create a new account</h1>
        <label className='text-gray-500 font-medium'>Username</label>
        <input name="username" onChange={handleChange} className='text-gray-500 font-medium border-gray-400 border-[1px] p-2 focus:border-blue-400 focus:outline-none w-full' placeholder='Enter your username' required/>
        <label className='text-gray-500 font-medium'>Email</label>
        <input name="email" type='email' onChange={handleChange} className='text-gray-500 font-medium border-gray-400 border-[1px] p-2 focus:border-blue-400 focus:outline-none w-full' placeholder='Enter your email address' required/>
        {errors.email && <p className="text-red-500">{errors.email}</p>}
        <label className='text-gray-500 font-medium'>Password</label>
        <div className='relative'>
        <input
            name="password"
            type={showPassword ? 'text' : 'password'}
            onChange={handleChange}
            placeholder='Enter your password'
            className='text-gray-500 font-medium border-gray-400 border-[1px] p-2 focus:border-blue-400 focus:outline-none w-full pr-10'
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className='absolute top-0 right-0 h-full w-10 flex items-center justify-center cursor-pointer text-gray-500'
          >
            {showPassword ? <FaRegEyeSlash className="h-5 w-5" /> : <FaRegEye className="h-5 w-5" />}
          </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        <label className='text-gray-500 font-medium'>Profile picture</label>
        <input type='file' onChange={(e)=>setFile(e.target.files[0])}  className='text-gray-500 font-medium border-gray-400 border-[1px]  focus:border-blue-400 focus:outline-none w-full'/>
        <label className='text-gray-500 font-medium'>Country</label>
            <select
              name='country'
              onChange={handleChange}
              className='text-gray-500 font-medium border-gray-400 border-[1px] p-2 focus:border-blue-400 focus:outline-none w-full'
            >
              <option value=''>Select your country</option>
              {countries.map((country, index) => (
                <option key={index} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
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
        <div name="signin" className='flex items-center p-1 text-[18px]'>
          <h3>Already have an account? </h3> <Link to="/login" className='p-2 text-[blue] underline'>Sign in</Link>
        </div>
      </div>
      </div>

      <div className='w-full md:w-[47vw]'>
        <button className='bg-[#0D1B2A] text-white rounded-lg hover:bg-[#365486] font-medium p-2 w-full'>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register
