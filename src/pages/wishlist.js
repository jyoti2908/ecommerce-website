import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { WishListContext } from "../context/WishContext";

function Wishlist() {
    const { wishListItems, removeFromWishList  } = useContext(WishListContext);

    return (
        <div className="h-screen w-screen">
        <div className="flex w-[290px] h-[420px] mt-24 ml-16 item-center">
            {wishListItems.map((item) => (
                <div>
                    <ProductCard key={item.id} item={item} />
                    <button onClick={() => removeFromWishList(item.id)} className="h-6 w-16 ml-[142px] mt-1 rounded-md bg-red-500 border-black-100 text-white text-xs hover:bg-red-400">Remove</button>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Wishlist;