import React from 'react'
import './HeroCareer.css'
import rect from '../../Assets/carrers/Rectangle.png'
import img1 from '../../Assets/carrers/carrerhero.png'
const HeroCarrer = () => {
  return (
    <div className='h-[100vh] w-[100vw] flex flex-col justify-center items-center'>
      <div className='flex md:flex-row flex-col p-5 md:pt-10 md:pl-10 md:pr-10 md:pb-10 justify-around w-[95%] sm:w-[80%] lg:w-[70%] h-fit items-center'>
        <div className='lg:w-[40%] xl:w-[30%] flex justify-center'>
          <img className='w-full' src={img1} />
        </div>
        <div className='w-[70%] font-sans flex items-end flex-col h-full z-10'>
          <div className=''>
            <h1 className='text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl font-medium'>Get the job you</h1>
            <h1 className='text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl text-[#CCB36B] font-bold'>deserve.</h1>
          </div>

          <div className='flex mt-12 w-full md:w-[70%]'>
            <select defaultValue='Type' className="w-1/3 pl-5 pr-2.5 pb-2.5 pt-2.5 text-gray-500 bg-[#F5F5F5] shadow-sm outline-none appearance-none rounded-l-full">
              <option disabled hidden>Type</option>
              <option className=''>Laravel 9 with React</option>
              <option className=''>React with Tailwind CSS</option>
              <option className=''>React With Headless UI</option>
            </select>
            <select defaultValue='Category' className="w-1/3 p-2.5 text-gray-500 bg-[#F5F5F5]  shadow-sm outline-none appearance-none">
              <option disabled hidden>Category</option>
              <option className=''>Laravel 9 with React</option>
              <option className=''>React with Tailwind CSS</option>
              <option className=''>React With Headless UI</option>
            </select>
            <button className="w-1/3 p-2.5 text-[#CCB36B] font-bold bg-[#F5F5F5]  shadow-sm outline-none appearance-none rounded-r-full">
              Search
            </button>
          </div>
        </div>
      </div>
      <img src={rect} className='w-full absolute bottom-0' />
    </div>
  )
}

export default HeroCarrer