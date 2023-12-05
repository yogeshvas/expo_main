import React from 'react'
import SectionACard from './SectionACard'
// import { defaultCurrentPlan } from '../../Components'
const SectionA = ({ time_duration, selectedDuration, setSelectedDuration, handleDurationChange, currentPlan, handlePlanSelect }) => {

    return (
        <div className='flex justify-center flex-col items-center '>
            <div className='w-full flex justify-center'>

                {
                    time_duration.map((curr, i) => {
                        if (curr._id == selectedDuration) {
                            return (
                                <button className='hover:bg-[#CCB36B] bg-[#CCB36B] text-white font-bold font-sans rounded-full px-3 md:px-6 py-1 sm:py-2 my-5 mx-1 sm:m-5' onClick={() => handleDurationChange(curr._id)}>{curr.duration}</button>
                            )

                        }
                        else {
                            return (
                                <button className='hover:bg-[#CCB36B] bg-secoundary text-white font-bold font-sans rounded-full px-3 md:px-6 py-1 sm:py-2 my-5 mx-1 sm:m-5' onClick={() => handleDurationChange(curr._id)}>{curr.duration}</button>
                            )
                        }

                    })
                }
            </div>
            <div className='flex gap-5 md:flex-row flex-col'>
                {
                    currentPlan.map((curr, i) => {
                        return (
                            <SectionACard curr={curr} index={i} handlePlanSelect={handlePlanSelect} selectedDuration={selectedDuration} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default SectionA