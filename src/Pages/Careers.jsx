import React from 'react'
import Testimonials from '../Components/Career/Testimonials'
import WorkCulture from '../Components/Career/WorkCulture'
import HeroCarrer from '../Components/Career/HeroCareer'
import HeroContact from '../Components/Career/HeroContact'
import '../Components/Career/HeroCareer.css'
import Navbar from '../Components/Global/Navbar-Carrer'
function Careers() {
    return (
        <>
            <div className="HeroCarrer w-[100vw] h-fit min-h-[100vh] text-secondary flex flex-col items-center">
                <Navbar />
                <HeroCarrer />
                <WorkCulture />
                <Testimonials />
                <HeroContact />
            </div>
        </>
    )
}

export default Careers