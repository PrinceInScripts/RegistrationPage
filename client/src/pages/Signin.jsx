import React from 'react';
import { Link } from 'react-router-dom';

function Signin() {
    return (
        <div className='flex overflow-x-auto justify-center items-center h-[100vh]'>
        <div className=' px-4 py-8 shadow-2xl rounded-2xl'>
            <form noValidate className='flex flex-col justify-center items-center gap-3 rounded-lg p-4 text-white w-80'>
                 <h1 className='text-center text-3xl font-fold font-serif'>Login Page</h1>
                 <div className='flex flex-col shadow-2xl gap-1'>
                    <label htmlFor="name" className="font-semibold">Email</label>
                    <input 
                    type="email" 
                    className="bg-transparent px-2 py-1 border"                            
                    name='email'
                    id='email'
                    placeholder="name@company.com"
                    />
                 </div>
                 <div className='flex flex-col shadow-2xl gap-1'>
                    <label htmlFor="password" className="font-semibold">Password</label>
                    <input 
                    type="password" 
                    className="bg-transparent px-2 py-1 border"                            
                    name='password'
                    id='password'
                    placeholder="••••••••"
                    />
                 </div>

                 <div className="flex items-start">
                    <Link
                      to="/forgot-password"
                     className="ml-auto text-sm text-cyan-700 font-bold hover:underline dark:text-cyan-500"
                        >
                      Forgot Password?
                    </Link>
        </div>

                 <button type='submit' className="mt-2 w-[50%] bg-yellow-800 hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold text-lg rounded-md">
                 Signin
                 </button>
                 <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?{" "}
          <Link
            to="/signup"
            className="text-lime-200 hover:underline"
          >
            Create account
          </Link>
        </div>
            </form>
        </div>

    </div>
    );
}

export default Signin;