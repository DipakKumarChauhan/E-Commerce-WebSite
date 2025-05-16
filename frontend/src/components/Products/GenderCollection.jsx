import React from 'react'
import { Link } from 'react-router-dom'
import mensCollectionImage from '../../assets/mens-collection.webp'
import womensCollectionImage from '../../assets/womens-collection.webp'

const GenderCollection = () => {
  return (
    <section className="bg-white py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">

        {/* Women Collection */}
        <div className="relative flex-1">
          <img
            src={womensCollectionImage}
            alt="Women's Collection"
            className="w-full h-[700px] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute bottom-8 left-9 bg-white bg-opacity-90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Womens Collection</h2>
            <Link to="/collections/all?gender=Women" className="text-gray-800 underline">
              Explore Now
            </Link>
          </div>
        </div>

        {/* Men Collection */}
        <div className="relative flex-1">
          <img
            src={mensCollectionImage}
            alt="Men's Collection"
            className="w-full h-[700px] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute bottom-8 left-9 bg-white bg-opacity-90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Mens Collection</h2>
            <Link to="/collections/all?gender=Men" className="text-gray-800 underline hover:text-black">
              Explore Now
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default GenderCollection
