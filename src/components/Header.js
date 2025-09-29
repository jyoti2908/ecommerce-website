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
        <div className=" h-14 bg-gray-700 flex justify-between p-4 items-center text-white fixed top-0 left-0 right-0 z-50">
            <div className="h-8 w-8 ">
                <Link to="/"><img src="logoapp.jpeg" /></Link>
            </div>
            <div>
                <input type="text"
                    placeholder="Search your products and more..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="text-black lg:w-[521px] sm:w-24 sm:h-6 rounded-md shadow-md lg:h-8 text-center" />
            </div>
            <div>
                <select className="text-black h-8 text-center rounded-md shadow-md w-40"
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
            <div>
                <Link to="/wishlist"><span className="heart"><FaHeartCirclePlus /></span></Link>
            </div>
            <div className="flex content-between">
                <div>
                    <Link to="/cart"><span className="cart">< HiOutlineShoppingCart /></span></Link>
                </div>
                <div className="flex">
                    <div
                        className="h-5 w-5 bg-gray-100 rounded-full">
                    </div>
                    <span className="text-red-500 text-sm -ml-4 font-medium">{totalItems}</span>
                </div>
            </div>

            <div className="flex gap-4">
                <Link to="/login"><button className="mt-1 text-sm bg-gray-500 h-8 w-16 rounded-md hover:bg-red-500 gray-500 ml-6">Login</button></Link>
                <Link to="/signup"><button className="mt-1 text-sm bg-gray-500 h-8 w-16 rounded-md hover:bg-red-500 ml-2">SignUp</button></Link>
            </div>
        </div>
    )
}
export default Header;