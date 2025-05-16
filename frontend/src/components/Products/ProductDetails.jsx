import React, { use } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import ProductGrid from './ProductGrid';

const selectedProduct = {
    name: "Stylish jacket",
    price: 120,
    originalPrice: 150,
    description: "A stylish jacket for all occasions.",
    brand: "Brand Name",
    material: "Leather",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Black"],
    images: [{
        url: " https://picsum.photos/500/500?random=1",
        altText: "Stylish jacket",
    },
    {
        url: " https://picsum.photos/500/500?random=2",
        altText: "Stylish jacket2",
    }

]
}

const similarProducts= [
    {
        _id : 1,
        name:"Product 1",
        price: 100,
        images: [{
            url: "https://picsum.photos/500/500?random=1"
        }]
    },
    {
        _id : 2,
        name:"Product 2",
        price: 100,
        images: [{
            url: "https://picsum.photos/500/500?random=2"
        }]
    },
    {
        _id : 3,
        name:"Product 3",
        price: 100,
        images: [{
            url: "https://picsum.photos/500/500?random=3"
        }]
    },
    {
        _id : 4,
        name:"Product 4",
        price: 100,
        images: [{
            url: "https://picsum.photos/500/500?random=4"
        }]
    },
    {
        _id : 5,
        name:"Product 5",
        price: 100,
        images: [{
            url: "https://picsum.photos/500/500?random=5"
        }]
    },
]

const ProductDetails = () => {

    const [mainImage, setMainImage] =useState("");

    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [quantity, setQuantity] = useState(1);    
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    //const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        if(selectedProduct?.imgages?.length > 0){
            setMainImage(selectedProduct.images[0].url);
        }
    }, [selectedProduct]);
    
    const handleQuantity = (action) => {
        if (action === "plus") {
            setQuantity((prev) => prev + 1);
        } else if (action === "minus") {
            setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
        }
    }

    const handleAddToCart = () => {
        if(!selectedSize || !selectedColor){
            toast.error("Please select size and color"),{duration: 1000};
            return;
        }
        setIsButtonDisabled(true);
        setTimeout(() => {
            toast.success("Added to cart"),{duration: 1000};
            setIsButtonDisabled(false);
        }, 500);
        const cartItem = {
            product: selectedProduct,
            size: selectedSize,
            color: selectedColor,
            quantity: quantity,
        }
        console.log("Added to cart", cartItem);
        // Add logic to add the item to the cart
    }


  return (
    <div className='p-6'>
        <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
            <div className='flex flex-col md:flex-row'>
                {/* Left Thumbnails */}
                <div className='hidden md:flex flex-col space-y-4 mr-6'>
                    {selectedProduct.images.map((image,index)=> (
                        <img key={index} src= {image.url} atl= {image.altText || `Thumbnail ${index}`}
                        className = {`w-24 h-24 object-cover rounded-lg cursor-pointer ${mainImage=== image.url?"border-black" : "border-gray-300"}`}
                        onClick={() => setMainImage(image.url)}
                        /> 
                    ))}
                </div>
                {/* Main Image */}
                <div className='md:w-1/2'>
                    <div className='mb-4'>
                        <img src={mainImage} alt="Main Product" className='w-full  h-auto object-cover rounded-lg'/>
                    </div>

                </div>
                {/* Mobile Thumbnails */}
                <div className='md:hidden flex overscroll-x-scroll space-x-4 mb-4'>
                {selectedProduct.images.map((image,index)=> (
                        <img key={index} src= {image.url} atl= {image.altText || `Thumbnail ${index}`}
                        className = {`w-24 h-24 object-cover rounded-lg cursor-pointer ${mainImage=== image.url?"border-black" : "border-gray-300"}`}
                        onClick={() => setMainImage(image.url)}
                        /> 
                    ))}
                </div>
                

                {/* Right Section */}
                <div className='md:w-1/2 md:ml-10'>
                    <h1 className='text-2xl md:text-exl font-semibold mb-2'>
                        {selectedProduct.name}
                    </h1>

                    <p className='text-lg text-gray-600 mb-1 line-through'>
                        {selectedProduct.originalPrice && `${selectedProduct.originalPrice}`}
                        
                    </p>

                    <p className='text-3xl text-gray-500 mb-2'>
                        {selectedProduct.price && `${selectedProduct.price}`}
                    </p>
                    <p className='text-gray-600 mb-4'>
                        {selectedProduct.description}

                    </p>
                    <div className='mb-4'>
                        <p className='text-gray-700'>
                            Colors
                        </p>
                        <div className='flex gap-2 mt-2'>
                            {selectedProduct.colors.map((color) => (
                                <button key={color}
                                onClick={() => setSelectedColor(color)}
                                className={`w-8 h-8 rounded-full border ${selectedColor === color ? "border-4 border-black" : "border-gray-300"}`}
                                style= {{ backgroundColor: color.toLocaleLowerCase(), filter: " brightness(0.5)",}}></button>
                            ))}

                        </div>

                    </div>
                    <div className='mb-4'>
                        <p className='text-gray-700'>
                            Sizes
                        </p>
                        <div className='flex gap-2 mt-2'>
                            {selectedProduct.sizes.map((size) => (
                                <button key={size} 
                                onClick={()=> setSelectedSize(size)}
                                className={`px-4 py-2 border rounded-md ${selectedSize === size ? "bg-black text-white" : "bg-white"}`}
                                >
                                    {size}
                                </button>
                            ))}

                        </div>
                    </div>
                    
                    <div className='mb-6'>
                        <p className='text-gray-700'>
                            Quantity
                        </p>
                        <div className='flex items-center space-x-4 mt-2'>
                            <button onClick={()=> handleQuantity("minus")}
                            
                            className={`px-2 py-1 bg-gray-200 rounded text-lg `}>
                                -
                            </button>
                             
                            <span className='text-lg '>
                            {quantity}
                            </span>
                            <button onClick={()=> handleQuantity("plus")}
                            
                            className={`px-2 py-1 bg-gray-200 rounded text-lg `}>
                                +
                            </button>
                        </div>

                    </div>
                    <button onClick= {handleAddToCart}
                    disabled= {isButtonDisabled}
                    className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${isButtonDisabled ? "cursor-not-allowed opacity-50": "hover:bg-gray-900"}`}> {isButtonDisabled? "Adding..":  "ADD TO Cart"}

                    </button>
                    <div className=',b-10 text-gray-700'>
                        <h3 className='text-xl font-bold  mb-4'>Characteristics:</h3>
                        <table className='w-full text-left text-sm text-gray-600 '>
                            <tbody>
                                <tr>
                                    <td className='py-1'>Brand</td>
                                    <td className='py-1'>{selectedProduct.brand}</td>
                                </tr>
                                <tr>
                                    <td className='py-1'>Material</td>
                                    <td className='py-1'>{selectedProduct.material}</td>
                                </tr>
                            </tbody>
                        </table>
                        
                    

                    </div>
                </div>
            </div>
            <div className='mt-20 '>
                <h2 className='text-2xl text-center font-medium mb-4'>
                            You May Also Like
                </h2>
                <ProductGrid products = {similarProducts}/>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails