import React, { useRef , useState } from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { FiChevronRight } from 'react-icons/fi'
import { FiArrowRight } from 'react-icons/fi'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const NewArrivals = () => {
    const scrollRef =  useRef(null);
    const[isDragging,setDragging] = React.useState(false);
    const[startX,setStartX] = React.useState(0);
    const[scrollLeft,setScrollLeft] = React.useState(0);
    const[canScrollRight, setCanScrollRight] = React.useState(true);
    const[CanScrollLeft,setCanScrollLeft] = React.useState(false);
    
    

    const NewArrivals = [
        {
            _id:"1",
            name: "Stylish jacket",
            price:120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=1",
                    altText: "Stylish jacket",
                },
            ],
        },
        
        {
            _id:"2",
            name: "Stylish jacket",
            price:120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=2",
                    altText: "Stylish jacket",
                },
            ],
        },
        {
            _id:"3",
            name: "Stylish jacket",
            price:120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=3",
                    altText: "Stylish jacket",
                },
            ],
        },
        {
            _id:"4",
            name: "Stylish jacket",
            price:120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=4",
                    altText: "Stylish jacket",
                },
            ],
        },
        {
            _id:"5",
            name: "Stylish jacket",
            price:120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=5",
                    altText: "Stylish jacket",
                },
            ],
        },
        {
            _id:"6",
            name: "Stylish jacket",
            price:120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=6",
                    altText: "Stylish jacket",
                },
            ],
        },
        {
            _id:"7",
            name: "Stylish jacket",
            price:120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=7",
                    altText: "Stylish jacket",
                },
            ],
        },
        {
            _id:"8",
            name: "Stylish jacket",
            price:120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=8",
                    altText: "Stylish jacket",
                },
            ],
        },
    ];


    const handleMouseDown = (e) => {
        setDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    }
    const handleMouseMove = (e) => {
        if(!isDragging) return;
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) ; //scroll-fast
        scrollRef.current.scrollLeft = scrollLeft - walk;
    }
    const handleMouseUpOrLeave = () => {
        setDragging(false);

    }
    

    const scroll = (direction) => {
        const scrollAmount = direction ==="left" ? -300:300;
        scrollRef.current.scrollBy({left: scrollAmount, behavior: "smooth"});


    }

    

    // Update Scroll left Button
    const updateScrollButtons = () => {
        const container = scrollRef.current;
        if(container){
            const leftScroll = container.scrollLeft;
            const clientWidth = container.clientWidth;
            const scrollWidth = container.scrollWidth;
            const rightScroll = scrollWidth - leftScroll - clientWidth;
            setCanScrollRight(rightScroll > 0);
            setCanScrollLeft(leftScroll >0 );
        };
        

        // console.log({
        //     scrollLeft: container.scrollLeft,
        //     clientWidth: container.clientWidth,
        //     containerScrollWidth: container.scrollWidth,
        //     offsetLeft:scrollRef.current.offsetLeft
        // });
       
    };

    useEffect(() => {
        const container =  scrollRef.current;
        if(container){
            container.addEventListener('scroll', updateScrollButtons);
            updateScrollButtons();
            return () => container.removeEventListener('scroll', updateScrollButtons);
        }

    },[])
    

  return (
    <section className='py-16 px--4 lg:px-0'>
        <div className='container mx-autotext-center mb-10 relative'>
            <h2 className='text-3xl font-bold mb-4'>Explore New Arrivals</h2>
            <p className='text-lg text-gray-600 mb-6'>Discover the latest trends and styles in our new arrivals collection.</p>
            
            {/* Scroll Button */}
            <div className='absolute right-0 bottom-[30px] flex space-x-2 '> 
                <button onClick={() => scroll("left")} disabled = {!CanScrollLeft} className={`p-2 rounded border  ${CanScrollLeft ? "bg-white text-black " : "bg-gray-200 text-gray-400 opacity-50 cursor-not-allowed"}`}>
                    <FiChevronLeft className='text-2xl '/>

                </button>

                <button onClick={() => scroll("right")}  className={`p-2 rounded border  ${canScrollRight ? "bg-white text-black " : "bg-gray-200 text-gray-400 opacity-50 cursor-not-allowed"}`}>
                    <FiChevronRight className='text-2xl '/>

                </button>

            </div>
        </div>

        {/* Scrollable Content */}

        <div ref = {scrollRef} className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${isDragging ? "cursor-grabbing" : "cursor-grab"}`} 
        onMouseDown= {handleMouseDown} onMouseMove={handleMouseMove} onMouseUp = {handleMouseUpOrLeave} onMouseLeave = {handleMouseUpOrLeave}>
            {NewArrivals.map((product) => (
                <div key = {product._id} className='min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative'>
                    <img src = {product.images[0]?.url} alt= {product.images[0]?.altText || product.name} className='w-full h-[500px] object-cover rounded-lg ' draggable  = "false"></img>

                <div className='absolute bottom-0 left-0 right-0 bg-white bg-opacity-90  backdrop-blur-md p-4 rounded-b-lg'>
                    <Link to = {`/product/${product._id}`} className= "block">
                        <h4 className='font-medium'> {product.name}</h4>
                        <p className = "mt-1">${product.price}</p>
                    </Link>
                </div>
                </div>
                    ))}
        </div>

    </section>
  )
}

export default NewArrivals