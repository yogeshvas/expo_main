import React, { useState } from 'react';
import Logo from '../../Assets/Icons/logo.png';
import GoogleImg from '../../Assets/Icons/Google.png';
import { useNavigate } from "react-router-dom"
import SignIn from '../Home/SignIn';
import SignUp from '../Home/Signup';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [method, setMethod] = useState(false) // f signin t signup
    const [hidden, setHidden] = useState(true)
    const navigate = useNavigate();
    const handleMethod = () => {
        setMethod(!method)
    }
    const handleHidden = () => {
        setHidden(!hidden)
    }
    const handleSignin = () => {
        setHidden(false);
        setMethod(true);
    }
    const handleSignup = () => {
        setHidden(false);
        setMethod(false);
    }
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    const handleClick2 = () => {
        handleSignup();
        setIsOpen(!isOpen);
    };
    const handleClick1 = () => {
        handleSignin();
        setIsOpen(!isOpen);
    };

    return (
        <>
            {
                hidden ? <></> : <>
                    {
                        method ? <SignIn handleHidden={handleHidden} handleMethod={handleMethod} /> : <SignUp handleHidden={handleHidden} handleMethod={handleMethod} />
                    }
                </>
            }
            <nav className="md:absolute max-w-screen-2xl w-full">
                <div className="pt-[0.5rem] mx-auto px-4 sm:px-6 lg:px-8 lg:py-2">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <button onClick={() => navigate("/")}>
                                    <img
                                        className="w-40"
                                        src={Logo}
                                        alt="Logo"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <div className="ml-4 flex items-center space-x-4">
                                <button
                                    onClick={() => navigate("/softwares")}
                                    className="text-secondary tracking-[1px] hover:bg-gray-200 hover:text-secondary px-3 py-3 rounded-full text-sm font-medium transition-all"
                                >
                                    Softwares
                                </button>
                                {/* <button
                href="/"
                className="text-secondary tracking-[1px] hover:bg-gray-200 hover:text-secondary px-3 py-3 rounded-full text-sm font-medium transition-all"
              >
              Industries
            </button> */}
                                <button
                                    onClick={() => navigate("/contact")}
                                    className="text-secondary tracking-[1px] hover:bg-gray-200 hover:text-secondary px-3 py-3 rounded-full text-sm font-medium transition-all"
                                >
                                    Contact Us
                                </button>
                                <button
                                    onClick={() => navigate("/careers")}
                                    className="text-secondary tracking-[1px] hover:bg-gray-200 hover:text-secondary px-3 py-3 rounded-full text-sm font-medium transition-all"
                                >
                                    Careers
                                </button>
                                <button
                                    href="/"
                                    className="text-secondary tracking-[1px] hover:bg-gray-200 hover:text-secondary px-3 py-3 rounded-full text-sm font-medium transition-all"
                                >
                                    Expense Tracker
                                </button>
                                <button
                                    onClick={() => navigate("/reviews")}
                                    className="text-secondary tracking-[1px] hover:bg-gray-200 hover:text-secondary px-3 py-3 rounded-full text-sm font-medium transition-all"
                                >
                                    Reviews
                                </button>
                            </div>
                        </div>
                        <div className="-mr-2 flex lg:hidden">
                            <button
                                onClick={toggleNavbar}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-secondary hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
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
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
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
                                )}
                            </button>
                        </div>
                        <div className="hidden lg:block">
                            <div className="ml-4 flex items-center space-x-4">
                                <button
                                    onClick={() => { handleSignin() }}
                                    className="text-secondary tracking-[1px] hover:bg-gray-200 hover:text-secondary px-3 py-3 rounded-full text-sm font-medium transition-all"
                                >
                                    Sign In
                                </button>
                                <button
                                    onClick={() => { handleSignup() }}
                                    className="rounded-full text-primary bg-secondary hover:bg-gray-800 px-3 py-3 text-sm font-medium transition-all"
                                >
                                    Create Free Account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black">
                        <div className="" id="mobile-menu">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <button
                                    href="/"
                                    className="hover:bg-gray-200 hover:text-secondary text-primary block px-3 py-3 rounded-md text-base font-medium"
                                >
                                    Softwares
                                </button>

                                <button
                                    onClick={() => navigate("/contact")}
                                    className="tracking-[1px] hover:bg-gray-200 hover:text-secondary text-primary block px-3 py-3 rounded-md text-base font-medium"
                                >
                                    Contact Us
                                </button>
                                <button
                                    onClick={() => navigate("/careers")}
                                    className="tracking-[1px] hover:bg-gray-200 hover:text-secondary text-primary block px-3 py-3 rounded-md text-base font-medium"
                                >
                                    Careers
                                </button>
                                <button
                                    href="/"
                                    className="tracking-[1px] hover:bg-gray-200 hover:text-secondary text-primary block px-3 py-3 rounded-md text-base font-medium"
                                >
                                    Expense Tracker
                                </button>
                                <button
                                    onClick={() => navigate("/careers")}
                                    className="tracking-[1px] hover:bg-gray-200 hover:text-secondary text-primary block px-3 py-3 rounded-md text-base font-medium"
                                >
                                    Reviews
                                </button>
                                <button
                                    onClick={handleClick1}
                                    // onClick={() => { handleSignin() }}
                                    className=" tracking-[1px] hover:bg-gray-200 hover:text-secondary block px-3 py-3 rounded-md text-base font-medium"
                                >
                                    Sign In
                                </button>
                                <button
                                    onClick={handleClick2}
                                    // onClick={() => { handleSignup() }}
                                    className="text-secondary bg-primary hover:bg-gray-200 hover:text-secondary block px-3 py-3 rounded-md text-base font-medium"
                                >
                                    Create Free Account
                                </button>
                            </div>
                        </div>
                        <button
                            onClick={toggleNavbar}
                            className="md:absolute top-0 right-0 m-4 p-2 text-gray-400 hover:text-secondary"
                            aria-label="Close menu"
                        >
                            <svg
                                className="h-5 w-5"
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
                    </div>)}
            </nav>
        </>
    );
};

export default Navbar;
