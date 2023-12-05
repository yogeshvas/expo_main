import React from 'react'
import img1 from '../../Assets/carrers/carrercontact.png'
import img2 from '../../Assets/carrers/phonecallcarrercontact.png'
const HeroContact = () => {
    return (<div className='bg-white w-full flex justify-center'>
        <div className='h-fit flex md:flex-row flex-col justify-center items-center md:items-center px-15 md:px-20 py-20 w-full md:w-[80vw]'>
            <div className='w-[50%] md:w-1/3 flex justify-center'>
                <img className='w-full' src={img1} />
            </div>
            <div className='w-full md:w-fit flex flex-col justify-center items-center md:items-start'>
                <h1 className='block text-xl md:text-xl lg:text-4xl xl:text-6xl'>for any queries call</h1>
                <div>
                    <span className='text-xl md:text-xl lg:text-4xl xl:text-6xl flex items-center'> us at <img className='inline w-7 h-7 md:w-8 lg:w-12 md:h-8 lg:h-12 mx-3' src={img2} /><span className='font-poppins text-white bg-black p-1 rounded-3xl text-lg md:text-xl lg:text-2xl xl:text-3xl' style={{ fontFamily: "Poppins" }} >+91 6204591491</span></span>
                    {/* <span className='text-white bg-black p-2 rounded-3xl text-3xl'>+91 8700923340</span> */}
                </div>
            </div>
        </div >
    </div>
    )
}

export default HeroContact