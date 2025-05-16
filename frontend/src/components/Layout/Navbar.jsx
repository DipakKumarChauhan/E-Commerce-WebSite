import React from 'react'
import {Link} from 'react-router-dom'
import {HiOutlineUser, HiOutlineShoppingBag , HiBars3BottomRight} from 'react-icons/hi2'
import SearchBar from '../Common/SearchBar'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useRef } from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'
import { useLayoutEffect } from 'react'
import CartDrawer from './CartDrawer'
import { IoMdClose } from 'react-icons/io'
const Navbar = () => {

  const [isOpen, setIsOpen] = React.useState(false)
  const [navDrawerOpen, setNavDrawerOpen] = React.useState(false)


  const toggleCartDrawer = () => {
      setIsOpen(!isOpen);
  }
  const toggleNavDrawer = () => {
      setNavDrawerOpen(!navDrawerOpen);
  }

  return (
    <>
    
    <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
        {/*Left logo */ }
        <div> 
          <Link to = "/" className = "text-2xl font-medium">
          Shoplune
          </Link>
        </div>

        { /*Center Link*/}
        <div className='hidden md:flex space-x-6'>
          <Link to="men" className='text-gray-600 hover:text-black-800 text-sm font-medium uppercase'>
            Men
          </Link>

          <Link to="women" className='text-gray-600 hover:text-black-800 text-sm font-medium uppercase'>
            Women
          </Link>

          <Link to="topwear" className='text-gray-600 hover:text-black-800 text-sm font-medium uppercase'>
            TopWear
          </Link>

          <Link to="bottomwar" className='text-gray-600 hover:text-black-800 text-sm font-medium uppercase'>
            Bottom-Wear
          </Link>
        </div>  

        {/*Right Links*/} 

        <div className='flex items-center space-x-4'>
          <Link to = '/profile' className=' hover:text-black' >
            <HiOutlineUser className='h-6 w-6 text-gray-700'/>

          </Link>  
          <button onClick={toggleCartDrawer} className='relative hover:text-black'>
            <HiOutlineShoppingBag className='h-6 w-6 text-gray-700'/>
            <span className='absolute -top-1 bg-rabbit-red text-white rounded-full px-2 py-0.5 text-xs font-medium'>
              0
            </span>
          </button>
          {/*SearCh Bar*/}
          <div className = 'overflow-hidden'> {/* This is over Flow hidden is added coz without this back page was overflowing on search bar page */ }
            <SearchBar/>
          </div>
          


          <button onClick={toggleNavDrawer} className='md:hidden' >
            
          
            <HiBars3BottomRight className='h-6 w-6 text-gray-700'/>
          </button>


        </div>     
        

    </nav>
    <CartDrawer  isOpen = {isOpen} toggleCartDrawer = {toggleCartDrawer}/>

    {/* Mobile navigation */}

    <div className={`fixed top-0 left-0 w-full h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className='flex justify-end p-4'>
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>        
        </div>

         {/* Mobile Navigation Links */}
    <div className='p-4'>
      <h2 className='text-xl font-semibold mb-4'>Menu</h2>
      <nav className = " space-y-4 " >
        <Link to="men" onClick={toggleNavDrawer} className='block text-gray-800 font-medium text-lg'>
        
        Men
        </Link>
        <Link to="women" onClick={toggleNavDrawer} className='block text-gray-800 font-medium text-lg'>
        Women
        </Link>
        <Link to="topwear" onClick={toggleNavDrawer} className='block text-gray-800 font-medium text-lg'>
        Topwear
        </Link>
        <Link to="bottomwear" onClick={toggleNavDrawer} className='block text-gray-800 font-medium text-lg'>
        Bottomwear
        </Link>
        <Link to="profile" onClick={toggleNavDrawer} className='block text-gray-800 font-medium text-lg'>
        Profile
        </Link>
  
      </nav>

    </div>
    {/* Mobile Navigation Links
  <div className='flex flex-col space-y-4 px-6'>
    <Link to="men" onClick={toggleNavDrawer} className='text-gray-800 font-medium text-lg'>Men</Link>
    <Link to="women" onClick={toggleNavDrawer} className='text-gray-800 font-medium text-lg'>Women</Link>
    <Link to="topwear" onClick={toggleNavDrawer} className='text-gray-800 font-medium text-lg'>Topwear</Link>
    <Link to="bottomwear" onClick={toggleNavDrawer} className='text-gray-800 font-medium text-lg'>Bottomwear</Link>
    <Link to="profile" onClick={toggleNavDrawer} className='text-gray-800 font-medium text-lg'>Profile</Link>
  
    </div> */}
    </div>
    
   


    </>
  )
}

export default Navbar