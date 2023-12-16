import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { isEmail, isValidPassword } from '../helper/regexMatcher';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slice/authSlice';

function Signin() {

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const [signinDetails,setSigninDetials]=useState({
        email:"",
        password:""
    })

    function onhandleInput(e){
        const {name,value}=e.target
        setSigninDetials( {
            ...signinDetails,
            [name]:value
        })
    }

   async function onhandleSubmit(e){
        e.preventDefault()

        if(!signinDetails.email || !signinDetails.password){
            toast.error("all filed are required")
            return;
        }

        if(!isEmail(signinDetails.email)){
            toast.error("Invalid email")
        }

        if(!isValidPassword(signinDetails.password)){
            toast.error("Invalid password provided, password should 6-16 character long with atleast a number and a special character")
            return;
        }

        const response=await dispatch(login(signinDetails))
        if(response?.payload?.data){
            navigate('/')
        }
        setSigninDetials({
            email:'',
            password:'',
        })

    }
    return (
        <div className='flex overflow-x-auto justify-center items-center h-[100vh]'>
        <div className=' px-4 py-8 shadow-2xl rounded-2xl'>
            <form onSubmit={onhandleSubmit} noValidate className='flex flex-col justify-center items-center gap-3 rounded-lg p-4 text-white w-80'>
                 <h1 className='text-center text-3xl font-fold font-serif'>Login Page</h1>
                 <div className='flex flex-col shadow-2xl gap-1'>
                    <label htmlFor="name" className="font-semibold">Email</label>
                    <input 
                    onChange={onhandleInput}
                    value={signinDetails.email}
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
                    onChange={onhandleInput} 
                    value={signinDetails.password}
                    type="password" 
                    className="bg-transparent px-2 py-1 border"                            
                    name='password'
                    id='password'
                    placeholder="••••••••"
                    />
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