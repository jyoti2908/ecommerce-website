import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);

  return (
    <div className="h-screen w-screen bg-cover bg-repeat"
      style={{ backgroundImage: "url('rangoli.png')" }}>
      <div>
        <div className="w-screen bg-yellow-300 text-gray-600 md:text-2xl text-xs font-semibold h-auto">
          <p className="animate-marquee px-4 py-6">
            🚀 Free shipping on orders over ₹999 – Hurry before it ends!</p>
        </div>
      </div>
      <div>
        <div >
          <div>
            <h3 className="mx-auto block font-serif mt-6 text-xl
               bg-green-400 font-semibold h-16 w-72 rounded px-4 py-2 text-center">Total price = $ {totalPrice}</h3>
          </div>
          {cartItems.length === 0 ? (
            <button className="mx-auto block animate-flash text-white font-serif mt-20 
               bg-red-500 font-semibold h-12 w-72 rounded"> CART IS EMPTY !!</button>
          ) : (
            cartItems.map((item) => (
              <div key={item.id}>
                <ProductCard item={item} />
                <div className="flex gap-12">
                  <div>
                    <button onClick={() => removeFromCart(item.id)} className="h-6 w-16 md:ml-16 mt-4 rounded-md bg-red-500 border-black-100 text-white text-xs hover:bg-red-400">Remove</button>
                  </div>
                  <div className="flex ">
                    <div>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="rounded-md md:ml-12 mt-4 h-6 w-6 bg-green-400 text-center">+</button>
                    </div>
                    <div>
                      <h2 className="h-6 w-16 mt-4 ml-1 rounded-md bg-green-500 border-black-100 text-white text-xs text-center p-1 hover:bg-green-400">Quantity:{item.quantity}</h2>
                    </div>
                    <div>
                      <button onClick={() => item.quantity > 1
                        ? updateQuantity(item.id, item.quantity - 1)
                        : removeFromCart(item.id)
                      }
                        disabled={item.quantity === 1}
                        className="rounded-md ml-1 mt-4 h-6 w-6 bg-red-400 text-center mb-1"> - </button>
                    </div>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default Cart;



