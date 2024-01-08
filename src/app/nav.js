'use client'

import React from "react";
import Link from "next/link";
function page() {
    return (
        <>
            <nav className=" shadow-md border sticky md:sticky top-0 bg-white ">
                <header className="text-gray-600 body-font">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                       
                            <span className="ml-3 text-xl">TazaKhabar</span>
                        </div>
                        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
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
                                Technology
                            </Link>
                        </nav>
                        
                    </div>
                </header>

            </nav>
            {/* <br /> */}
            {/* <h1 className="text-black-500 text-2xl md:text-3xl lg:text-4xl font-bold p-4">News </h1> */}

        </>
    );
}

export default page;
