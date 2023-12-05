import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div className='flex w-[100vw] flex-col items-center bg-secondary mainBg'>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
export default Layout