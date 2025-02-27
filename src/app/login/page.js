"use client";

import React, { useState } from 'react';

const LoginSignup = () => {
  const [action, setAction] = useState('Sign Up');

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center w-full max-w-md bg-white p-10 shadow-lg rounded-xl">
        <div className="text-3xl font-bold text-primary mb-6">{action}</div>

        {action === 'Login' ? null : (
          <div className="flex items-center mb-4 w-full rounded-md px-4 py-2 bg-[#EBF5FB]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 text-gray-500 mr-2"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
            <input className="flex-grow bg-transparent outline-none text-lg" type="text" placeholder="Name" />
          </div>
        )}

        <div className="flex items-center mb-4 w-full rounded-md px-4 py-2 bg-[#EBF5FB]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 text-gray-500 mr-2"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
          <input className="flex-grow bg-transparent outline-none text-lg" type="email" placeholder="Email Id" />
        </div>

        <div className="flex items-center mb-4 w-full rounded-md px-4 py-2 bg-[#EBF5FB]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 text-gray-500 mr-2"><path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"/></svg>
          <input className="flex-grow bg-transparent outline-none text-lg" type="password" placeholder="Password" />
        </div>

        {action === 'Sign Up' ? null : (
          <div className="text-sm text-gray-600 mb-4">
            Forgot Password? <span className="text-blue-500 cursor-pointer">Click Here!</span>
          </div>
        )}

        <div className="flex gap-4">
          <button 
            className={`w-32 py-2 rounded-lg font-bold transition-all ${action === 'Login' ? 'bg-gray-300 text-gray-600' : 'bg-primary text-white transform hover:scale-105'}`}
            onClick={() => setAction('Sign Up')}
          >
            Sign Up
          </button>

          <button 
            className={`w-32 py-2 rounded-lg font-bold transition-all ${action === 'Sign Up' ? 'bg-gray-300 text-gray-600' : 'bg-primary text-white transform hover:scale-105'}`}
            onClick={() => setAction('Login')}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;