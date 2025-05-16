import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../../assets/rabbit-hero.webp' // Assuming you have a hero image in your assets folder
const Hero = () => {
  return (
    <section className='relative'>
       < img src={heroImg} alt="Rabit" className='w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover'></img>

       <div className='absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center'>
        <div className='text-center text-white p-6'>
            <h1 className='text-3xl md:text-6xl font-bold tracking-tighter uppercase text-shadow-lg mb-4'>Vacation <br/>Ready</h1>
            <p className='text-sm tracking-lighter md:text-lg mb-6'>
                Explore Our Vaction Ready Outfits
            </p>
            <Link to= "#" className= "bg-white text-gray-950 px-6 py-2 rounded-sm text-lg">
                Shop Now
            </Link>
        </div>
        </div>
    </section>
    


  )
}

export default Hero