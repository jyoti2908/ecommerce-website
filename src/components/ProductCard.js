import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { WishListContext } from "../context/WishContext";
import '../App.css';

function ProductCard({ item }) {
    const { addToCart } = useContext(CartContext);//We will use "products" from ProductContext here.
    const { addToWishList } = useContext(WishListContext);
    const [liked, setLiked] = useState(false); // 

    const handleWishlist = () => {
        setLiked(!liked); // Toggle state
        addToWishList(item); // Add to wishlist
    };
    return (
        <div className="px-4 md:px-0">
            <div key={item.id} className="mx-auto card md:w-60 h-64 rounded mt-6 shadow-xl shadow-red-100 md:ml-12 flex flex-wrap 
            bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 
            transition-transform duration-300 hover:scale-90">
                <div>
                    <button onClick={handleWishlist} className="p-1 m-2">
                        {liked ? (
                            <FaHeart className="text-red-500" /> // Filled heart with red color
                        ) : (
                            <FaRegHeart className="text-gray-600" /> // Outline heart
                        )}
                    </button>
                </div>
                <div>
                    <Link to={`/detailedpage/${item.id}`}>
                        <img className="h-32 w-32 mt-4 block mx-auto transition-opacity duration-300 hover:opacity-50" src={item.thumbnail} />
                    </Link>
                </div>
                <div className="details text-center w-full">
                    <Link to={`/detailedpage/${item.id}`}>
                        <h2><b>{item.title}</b></h2>
                        <p>Price: $ {item.price}</p>
                    </Link>
                </div>
                <br />
                <button className="animate-shake h-6 w-20 rounded-md bg-gray-500 p-1 m-2 text-white text-xs hover:bg-red-500 mx-auto" onClick={() => addToCart(item)}> Add to Cart</button>
                <br />
            </div>

        </div>
    )
}
export default ProductCard;

