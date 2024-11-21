import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import { MdSearch } from "react-icons/md";

const Navbar = () => {
    return (
        <div className='w-full fixed  top-0 left-0 py-2 z-50 flex items-center justify-between px-5 shadow-lg bg-white'>
            <h1 className="text-xl font-bold">
                <Link to={"/"}>
                    E-Commerce
                </Link>
            </h1>

            <div className="w-2/4 h-9 rounded-md flex items-center relative bg-slate-100">
                <input type="text" placeholder='Search Here' className="p-4 w-full h-8 bg-transparent rounded-md text-slate-600 outline-none" />
                <MdSearch className='absolute text-slate-500 right-3 text-xl hover:text-primary'/>
            </div>

            <div className="w-auto h-10  flex items-center justify-between">
                <Link to={"/cart"}>
                    <button className="m-2 group relative rounded-md w-auto h-10 p-2 flex items-center justify-between hover:text-primary">
                        <div className="text-lg m-1 font-medium flex items-center justify-between hover:text-primary">
                            <IoCartOutline className='text-md mr-1 text-slate-800 group-hover:text-primary'/>
                            <span className="text-sm  text-slate-800 font-medium group-hover:text-primary">Cart</span>
                        </div>
                        <div className="bg-red-500 p-[2px] w-5 h-5 mx-1 text-[10px] flex items-center justify-center rounded-full font-semibold text-white">2</div>
                    </button>
                </Link>

                <div className="flex items-center justify-between p-2 cursor-pointer">
                    <div className="m-2 rounded-full w-10 h-10 p-1 flex items-center justify-center bg-blue-100">
                        <span className="text-sm font-medium ">TH</span>
                    </div>
                    <div className="flex items-center justify-center group cursor-pointer">
                        <h3 className="text-sm font-medium text-slate-800 group-hover:text-primary">Tanmay</h3>
                        <MdOutlineKeyboardArrowDown className='text-sm text-gray-600 group-hover:text-primary'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
