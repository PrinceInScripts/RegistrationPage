import { func } from 'prop-types';
import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {

    const [signupDetails,setSignupDetails]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    function handleInputSubmit(e){
            const {name,value}=e.target;
            setSignupDetails({
                ...signupDetails,
                [name]:value
            })
    }

    function onhandleSubmit(e){
        e.preventDefault()
        console.log(signupDetails);

        
    }
    return (
       
            <div className='flex overflow-x-auto justify-center items-center h-[100vh]'>
                <div className=' px-4 py-8 shadow-2xl rounded-2xl'>
                    <form onSubmit={onhandleSubmit} noValidate className='flex flex-col justify-center items-center gap-3 rounded-lg p-4 text-white w-80'>
                         <h1 className='text-center text-3xl font-fold font-serif'>Registration Page</h1>
                         <div className='flex flex-col shadow-2xl gap-1'>
                            <label htmlFor="name" className="font-semibold">Name</label>
                            <input 
                            onChange={handleInputSubmit}
                            value={signupDetails.name}
                            type="text" 
                            className="bg-transparent px-2 py-1 border"                            
                            name='name'
                            id='name'
                            placeholder="user name"                            />
                         </div>
                         <div className='flex flex-col shadow-2xl gap-1'>
                            <label htmlFor="name" className="font-semibold">Email</label>
                            <input 
                             onChange={handleInputSubmit}
                             value={signupDetails.email}
                            type="email" 
                            className="bg-transparent px-2 py-1 border"                            
                            name='email'
                            id='email'
                            placeholder="name@company.com"                            />
                         </div>
                         <div className='flex flex-col shadow-2xl gap-1'>
                            <label htmlFor="password" className="font-semibold">Password</label>
                            <input 
                             onChange={handleInputSubmit}
                             value={signupDetails.password}
                            type="password" 
                            className="bg-transparent px-2 py-1 border"                            
                            name='password'
                            id='password'
                            placeholder="••••••••"
                            />
                         </div>
                         <div className='flex flex-col shadow-2xl gap-1'>
                            <label htmlFor="confirmPassword" className="font-semibold">Confirm Password</label>
                            <input 
                             onChange={handleInputSubmit}
                             value={signupDetails.confirmPassword}
                            type="password" 
                            className="bg-transparent px-2 py-1 border"                            
                            name='confirmPassword'
                            id='confirmPassword'
                            placeholder="••••••••"
                            />
                         </div>

                         <button type='submit' className="mt-2 w-[50%] bg-yellow-800 hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold text-lg rounded-md">
                         Create Account
                         </button>
                        <p className="text-center">
                            Already have an account ? <Link to="/signin" className="cusror-pointer text-accent">Login</Link>
                         </p>
                    </form>
                </div>

            </div>
    );
}

export default Signup;