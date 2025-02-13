import React from 'react';
import { Link } from 'react-router-dom'

function SignUpPage() {
  return (
    <div className="mt-5 flex h-screen justify-center items-center">
      <div className="w-1/4 h-4/6 rounded-lg shadow-lg transition-all ease-out hover:shadow-2xl flex flex-col items-center p-5 justify-between">
        <h1 className="mt-2 text-2xl font-bold text-center">SignUp</h1>
        <div className="text-center input-box w-full p-3">
          <input 
            type="text"
            required
            placeholder='Your Name.'
            className='p-2 mt-3 shadow-sm hover:shadow-md w-full bg-slate-100 rounded-md text-slate-600 outline-none'
          />
          <input 
            type="email"
            required
            placeholder='Your Email.'
            className='p-2 mt-3 shadow-sm hover:shadow-md w-full bg-slate-100 rounded-md text-slate-600 outline-none'
          />
          <input 
            type="password"
            required
            placeholder='Password'
            className='p-2 mt-3 shadow-sm hover:shadow-md w-full bg-slate-100 rounded-md text-slate-600 outline-none'
          />
          <input 
            type="password"
            required
            placeholder='Confirm Password'
            className='p-2 mt-3 shadow-sm hover:shadow-md w-full bg-slate-100 rounded-md text-slate-600 outline-none'
          />

          <p className='mt-4 text-center text-sm text-slate-500'>Already have an account? <Link to={"/login"}><span className='text-blue-500 cursor-pointer'>LogIn</span></Link></p>
        </div>
        <div className="w-full h-12">

        </div>
        <button 
          type="submit"
          className='hover:bg-blue-400 mt-2 w-full transition-all ease-out bg-primary text-white p-2 rounded-md'
        >SignUp</button>
        
      </div>
      
    </div>
  );
}

export default SignUpPage;