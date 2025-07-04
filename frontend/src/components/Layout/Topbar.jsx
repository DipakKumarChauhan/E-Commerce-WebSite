import React from 'react'
import {TbBrandMeta} from 'react-icons/tb'
import {IoLogoInstagram} from 'react-icons/io'
import {RiTwitterXLine} from 'react-icons/ri'
const Topbar = () => {
  return (
    <div className= " bg-rabbit-red text-white "> 
        <div className=' container mx-auto flex justify-between items-center py-3 px-4'>
            <div className= "hidden md:flex items-center scape-x-4">
                <a href="#" className = "hover:text-gray-300" > 
                    <TbBrandMeta className= "h-5 w-5"/>

                </a>
                <a  href="#" className = "hover:text-gray-300" > 
                    <IoLogoInstagram className= "h-5 w-5"/>
                     
                </a>
                <a href="#" className = "hover:text-gray-300" > 
                    <RiTwitterXLine className= "h-4 w-4"/>
                     
                </a>
            </div>
            <div>
                <span className = "text-center text-sm font-medium flex-grow"> 
                    Welcome to our store! Enjoy shopping with us.
                </span>
            </div>
            <div className = "text-sm hidden md:block">   
                <a href = "tel: +917439357350" className='hover:text-gray-300'>
                    <span className = "font-medium"> Call us: +91 7439357350</span>
                </a>
            </div>
        </div>

    </div>
  )
}

export default Topbar