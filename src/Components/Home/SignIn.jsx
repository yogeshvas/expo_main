import React from 'react'
import Logo from '../../Assets/Icons/Google.png';
const SignUp = ({ handleHidden, handleMethod }) => {
    return (
        <>
            <div className="bg-[#000000b3] top-0 left-0 right-0 bottom-0 m-auto z-20 w-[100vw] h-[100vh] fixed">

                <div className="bg-[#e9e9e9] w-[80vw] md:w-[60vw] lg:w-[55vw] xl:w-[40vw] h-fit z-20 rounded-lg absolute top-0 left-0 right-0 bottom-0 m-auto flex-column justify-center items-center pb-3 pt-3 pl-7 sm:pb-7 pr-7 sm:pt-7 lg:pl-16 lg:pb-12 lg:pr-16 lg:pt-12">
                    <div className="flex justify-center mb-6 items-center">
                        <h1 className="font-sans font-bold leading-tight text-5xl mt-0 mb-2 bg-gradient-to-r from-gray-900 to-gray-800 text-transparent bg-clip-text    ">
                            Sign in
                        </h1>
                    </div>
                    <button
                        type="button"
                        onClick={() => { handleHidden() }}
                        className="absolute right-0 top-0 m-2 rounded-full h-fit p-2 inline-flex items-center justify-center text-gray-400 hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-inset "
                    >
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <div className="p-4 flex justify-center">
                        <form className="w-[95%] lg:w-[85%] flex flex-col">
                            {/* <div className="md:flex md:items-center w-full mb-3 justify-center">
                                
                                <div className="md:w-[80%]">
                                    <input
                                        className="bg-gray-300 rounded-full appearance-none border-2 border-gray-300 w-full pt-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-300  "
                                        id="inline-full-name2"
                                        type="text"
                                        name="name"
                                        // value={newUserData.name}
                                        // onChange={(e) => handleChange(e)}
                                        placeholder="Name"
                                    />
                                </div>
                            </div> */}
                            <div className="md:flex md:items-center mb-3 w-full justify-center">
                                {/* <div className="md:w-1/3 flex justify-start">
                                     <label
                                        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                        htmlFor="inline-full-name"
                                    >
                                        Email
                                    </label> 
                                </div>*/}
                                <div className="md:w-[80%]">
                                    <input
                                        className="bg-gray-300 rounded-full appearance-none border-2 border-gray-300 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-300  "
                                        id="inline-full-name"
                                        type="text"
                                        placeholder="E-mail"
                                        name="email"
                                        // value={newUserData.email}
                                        required
                                    // onChange={(e) => handleChange(e)}
                                    />
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-2 w-full justify-center">
                                {/* <div className="md:w-1/3 flex justify-start">
                                    <label
                                        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                        htmlFor="inline-password"
                                    >
                                        Password
                                    </label>
                                </div> */}
                                <div className="md:w-[80%]">
                                    <input
                                        className="bg-gray-300 rounded-full appearance-none border-2 border-gray-300 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-300  "
                                        id="inline-password"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        // value={newUserData.password}
                                        required
                                    // onChange={(e) => handleChange(e)}
                                    />
                                </div>
                            </div>
                            <div className="text-[0.8rem] md:flex md:items-center text-gray-500 mb-6 w-full justify-center">
                                <div className="md:w-[80%] flex justify-end">
                                    {/* <span><input type='checkbox' />Rememeber me</span> */}
                                    <span><button className='hover:underline mr-2'>Forgot Password?</button></span>
                                </div>
                            </div>
                            <div className="md:flex md:items-center w-full">
                                {/* <div className="md:w-1/3 flex justify-start"></div> */}
                                <div className="w-full flex flex-col justify-center items-center">

                                    <button
                                        className="shadow bg-gradient-to-r from-gray-900  to-gray-800 focus:shadow-outline w-1/2 focus:outline-none text-white font-bold py-2 px-4 rounded-full"
                                        type="submit"
                                    // onClick={handleSubmit}
                                    >
                                        Sign in
                                    </button>
                                    <div className='text-gray-500 flex md:flex-row flex-col md:items-center md:justify-around mt-2'>
                                        {/* <div className='flex flex-row justify-center items-center'>
                                            <p>Social Login: </p>
                                            <button className='h-[full] bg-white rounded-full m-2'>
                                                <img
                                                    className="h-[80%]"
                                                    src={Logo}
                                                    alt="Logo"
                                                />
                                            </button>
                                        </div> */}

                                        <span className="text-gray-500 text-[0.9rem]">
                                            Don't have an account?
                                            <button
                                                className="hover:underline ml-2"
                                                onClick={() => handleMethod()}
                                            >Create</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </form>{" "}
                    </div>
                </div >    </div >
        </>
    )
}

export default SignUp         