import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";


function Cart() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  useEffect(() => {
    const response = window.alert("🔔 Click on OK to subscribe to notifications \n \t Stay updated with our latest happenings on our site");
  }, []);

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className=" bg-gray-200 w-screen h-screen">
          <div className="bg-white mx-8 my-4 py-8 border-2 shadow-xl flex items-center justify-center flex-col px-20">
            <img src="cart.webp" className="w-60 h-48 mx-auto" />
            <br />
            <h1 className="text-xl text-gray-700 font-sans">Missing Cart Items?</h1>
            <br />
            <h2 className="text-sm text-gray-600">Login to see the items you added previously</h2>
            <br />
            <Link to="/login"><button className="w-auto md:w-60 px-6 py-2 text-sm text-white bg-orange-600 hover:bg-orange-500 hover:text-white">Login</button></Link>
          </div>

          <div className="flex gap-16 px-12 py-8">
            <div>
              <p className="text-sm text-gray-700">Policies: Return Policy | Terms of use | Security | Privacy</p>
            </div>
            <div>
              <p className="text-sm text-gray-700">© 2025 ecommerce.com</p>
            </div>
            <div />
            <div />
            <div />
            <div />
            <div>
              <p className="text-sm text-gray-700">Need help? Visit the <span className="text-blue-500">Help Center</span> or <span className="text-blue-500">Contact Us</span></p>
            </div>
          </div>
        </div>
      )
        : (
          <div className="flex bg-gray-200 mx-auto px-12 justify-around">
            <div className="bg-yellow-100 flex gap-8 flex-wrap border-[1px] border-yellow-500 rounded-lg px-24 w-2/3 mt-4">
              {cartItems.map((item) => (
                <div key={item.id}>
                  <ProductCard item={item} />
                  <div className="flex justify-center items-center gap-8 ml-8">
                    <div>
                      <button onClick={() => removeFromCart(item.id)} className="h-6 w-16  mt-4 rounded-md bg-red-500 border-black-100 text-white text-xs hover:bg-red-400">Remove</button>
                    </div>
                    <div className="flex">
                      <div>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="rounded-md  mt-4 h-6 w-6 bg-green-400 text-center">+</button>
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

              ))}

            </div>

            <div className="mt-4 px-4 py-4 border-[1px] rounded-lg bg-white w-1/4 h-full ">
              <h1 className="font-semibold text-lg font-serif">Calculated Shipping</h1>
              <br />
              <input className="hover:bg-black hover:text-white w-full px-4 py-2 rounded-full border-[1px] bg-gray-100 text-xs"
                type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />

              <div className="flex gap-2">
                <input className="hover:bg-black hover:text-white text-xs mt-4 w-full px-4 py-2 rounded-full border-[1px] bg-gray-100"
                  type="text" placeholder="State/City" value={state} onChange={(e) => setState(e.target.value)} />
                <input className="hover:bg-black hover: text-white text-xs mt-4 w-full px-4 py-2 rounded-full border-[1px]"
                  type="text" placeholder="ZIP Code" value={zip} onChange={(e) => setZip(e.target.value)} />
              </div>

              <button className="hover:bg-white hover:text-black text-xs mt-4 w-full px-4 py-2 rounded-full border-[1px] text-white bg-[#1C1C1C] border-b-[1px] border-gray-500">Update</button>

              <hr className="border-b-[1px] border-gray-500 mt-4" />

              <h2 className="mt-2 font-semibold text-lg font-serif"><i>Coupon Code</i></h2>

              <p className="text-xs">Avail you coupon code quickly to  grab offers. It is available for items  above MRP 2000</p>

              <input className="text-xs mt-4 w-full px-4 py-2 rounded-full border-[1px]  bg-gray-100"
                type="text" placeholder="Coupon Code" value={zip} onChange={(e) => setZip(e.target.value)} />

              <button className="hover:bg-white hover:text-black text-xs mt-4 w-full px-4 py-2 rounded-full border-[1px] text-white bg-[#1C1C1C] border-b-[1px] border-gray-500">Apply</button>
              <div className="h-full w-full mt-4 bg-yellow-200 rounded-xl px-4 py-4">
                <h2 className="font-semibold text-md font-serif">Cart Total</h2>

                <div className="flex mt-2 gap-20 items-center justify-between text-sm ">
                  <p>Cart Subtotal</p>
                  <p>$ {totalPrice}</p>
                </div>

                <div className="flex mt-2 gap-24 items-center justify-between text-sm">
                  <p>Discount</p>
                  <p>Free</p>
                </div>

                <div className="flex mt-2 gap-24 items-center justify-between text-sm">
                  <p>Handling Fees</p>
                  <p>Free</p>
                </div>

                <div className="flex mt-2 gap-24 items-center justify-between text-sm">
                  <p>Cart Total</p>
                  <p>$ {totalPrice}</p>
                </div>
                <button className="hover:bg-yellow-500 hover:text-white text-xs mt-2 w-full px-4 py-2 bg-yellow-400 rounded-full border-[1px] border-b-[1px] border-gray-500">Apply</button>
              </div>
            </div>
          </div>

        )
      }

    </div >
  );
};
export default Cart;






