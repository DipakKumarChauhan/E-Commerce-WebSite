import React from 'react'
import { Link } from 'react-router-dom'
import login from '../assets/login.webp'
const Login = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div className='flex'>
      <div className='w-full md:w-1/2  flex flex-col justify-center items center p-8 md:p-12'>
      <form className='w-full max-w-md bg-white p-8 roundd-lg border shadow-sm'>
        <div className='flex justify-center mb-6'>
          <h2 className='text-xl font-medium'> Shoplune</h2>


        </div>
        <h2 className='text-2xl font-bold mb-6 text-center'>Hey There!</h2>

        <p className='text-center mb-6'>
          Welcome back! Please enter your details to login.
        </p>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Email
            <input type='email' value = {email}
            onChange={(e) => setEmail(e.target.value)}
             placeholder='Enter your email'
            
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />

          </label>

          <div>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Password
              <input type='password' value = {password}
              onChange={(e) => setPassword(e.target.value)}
               placeholder='Enter your password'
              
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />

            </label>
          </div>

        </div>
        <button type='submit' className='bg-rabbit-red text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'>
          Sign In
        </button>
        <p className='mt-6 text-center text-sm'>
          Dont have an account?
          <Link to = "/register" className='text-blue-500 font-bold hover:underline'> Register </Link>

        </p>
      </form>
      <div>

      </div>
      </div>
      <div className='hidden md:block w-1/2 bg-gray-800'>
        <div className='h-full flex flex-col justify-center items-center'>
          <img src ={login} alt = "Login" className='w-full h-[750px] object-cover' />
          
        </div>
      </div>
    </div>
  )
}

export default Login