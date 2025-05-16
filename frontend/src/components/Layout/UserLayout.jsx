import Header from "../Common/Header"
import Footer from "../Common/Footer"
import { Outlet } from 'react-router-dom'
import React from 'react'
// This is the layout for the user. It will be used for all the pages that are not admin.
// It will have a header, footer and a main content area.
// The main content area will be used to render the child routes.
// The child routes will be defined in the App.js file.
// The header and footer will be the same for all the pages.
// The main content area will be different for each page.
const UserLayout = () =>
{
    return (
        <>
        
        {/* This is the layout for the user. It will be used for all the pages that are not admin. */}
       
        {/* Header*/}
        <Header/>
        
        {/* Main Content*/}
        <main>
        <Outlet /> {/* This will render child routes like /men, /profile, etc */}
        
        </main>
        
        
        {/* Footer*/}
        <Footer/>
        </>
    )
}

export default UserLayout