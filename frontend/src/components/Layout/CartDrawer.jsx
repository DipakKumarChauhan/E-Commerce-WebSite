import React from 'react'
import { IoMdClose } from 'react-icons/io'
import CartContent from '../Cart/CartContent';
const CartDrawer = ({isOpen , toggleCartDrawer}) => {




  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem]h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        {/* Close Button */}
        <div className="flex justify-end p-4">
            
        <button onClick={toggleCartDrawer} className="text-gray-600 hover:text-gray-800">
            <IoMdClose className="h-6 w-6" />
        </button>
        </div>

    {/*Cart Content Scrolable Area*/}

        <div className="flex-1 overflow-y-auto p-4">
          <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
          
          {/*Compoenets Of Cart*/}
        <CartContent />


          
        </div>

        {/* checkout Button */}
        <div className="p-4">
          <button className="w-full bg-rabbit-red text-white py-2 rounded-md hover:bg-rabbit-red-dark transition duration-200">
            Checkout
          </button>
          <p className= "text-sm text-gray-500 mt-2 text-center">
            Shipping Taxes, Discount Codes calculated at Times of Checkout
          </p>
          </div>



    </div>

   




  )
}

export default CartDrawer;