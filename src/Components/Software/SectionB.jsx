import React, { useEffect } from 'react'

const SectionB = ({ currentComparePlanSector }) => {
    useEffect(() => {
        console.log(currentComparePlanSector
        )
        // return () => {
        //     second
        // }
    }, [currentComparePlanSector])

    return (
        <>

            <section className="dark:bg-gray-800 p-5 md:p-20 w-full min-h-full flex justify-center dark:text-gray-100">
                <div className="text-white flex divide-y divide-gray-700 justify-center min-w-[95vw] md:min-w-[80vw]  flex-col rounded-2xl font-sans">
                    <div className="flex h-fit p-2 md:p-5 w-full">
                        <div className='w-1/4 flex flex-col items-center'>
                            <div className='w-[80%]'>

                                <span className="text-xl font-bold sm:text-2xl dark:text-gray-5  "></span>
                                <div>
                                    <span className="text-2xl font-bold sm:text-2xl dark:text-gray-5  "></span>
                                    <span className="font-medium dark:text-gray-400 " ></span>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/4 flex flex-col items-center'>
                            <div className='w-[80%]'>

                                <span className="text-lg font-bold xl:text-2xl md:text-xl sm:text-3xl dark:text-gray-50">{currentComparePlanSector[0].plan}</span>
                                <div className='flex flex-col gap-1'>
                                    <span className="text-[8px] font-bold xl:text-2xl lg:text-xl md:text-lg sm:text-base dark:text-gray-50">{currentComparePlanSector[0].price}{currentComparePlanSector[0].duration}</span>
                                    {/* <span className="font-medium dark:text-gray-400">/{currentComparePlanSector[0].duration}</span> */}
                                    <button className='bg-[#CCB36B] px-1 sm:px-2 text-secondary py-1 rounded-full text-[0.6rem] whitespace-nowrap sm:text-sm md:text-base w-full'>Select Plan</button>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/4 flex flex-col items-center'>
                            <div className='w-[80%]'>

                                <span className="text-lg font-bold xl:text-2xl md:text-xl sm:text-3xl dark:text-gray-50">{currentComparePlanSector[1].plan}</span>
                                <div className='flex flex-col gap-1'>
                                    <span className="text-[8px] font-bold xl:text-2xl lg:text-xl md:text-lg sm:text-base dark:text-gray-50">{currentComparePlanSector[1].price}{currentComparePlanSector[1].duration}</span>
                                    {/* <span className="font-medium dark:text-gray-400">/{currentComparePlanSector[1].duration}</span> */}
                                    <button className='bg-[#CCB36B] px-1 sm:px-2 text-secondary py-1 rounded-full text-[0.6rem] whitespace-nowrap sm:text-sm md:text-base w-full'>Select Plan</button>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/4 flex flex-col items-center'>
                            <div className='w-[80%]'>

                                <span className="text-lg font-bold xl:text-2xl md:text-xl sm:text-3xl dark:text-gray-50">{currentComparePlanSector[2].plan}</span>
                                <div className='flex flex-col gap-1'>
                                    <span className="text-[8px] font-bold xl:text-2xl lg:text-xl md:text-lg sm:text-base dark:text-gray-50">{currentComparePlanSector[2].price}{currentComparePlanSector[2].duration}</span>
                                    {/* <span className="font-medium dark:text-gray-400">/{currentComparePlanSector[2].duration}</span> */}
                                    <button className='bg-[#CCB36B] px-1 sm:px-2 text-secondary py-1 rounded-full text-[0.6rem] whitespace-nowrap sm:text-sm md:text-base w-full'>Select Plan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center h-fit p-2 md:p-5 w-full bg-[#CCB36B] rounded-t-2xl">
                        <div className='w-1/4'>
                            <h3 className=" text-secondary py-3 font-bold text-center">Feature 1</h3>
                        </div>
                        <div className='w-1/4 text-center'>
                            {currentComparePlanSector[0].attribute1}

                        </div>
                        <div className='w-1/4 text-center'>
                            {currentComparePlanSector[1].attribute1}

                        </div>
                        <div className='w-1/4 text-center '>
                            {currentComparePlanSector[2].attribute1}

                        </div>
                    </div>
                    <div className="flex justify-center items-center h-fit p-2 md:p-5 w-full bg-[#CCB36B] ">
                        <div className='w-1/4'>
                            <h3 className=" text-secondary py-3 font-bold text-center">Feature 2</h3>
                        </div>
                        <div className='w-1/4 text-center'>
                            {currentComparePlanSector[0].attribute2}

                        </div>
                        <div className='w-1/4 text-center'>
                            {currentComparePlanSector[1].attribute2}

                        </div>
                        <div className='w-1/4 text-center'>
                            {currentComparePlanSector[2].attribute2}

                        </div>
                    </div>
                    <div className="flex justify-center items-center h-fit p-2 md:p-5 w-full bg-[#CCB36B] rounded-b-2xl">
                        <div className='w-1/4'>
                            <h3 className=" text-secondary py-3 font-bold text-center">Feature 3</h3>
                        </div>
                        <div className='w-1/4 text-center'>
                            {currentComparePlanSector[0].attribute3}

                        </div>
                        <div className='w-1/4 text-center'>
                            {currentComparePlanSector[1].attribute3}

                        </div>
                        <div className='w-1/4 text-center'>
                            {currentComparePlanSector[2].attribute3}

                        </div>
                    </div>

                    {/* </div> */}
                </div>
                {/* </div> */}
            </section >
        </>
    )
}

export default SectionB