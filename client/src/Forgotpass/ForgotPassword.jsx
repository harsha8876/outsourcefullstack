import React, { useState } from 'react';
import newRequest from '../utils/newRequest';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await newRequest.post('/auth/forgotpassword', { email });

      if (response.status === 200) {
        setMessage('Password reset link sent to your email.');
      } else {
        setMessage('Failed to send password reset link. Please try again later.');
      }
    } catch (error) {
      setMessage('Failed to send password reset link. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <label className="block mb-2">Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-blue-500"
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Reset Password
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default ForgotPassword;
