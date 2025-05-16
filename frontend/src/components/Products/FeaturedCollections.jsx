import React from 'react'

const FeaturedCollections = () => {
  return (
    <section className='py-16 px-4 lg:px-0'>
        <div className='conatainer mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl'>
        {/* Lest Section */}
        <div className='lg:w-1/2 p-8 text-center lg:text-left'>
        <h2 className='text-lg font-semibold text-gray-700 mb-2'>
            Comfort and Style
        </h2>
        <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
            Apparel made For Your Everday life
            <p className='text-lg text-gray-600 mb-6'>
                Discover high-quality, comfortable clothing that efftotlesslt blends fashion and Function

            </p>
            <Link to = "/collections/all" className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800">
                Shop Now
            </Link>
        </h2>
        </div>
        {/* Right Content */}
        
        </div>
    </section>
  )
}

export default FeaturedCollections