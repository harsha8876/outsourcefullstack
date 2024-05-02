import React, { useState } from 'react';
import newRequest from '../../utils/newRequest';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Login = () => {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate();

  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    try{
    const res = await newRequest.post("auth/login",{username,password});
    localStorage.setItem("currentUser",JSON.stringify(res.data))
    navigate("/")
  }
    catch(err){
      setError(err.response.data);
    }
  }

  return (
    <div name='login' className='m-5 md:flex md:justify-center md:py-7'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <h1 className='text-gray-600 text-[40px] font-semibold'>Sign In</h1>
        <label html="" className='text-gray-500 font-medium'>Username</label>
        <input name='username' type='text' placeholder='Eg - John Doe' 
        onChange={e=>setUsername(e.target.value)} className='text-gray-500 font-medium w-full border-gray-400 border-[1px] p-2 focus:border-blue-400 focus:outline-none md:w-[30pc]'/>
        <label html="" className='text-gray-500 font-medium'>Password</label>
        <input type='password' name='password' onChange={e=>setPassword(e.target.value)} className='text-gray-500 font-medium w-full border-gray-400 border-[1px] p-2 focus:border-blue-400 focus:outline-none md:w-[30pc]'/>
        <button type='submit'  className='bg-[#0D1B2A] text-white rounded-lg hover:bg-[#365486] font-medium p-2 w-full md:w-[30pc]'>Login</button>
        {error && error}
        <Link to="/forgotpassword">Forgot Password?</Link>
      </form>
    </div>
  )
}

export default Login;
