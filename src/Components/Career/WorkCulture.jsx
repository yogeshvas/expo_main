import React from 'react'
import tick from '../../Assets/carrers/checked.png'
const WorkCulture = () => {
    return (
        <div className='bg-[#141416] h-[100vh] min-h-fit w-[100vw] p-5 md:p-20 flex flex-col items-center justify-center'>
            <div className='font-sans text-3xl md:text-6xl text-white text-center'>Our Culture</div>
            <div className='flex text-white gap-3 justify-around font-sans p-5 md:p-16 md:flex-row flex-col'>
                <div className='w-full md:w-[45%] flex flex-col gap-3 h-100%'>
                    <span className='flex min-h-[50%]'><img className='mr-5 inline w-12 h-12 ' src={tick} /><p className='inline'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quam laudantium cum quisquam error minima eveniet. Modi sunt, porro cumque soluta similique, optio sequi deleniti nam nulla perferendis alias eos.</p></span>
                    <span className='flex min-h-[50%]'><img className='mr-5 inline w-12 h-12' src={tick} /><p className='inline'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus omnis laborum numquam doloribus aliquid molestiae totam blanditiis sint perferendis asperiores porro enim, architecto tenetur molestias, repellat fuga dolorum. Adipisci, voluptatum.</p></span>
                </div>
                <div className='w-full md:w-[45%] flex flex-col gap-3 h-100%'>
                    <span className='flex min-h-[50%]'><img className='mr-5 inline w-12 h-12' src={tick} /><p className='inline'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus omnis laborum numquam doloribus aliquid molestiae totam blanditiis sint perferendis asperiores porro enim, architecto tenetur molestias, repellat fuga dolorum. Adipisci, voluptatum.</p></span>
                    <span className='flex min-h-[50%]'><img className='mr-5 inline w-12 h-12' src={tick} /><p className='inline'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus omnis laborum numquam doloribus aliquid molestiae totam blanditiis sint perferendis asperiores porro enim, architecto tenetur molestias, repellat fuga dolorum. Adipisci, voluptatum.</p></span>
                </div>
            </div>
        </div>
    )
}

export default WorkCulture