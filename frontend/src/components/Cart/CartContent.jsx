import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri'

const CartContent = () => {

    const cartProduct = [
        {
            productId: 1,
            name:"T-shirt",
            size: "M",
            color: "Red",
            price: 20,
            quantity: 2,
            image: "https://picsum.photos/200?random=1",

        },
        {
            productId: 2,
            name:"Jeans",
            size: "L",
            color: "Blue",
            price: 40,
            quantity: 1,
            image: "https://picsum.photos/200?random=2",

        },
        {
            productId: 3,
            name:"Shoes",
            size: "10",
            color: "Black",
            price: 60,
            quantity: 1,
            image: "https://picsum.photos/200?random=3",

        }
    ]

  return (
    <div>
        {
        cartProduct.map((product,index) => (
            <div key = {index} className="flex items-center justify-between border-b py-4">
                <div className="flex items-center">
                    <img src= {product.image} alt = {product.name} className = "w-16 h-16 object-cover rounded-md mr-4"/>
                    
                    <div>
                        <h3>{product.name}</h3>
                        <p className="text-sm text-gray-500">
                            Size: {product.size} | Color: {product.color}
                        </p>

                        <div className= "flex items-center mt-2">
                            <button className='border rounded px-2 py-1 text-xl font-medium'>+</button>
                            <span className='mx-2 text-lg font-medium'>{product.quantity}</span>
                            <button className='border rounded px-2 py-1 text-xl font-medium'>-</button>

                        </div>
                            
                        
                    </div>
                </div>
                <p>
                    ${product.price.toLocaleString()} {/* x {product.quantity} = ${(product.price * product.quantity).toLocaleString()}  // Might need to Add*/}

                </p>
                <button className="text-red-500 hover:text-red-700">
                <RiDeleteBin3Line className="h-6 w-6" />
                </button>
            </div>
        ))
        }

    </div>
  )
}

export default CartContent