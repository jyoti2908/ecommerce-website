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
        <div className="bg-gray-700 text-white p-2 flex flex-wrap items-center justify-between gap-2 sm:gap-4">
            
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
                <img src="logoapp.jpeg" alt="Logo" className="h-8 w-8" />
            </Link>

            {/* Search Input */}
            <input
                type="text"
                placeholder="Search your products and more..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="text-black h-7 px-2 rounded-md text-sm shadow-md w-[180px] sm:w-72 md:w-96 min-w-0 flex-1"
            />

            {/* Category Dropdown */}
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="h-7 bg-red-400 text-white rounded-md shadow-md text-sm w-[100px] sm:w-32 text-center flex-shrink-0"
            >
                <option value="All">All Categories</option>
                <option value="beauty">Beauty</option>
                <option value="groceries">Grocery</option>
                <option value="fragrances">Fragrances</option>
                <option value="furniture">Furnitures</option>
            </select>

            {/* Wishlist & Cart */}
            <div className="flex items-center gap-4 relative flex-shrink-0">
                <Link to="/wishlist">
                    <FaHeartCirclePlus className="text-xl sm:text-2xl" />
                </Link>

                <Link to="/cart" className="relative">
                    <HiOutlineShoppingCart className="text-xl sm:text-2xl" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                        {totalItems}
                    </span>
                </Link>
            </div>

            {/* Login & Signup Buttons */}
            <div className="flex gap-2 flex-shrink-0">
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
        </div>
    );
}

export default Header;



// import { Link } from "react-router-dom";
// import { HiOutlineShoppingCart } from "react-icons/hi2";
// import { FaHeartCirclePlus } from "react-icons/fa6";
// import { useContext, useState } from "react";
// import { ProductContext } from "../context/ProductContext";
// import { CartContext } from "../context/CartContext";

// function Header() {
//     const { search, setSearch, category, setCategory } = useContext(ProductContext);
//     const { totalItems } = useContext(CartContext);
//     return (
//             <div className="h-auto bg-gray-700 flex sm:flex-row justify-between items-center
//              p-4 gap-3 text-white">

//             <div className="h-8 w-8">
//                 <Link to="/"><img src="logoapp.jpeg"/></Link>
//             </div>

//             <div>
//                 <input
//                     type="text"
//                     placeholder="Search your products and more..."
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     className="text-black w-full sm:w-48 md:w-96 h-8 rounded-md shadow-md px-2 text-sm"
//                 />
//             </div>
//             <div>
//                 <select
//                     className="text-white h-8 rounded-md shadow-md text-sm w-full sm:w-40 text-center bg-red-400"
//                     value={category}
//                     onChange={(e) => setCategory(e.target.value)}
//                 >
//                     <option value="All">All Categories</option>
//                     <option value="beauty">Beauty</option>
//                     <option value="groceries">Grocery</option>
//                     <option value="fragrances">Fragrances</option>
//                     <option value="furniture">Furnitures</option>
//                 </select>
//             </div>
    
//             <div className="flex gap-8 ml-36">
//                 <Link to="/wishlist">
//                     <FaHeartCirclePlus className="text-xl sm:text-2xl" />
//                 </Link> 

//                 <div className="relative">
//                     <Link to="/cart">
//                         <HiOutlineShoppingCart className="text-xl sm:text-2xl" />
//                     </Link>
//                     <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">{totalItems}</span>
//                 </div>
//             </div>

//             <div className="flex gap-6 mt-2 ml-24 sm:mt-0">
//                 <Link to="/login">
//                     <button className="text-sm text-white h-8 w-20 rounded-md bg-red-400 hover:bg-red-500">Login</button>
//                 </Link>
//                 <Link to="/signup">
//                     <button className="text-sm text-white bg-red-400 h-8 w-24 rounded-md hover:bg-red-500">SignUp</button>
//                 </Link>
//             </div>
//         </div>
//     )
// }
// export default Header;