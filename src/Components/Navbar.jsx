import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='w-full fixed  top-0 left-0 py-2 z-50 flex items-center justify-between px-5 shadow-lg'>
            <h1 className="text-xl font-bold">
                <Link to={"/"}>
                    E-Commerce
                </Link>
            </h1>
            <div className="w-auto h-10 p-4 flex items-center justify-between">
                <Link to={"/cart"}>
                    <button className="m-2 relative rounded-md w-auto h-10 p-2 flex items-center justify-between">
                        <span className="text-lg m-1 font-medium">
                            <IoCartOutline className='text-md text-gray-600'/>
                        </span>
                        <span className="text-sm text-gray-600 font-medium">Cart</span>
                        <div className="bg-red-500 p-[2px] w-5 h-5 mx-1 text-xs rounded-full text-white">2</div>
                    </button>
                </Link>
                <div className="flex items-center justify-between p-2">
                    <div className="m-2 rounded-full w-10 h-10 p-1 flex items-center justify-center bg-blue-100">
                        <span className="text-sm font-medium">TH</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <h3 className="text-sm font-medium text-gray-600">Tanmay</h3>
                        <MdOutlineKeyboardArrowDown className='text-sm text-gray-600'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
