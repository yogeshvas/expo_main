import React from 'react'

const SectionACard = ({ curr, index, setCurrentComparePlanSector, selectedDuration, handlePlanSelect }) => {
    return (

        <div>

            <div className="w-full h-fit text-center max-w-sm p-4 bg-white border border-gray-200 rounded-2xl shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-xl font-medium text-gray-500 dark:text-gray-400">{curr.category}</h5>
                <div className="flex items-baseline text-gray-900 dark:text-white text-center">
                    <span className="text-4xl font-extrabold tracking-tight text-center w-full">{curr.price}</span>
                </div>
                <div className="flex items-baseline text-gray-900 dark:text-white text-center">
                    <span className="text-md font-medium tracking-tight text-center w-full">{curr.tagline}</span>
                </div>
                <ul role="list" className="space-y-5 my-7">
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-[#CCB36B] dark:text-[#CCB36B]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-[#CCB36B] dark:text-[#CCB36B]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">20GB Cloud storage</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-[#CCB36B] dark:text-[#CCB36B]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-[#CCB36B] dark:text-[#CCB36B]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
                    </li>
                </ul>
                <button onClick={() => handlePlanSelect(index, selectedDuration)} type="button" className="text-white bg-[#CCB36B] hover:bg-[#CCB36B] focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">See all features</button>
            </div>

        </div >
    )
}

export default SectionACard