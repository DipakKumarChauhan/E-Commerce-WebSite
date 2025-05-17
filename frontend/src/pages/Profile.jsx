import React from 'react'
import MyOrderPage from './MyOrderPage'

const Profile = () => {
  return (
    <div className='flex min-h-screen flex-col '>
        <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0'>
            {/* Left section */}
            <div className='w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6'>
                <h1 className='text-2xl md:text-3xl font-bold mb-4'>Profile</h1>
                <p className='text-lg text-gray-700 mb-4'>Name: John Doe</p>

                <button className='w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600' >Logout</button>
                
            </div>
            {/* Right section */}
            <div className='w-full md:w-3/4 lg:w-3/4'>
            <MyOrderPage />
            </div>

        </div>
    </div>
  )
}

export default Profile