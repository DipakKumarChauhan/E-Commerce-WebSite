import React from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2';



const SearchBar = () => {

    const [searchTerm, setSearchTerm] = React.useState('');
    const [isOpen, setIsOpen] = React.useState(false);
    const handleSearchToggle = () => {
        setIsOpen(!isOpen);
    }
    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search term:', searchTerm);
        setIsOpen(false);
    }

  return (
    <div className = {`flex items-center justify-center w-full ${isOpen ? 'absolute top-0 left-0 w-full bg-white h-24 z-50' : 'w-auto'} transition-all duration-300`}>
        {isOpen ? <form onSubmit = {handleSearch} className='relative flex items-center justify-center w-full'>
            <div className = "relative w-1/2">
            <input type ="text" placeholder='Search' value = {searchTerm} onChange = {(e) => setSearchTerm(e.target.value) } className= "bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700"/>

            {/* searchIcon */}
            <button type = "submit" className = "absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800">
                <HiMagnifyingGlass className='h-6 w-6'/>
            </button>
            </div>

            {/* closeButton */}
            <button type = "button" className = "absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800" onClick={handleSearchToggle}>
                <HiMiniXMark className='h-6 w-6 text-gray-700' onClick={() => setIsOpen(false)}/>
            </button>


        </form> : (
            <button onClick={handleSearchToggle}>
                <HiMagnifyingGlass className='h-6 w-6 text-gray-700' onClick={() => setIsOpen(true)}/>
            </button>
        )} 
    </div>
  )
}

export default SearchBar