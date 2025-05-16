import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from 'react-icons/fa'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import {FiPhoneCall} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className='border-t py-12'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-10 px-4 lg:px-0'>
        <div className="mb-10 md:mb-0">
          <h3 className='Text-lg text-gray-800 mb-4'> Newsletter</h3>
          <p className='text-grasy-500 mb-4'>
            Be First to hear about new Products, exclusive offers and more.
          </p>
          <p className='font-medum text-sm text-gray-800 mb-6'>
            Sign Up an nd get 10% off your first order
          </p>
          {/* News Letter Form */}
          <form className='flex '>
            <input
              type='email'
              placeholder='Enter Email'
              className='p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-non focus:ring-2 focus:ring-gray-500 transition-all'
              required
            />
            <button
              type='submit'
              className='bg-black text-white px-6 py-3.5 text-sm rounded-r-md hover:bg-gray-800 transition-all'
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className='text-lg text-gray-800 mb-4'>Shop</h3>
          <ul className='space-y-2 text-gray-600'>
            <li>
              <Link to='#' className='hover:text-gray-500 transition-colors'>Mens Top Wear</Link>
            </li>
            <li>
              <Link to='#' className='hover:text-gray-500 transition-colors'>Womens Top Wear</Link>
            </li>
            <li>
              <Link to='#' className='hover:text-gray-500 transition-colors'>Mens Bottom Wear</Link>
            </li>
            <li>
              <Link to='#' className='hover:text-gray-500 transition-colors'>Women's Bottom Wear</Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className='text-lg text-gray-800 mb-4'>Support</h3>
          <ul className='space-y-2 text-gray-600'>
            <li>
              <Link to='#' className='hover:text-gray-500 transition-colors'>Contact Us</Link>
            </li>
            <li>
              <Link to='#' className='hover:text-gray-500 transition-colors'>About Us</Link>
            </li>
            <li>
              <Link to='#' className='hover:text-gray-500 transition-colors'>FAQ's</Link>
            </li>
            <li>
              <Link to='#' className='hover:text-gray-500 transition-colors'>Features</Link>
            </li>
          </ul>
        </div>

        {/* Follow Us Links */}
        <div>
          <h3 className='text-lg text-gray-800 mb-4'>Follow Us</h3>
          <div className='flex items-center space-x-4 mb-6'>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-gray-500'
            >
              <FaFacebookF />
            </a>
            <a
              href='https://github.com/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-gray-500'
            >
              <FaGithub size={20} />
            </a>
            <a
              href='https://www.linkedin.com/in/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-gray-500'
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href='https://twitter.com/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-gray-500'
            >
              <FaTwitter size={20} />
            </a>
            
          </div>
          <div>
            <p className='test-gray-500 '>Call Me</p> 
            <a
              href='tel:+917439357350'
              className='text-gray-800 hover:text-gray-500 transition-colors'
              onClick={(e) => {
                e.preventDefault()
                navigator.clipboard.writeText('+917439357350')
                window.location.href = 'tel:+917439357350'
              }}
            >
              <FiPhoneCall className='inline-block mr-2' />
              +91 74393 57350
            </a>
            </div>
        </div>
      </div>
      {/* Footet Bottom */}

      <div className='container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6'>
        <p className='text-gray-500 text-sm tracking-tighter text center'>
          2025, All Right Reserved By Dipak
        </p>

      </div>
    </footer>
  )
}

export default Footer
