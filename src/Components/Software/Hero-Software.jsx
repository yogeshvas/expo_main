import React from 'react'

const Hero_Software = () => {
    return (
        <div className='flex justify-center p-[4rem] md:p-40 flex-col items-center'>
            <img className='absolute w-[40%] sm:w-[30%] lg:w-[20%] lg:left-[25vw] sm:left-[15vw] left-[10vw]' src={require('../../Assets/softwares/img1.png')} />
            <div className='z-10 font-sans text-4xl text-primary text-center'>
                <h2 className='font-bold text-4xl'>Ready to run?</h2>
                <h3 className='text-3xl'>Choose a plan according to your needs</h3>
            </div>
        </div>
    )
}

export default Hero_Software