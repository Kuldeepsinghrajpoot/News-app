'use client'

import React from "react";
import Link from "next/link";
function page() {
    return (
        <div>
            <nav className=" shadow-lg border sticky top-0 bg-white h-16 py-3 ">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-7  justify-center">

                            {/* <!-- Primary Navbar items --> */}
                            <div className="hidden md:flex items-center space-x-1  justify-center">
                                <Link
                                    href="/"
                                    className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"

                                    >
                                    Home
                                </Link>
                                <Link
                                    href="/business"
                                    className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
                                    >
                                    business
                                </Link>
                                <Link
                                    href="/entertainment"
                                    className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
                                    >
                                    Entertainment
                                </Link>
                                <Link
                                    href="/general"
                                    className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">
                                    General
                                </Link>
                         
                        {/* <!-- Secondary Navbar items --> */}
                      
                            <Link
                                href="/health"
                                className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
                            >
                                Health
                            </Link>

                      
                            <Link
                                href="/science"
                                className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
                            >
                                Science
                            </Link>

                       
                            <Link
                                href="/sports"
                                className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
                            >
                                Sports
                            </Link>

                        
                            <Link
                                href="/technology"
                                className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
                            >
                                echnology
                            </Link>

                        </div>
                        </div>
                        {/* <!-- Mobile menu button --> */}
                        <div className="md:hidden flex items-center">
                            <button className="outline-none mobile-menu-button">
                                <svg
                                    className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                                    x-show="!showMenu"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* <!-- mobile menu --> */}
                {/*  here the hidden the menue value */}
                <div className="hidden mobile-menu">
                    <ul className="">
                        <li className="active">
                            <Link
                                href="index.html"
                                className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#services"
                                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#about"
                                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#contact"
                                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

            </nav>
            <br />
            <h1 className="text-black-500 text-2xl md:text-3xl lg:text-4xl font-bold p-4">News </h1>

        </div>
    );
}

export default page;
