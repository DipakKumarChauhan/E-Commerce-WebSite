import React from 'react'
import {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import AdminSidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom';


const AdminLayout = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const toggleSidebar = () => {
        setIsSideBarOpen(prev => !prev);
      };
  return (
    <div className='min-h-screen flex flex-col md:flex-row relative'>
        {/* Mobile Toggle  */}
        <div className='flex md:hidden p-4 bg-gray-900 text-white z-20'>
            <button onClick= {toggleSidebar}>
                <FaBars size= {24}></FaBars>
            </button>
            <h1 className='ml-4 text-xl font-medium'>Admin Dashbord</h1>
        </div>

        {/* OverLay for mobile side baar  */}
        {isSideBarOpen && (
            <div className='fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden' 
            onClick={toggleSidebar}>

            </div>
        )}

        {/* Side bar */}
        <div className={`bg-gray-900 w-64 min-h-screen text-white absolute md:relative transform ${
            isSideBarOpen ? "translate": "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:static md:block z-20`}>
            <AdminSidebar/>

        </div>
        {/* Main COntent */}
        <div className='flex-grow p-6 overflow-auto'>
            <Outlet/>

        </div>

    </div>
  )
}

export default AdminLayout