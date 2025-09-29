import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { WishListContext } from "../context/WishContext";

function ProductCard({ item }) {
    const { addToCart } = useContext(CartContext);//We will use "products" from ProductContext here.
    const { addToWishList } = useContext(WishListContext);
    const [liked, setLiked] = useState(false); // 

    const handleWishlist = () => {
        setLiked(!liked); // Toggle state
        addToWishList(item); // Add to wishlist
    };

    return (
            
        <div>
            <div key={item.id} className=" lg:w-72 sm:w-32 lg:h-96  sm:h-48  border-2 border-red-200 lg:mt-20 sm:mt-[24px] shadow-xl shadow-red-100 lg:ml-6 sm:ml-4 flex flex-wrap ">
                <div>
                    <button onClick={handleWishlist} className="p-1 m-2 ml-60">
                        {liked ? (
                            <FaHeart className="text-red-500" /> // Filled heart with red color
                        ) : (
                            <FaRegHeart className="text-gray-600" /> // Outline heart
                        )}
                    </button>
                </div>

                <div>
                    <Link to={`/detailedpage/${item.id}`}>
                    <img className="h-48 w-54 ml-12 mb-4" src={item.thumbnail} />
                    </Link>
                </div>
                <div className="text-center w-full">
                    <Link to={`/detailedpage/${item.id}`}>
                    <h2><b>{item.title}</b></h2>
                    <p>Price: $ {item.price}</p>
                    </Link>
                </div>
                <br />
                <button className="h-8 w-20 rounded-md bg-gray-500 border-black-100 p-1 m-2 ml-[110px] text-white text-xs hover:bg-red-500 " onClick={() => addToCart(item)}> Add to Cart</button>
                <br />
            </div>

        </div>
        
    )
}
export default ProductCard;