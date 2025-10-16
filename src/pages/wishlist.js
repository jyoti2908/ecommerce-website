import { useContext, useState } from "react";
import ProductCard from "../components/ProductCard";
import { WishListContext } from "../context/WishContext";
import { IoTrashOutline } from "react-icons/io5";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Wishlist() {
    const { wishListItems, removeFromWishList } = useContext(WishListContext);
    const [shake, setShake] = useState(false)

    function handleShake() {
        setShake(true);
        console.log ('shake')
        setTimeout(() =>
            setShake(false)
            ,500)
    }

    return (
        <div className="h-screen w-screen bg-cover bg-repeat "
        style={{ backgroundImage: "url('bags.jpg')" }}>
            <div className="flex overflow-auto">
                <div>
                    <img className="h-20 w-32 mt-8" src="bannerone.webp" />
                </div>
                <div className=" mt-8 bg-yellow-300 text-black text-2xl font-bold h-20 overflow-hidden">
                    <p className="animate-marquee px-4 py-6">
                        🎉 Happy Diwali! Enjoy limited-time offers on all products. Shop Now 🛍️ Hurry up!!</p>
                </div>
                <div>
                    <img className="h-20 w-32 mt-8" src="bannertwo.webp" />
                </div>
            </div>
            <div>
                <div className="flex h-[370px]">
                    {wishListItems.map((item) => (
                        <div>
                            <ProductCard key={item.id} item={item} />
                            <button onClick={() => removeFromWishList(item.id)}
                                className="h-8 w-20 ml-40 mt-2 rounded-md bg-red-500 border-black-100 text-white text-xs hover:bg-red-400">
                               <IoTrashOutline className="h-4 w-4 ml-8" /></button>
                        </div>
                    ))}
                </div>
                <div>
                    <button 
                    onClick={handleShake} 
                    className={`mt-6 mb-4 flex justify-center items-center bg-yellow-500 font-semibold h-12 w-72 rounded
                    mx-auto block transition-shadow duration-300 shadow-md hover:shadow-xl animate-shake
                    `}>
                    PROCEED TO PAYMENT PAGE
                    <Link to="/cart"><FaArrowRightToBracket className=" ml-4 h-6 w-8 transition-transform duration-300 hover:translate-x-4" /></Link>
                    </button>
            </div>
        </div>
        </div >
    );
};

export default Wishlist;