import React from 'react'
import Topbar from '../Layout/Topbar'
import Navbar from '../Layout/Navbar'
const Header = () => {
  return (
    <header className = "border-b border-gray-200">
        {/*TopBar*/}
        <Topbar/>
        {/*NavBar*/}
        <Navbar/>
        {/*SearchBar*/}
        {/*CartDrawer*/}
    </header>
  )
}

export default Header