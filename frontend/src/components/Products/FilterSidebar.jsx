import { setNodeSourceCodeLocation } from 'jsdom/lib/jsdom/living/domparsing/parse5-adapter-serialization';
import React, { use, useState, useEffect, } from 'react'
import { useNavigate,useSearchParams } from 'react-router-dom'

const FilterSidebar = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate(); // used to navigate to new urls through query parameters
    const [filters, setFilters] = React.useState({
        category: searchParams.get('category') || '',
        price: searchParams.get('price') || '',
        brand: searchParams.get('brand') || '',
        color: searchParams.get('color') || '',
        gender: "",
        size: [],
        material: [],
        minPrice: 0,
        maxPrice:100,
        

    });


    const[priceRange, setPriceRange] = useState([0, 100]);
    const category = ["Top Wear", "Bottom Wear"];
    const colors = ["Red", "Blue", "Green", "Black", "White","Yellow","Gray", "Pink", "Beige","Navy"];
    const sizes = ["S", "M", "L", "XL", "XXL"];
    const materials = ["Cotton", "Polyester", "Wool", "Denim","Silk", "Linen","Viscose","Fleece"];
    const brands = ["Urban Threads", "Modern Fit", "Street Style", "Beach Breeze", "ChicStyle","Fashionista"];

    const gender = ["Men", "Women" ]

    useEffect(() => {
        const params= Object.fromEntries([...searchParams]);
        // Above Line converts key value pair to object
        // e.g {category: "Top Wear", price: "100"} => params.category will give "Top Wear"
        setFilters((prevFilters) => ({
            category: params.category || "",
            gender: params.gender|| "",
            color: params.color || "",
            
            size: params.size ? params.size.split(",") : [],
            material: params.material ? params.material.split(",") : [],
            brand: params.brand ? params.brand.split(",") : [],
            minPrice: params.minPrice || 0,
            maxPrice: params.maxPrice || 100,
            
        }));
        setPriceRange([0,params.maxPrice|| 100]);
    },[searchParams])

    // Function to handle filter changes

    const handleFilterChange = (e) => {
        const {name, value, checked, type} = e.target;
        //console.log(name, value, checked, type);
        let newFilters = {...filters};;
        if(type ==="checkbox"){
            if(checked)
            {
                newFilters[name] = [...newFilters[name] || [], value];
            } else{
                newFilters[name] = newFilters[name].filter((item) => item !== value);
            }
        } else{
            newFilters[name] = value;
        }
        setFilters(newFilters);
        //console.log(newFilters);
        updateURL(newFilters);

    }
    // Function To Update URL
    const updateURL = (newFilters) => {
        const params = new URLSearchParams();
       Object.keys(newFilters).forEach((key) => {
            if(Array.isArray(newFilters[key]) && newFilters[key].length > 0){
                params.append(key, newFilters[key].join(","));
            } else if (newFilters[key]){
                params.append(key, newFilters[key]);
            }
        }
        );
        setSearchParams(params);
        navigate(`?${params.toString()}`);
    }

    const handlePriceChange = (e) => { 
        const newMaxPrice = Number(e.target.value);
        setPriceRange([0, newMaxPrice]);
        const newFilters = { ...filters, minPrice: 0, maxPrice: newMaxPrice };
        setFilters(newFilters);
        updateURL(newFilters);
    };
    


  return (
    <div className= "p-4">
        <h3 className= "text-xl font-medium text-gray-800 mb-4">Filter

        </h3>

        {/* Category Filter */}
        <div className='mb-6'>
            <label className='block font-medium text-gray-600 mb-2'>Category</label>
            {category.map((category) => (
                <div key={category} className='flex items-center mb-1'> 
                <input type= "radio" name= "category" value={category} onChange={handleFilterChange}
                checked = {filters.category === category} // this will help to check the radio button and even if we refresh the page filter will be applied
                className='mr-2 h-4 text-blue-500 focus:ring-blue-400 border-gray-300'>
                
                </input>
                <span className='text-gray-700'>{category}</span>
                 </div>
            ))}
        </div>

              {/* Gender Filter */}
        <div className='mb-6'>
            <label className='block font-medium text-gray-600 mb-2'>Gender</label>
            {gender.map((gender) => (
                <div key={gender} className='flex items-center mb-1'> 
                <input type= "radio" name= "gender" value={gender}
                checked = {filters.gender === gender} // this will help to check the radio button and even if we refresh the page filter will be applied
                onChange={handleFilterChange} className='mr-2 h-4 text-blue-500 focus:ring-blue-400 border-gray-300'>
                
                </input>
                <span className='text-gray-700'>{gender}</span>
                 </div>
            ))}
        </div>

        {/* Color Filter */}

        <div className='mb-6'>
            <label className='block font-medium text-gray-600 mb-2'>Color</label>
            {colors.map((color) => (
                <div key={color} className='flex items-center mb-1'> 
                <button key= {color} name= "color" value={color}
                onClick={handleFilterChange} 
                className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer trasition hocer:scale-105 ${
                    filters.color === color ? "ring-2 ring-blue-500" : ""
                }`}
                style = {{backgroundColor: color.toLowerCase()}}>

                </button>
                 </div>
            ))}

        </div>

        {/* size Filter */}
            <div className='mb-6'>
            <label className='block font-medium text-gray-600 mb-2'>Size</label>
            {sizes.map((size) => (
                <div key={size} className='flex items-center mb-1'> 
                <input type= "checkbox" name= "size" 
                checked = {filters.size.includes(size)}
                value={size} onChange={handleFilterChange} 
                className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'>
                
                </input>
                <span className='text-gray-700'>{size}</span>
                </div>
            ))}
            </div>

             {/* Material Filter */}
             <div className='mb-6'>
            <label className='block font-medium text-gray-600 mb-2'>material</label>
            {materials.map((material) => (
                <div key={material} className='flex items-center mb-1'> 
                <input type= "checkbox" name= "material" value={material}
                checked = {filters.material.includes(material)}
                onChange={handleFilterChange} className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'>
                
                </input>
                <span className='text-gray-700'>{material}</span>
                </div>
            ))}
            </div>

 {/* Brand Filter */}
        <div className='mb-6'>
            <label className='block font-medium text-gray-600 mb-2'>Brand</label>
            {brands.map((brand) => (
                <div key={brand} className='flex items-center mb-1'> 
                <input type= "checkbox" name= "brand" 
                value={brand}
                checked = {filters.brand.includes(brand)}
                onChange={handleFilterChange} className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'>
                
                </input>
                <span className='text-gray-700'>{brand}</span>
                </div>
            ))}
        </div>

        {/* Price Range Filter */}
        <div className='mb-6'>
            <label className='block font-medium text-gray-600 mb-2'>Price Range</label>
            <input type="range" min={0} name = "priceRange"  max={100}
             value={priceRange[1]} 
             onChange={handlePriceChange} className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer' />
            <div className='flex justify-between text-gray-600 mt-2'>
                <span>$0</span>
                <span>${priceRange[1]}</span>

            </div>
            
        </div>



    </div>
  )
}

export default FilterSidebar