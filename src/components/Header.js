import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

function Header() {
    const { search, setSearch, category, setCategory } = useContext(ProductContext);
    const { totalItems } = useContext(CartContext);
    return (
        <div className="h-auto bg-gray-700 flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 gap-3 text-white fixed top-0 left-0 right-0 z-50">

            {/* <div className=" h-14 bg-gray-700 flex justify-between p-4 items-center text-white fixed top-0 left-0 right-0 z-50"> */}
            <div className="h-8 w-8">
                <Link to="/"><img src="logoapp.jpeg"/></Link>
            </div>

            {/* <div className="h-8 w-8 ">
                <Link to="/"><img src="logoapp.jpeg" /></Link>
            </div> */}
            <div>
                <input
                    type="text"
                    placeholder="Search your products and more..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="text-black w-full sm:w-48 md:w-96 h-8 rounded-md shadow-md px-2 text-sm"
                />
            </div>
            <div>
                <select
                    className="text-white h-8 rounded-md shadow-md text-sm w-full sm:w-40 text-center bg-red-400"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="All">All Categories</option>
                    <option value="beauty">Beauty</option>
                    <option value="groceries">Grocery</option>
                    <option value="fragrances">Fragrances</option>
                    <option value="furniture">Furnitures</option>
                </select>
            </div>
    
            <div className="flex gap-8 ml-36">
                <Link to="/wishlist">
                    <FaHeartCirclePlus className="text-xl sm:text-2xl" />
                </Link> 

                <div className="relative">
                    <Link to="/cart">
                        <HiOutlineShoppingCart className="text-xl sm:text-2xl" />
                    </Link>
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">{totalItems}</span>
                </div>
            </div>

            <div className="flex gap-6 mt-2 ml-24 sm:mt-0">
                <Link to="/login">
                    <button className="text-md text-white h-8 w-20 rounded-md bg-red-400 hover:bg-red-500">Login</button>
                </Link>
                <Link to="/signup">
                    <button className="text-md text-white bg-red-400 h-8 w-24 rounded-md hover:bg-red-500">SignUp</button>
                </Link>
            </div>
        </div>
    )
}
export default Header;