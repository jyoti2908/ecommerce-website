import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

function Header() {
    const { search, setSearch, category, setCategory } = useContext(ProductContext);
    const { totalItems } = useContext(CartContext);

    return (
        <div className="bg-gray-700 text-white p-2 flex flex-wrap items-center justify-between gap-2 sm:gap-4 relative">
            {/* Logo: Do not shrink in any device, sm: On screens ≥ 640px*/}
            <Link to="/" className="flex-shrink-0"> 
                <img src="logoapp.jpeg" alt="Logo" className="h-7 w-7 sm:h-8 sm:w-8" />
            </Link>

            {/* Search Input"
            40vw means 40% of the width of the entire browser window, not the parent container.*/}
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="text-black h-6 sm:h-7 px-2 rounded-md text-xs shadow-md w-[40vw] sm:w-[180px] md:w-[280px] min-w-0 flex-1"
            />

            {/* Category Dropdown */}
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="h-6 sm:h-7 bg-red-400 text-white rounded-md shadow-md text-xs sm:text-sm w-[28vw] sm:w-28 text-center flex-shrink-0"
            >
                <option value="All">All</option>
                <option value="beauty">Beauty</option>
                <option value="groceries">Grocery</option>
                <option value="fragrances">Fragrances</option>
                <option value="furniture">Furniture</option>
            </select>

            {/* Wishlist & Cart */}
            <div className="flex items-center gap-2 sm:gap-3 relative flex-shrink-0">
                <Link to="/wishlist">
                    <FaHeartCirclePlus className="text-base sm:text-xl" />
                </Link>
                <Link to="/cart" className="relative">
                    <HiOutlineShoppingCart className="text-base sm:text-xl" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1 rounded-full">
                        {totalItems}
                    </span>
                </Link>
            </div>

            {/* DESKTOP: Login & Signup (inline, hidden on mobile) 
            hidden: Completely hides the element on all screen sizes by default (display: none)*/}
            <div className="hidden sm:flex gap-2 flex-shrink-0">
                <Link to="/login">
                    <button className="text-sm h-7 w-16 bg-red-400 hover:bg-red-500 text-white rounded-md">
                        Login
                    </button>
                </Link>
                <Link to="/signup">
                    <button className="text-sm h-7 w-20 bg-red-400 hover:bg-red-500 text-white rounded-md">
                        SignUp
                    </button>
                </Link>
            </div>

            {/* MOBILE: Login & Signup (second row, centered) */}
            <div className="flex sm:hidden w-full justify-center mt-2">
                <div className="flex gap-2">
                    <Link to="/login">
                        <button className="text-xs h-6 w-14 bg-red-400 hover:bg-red-500 text-white rounded-md">
                            Login
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button className="text-xs h-6 w-16 bg-red-400 hover:bg-red-500 text-white rounded-md">
                            SignUp
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Header;

