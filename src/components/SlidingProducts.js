function SlidingProducts() {
    return (
        <div>
            <div className="flex m-4 px-8 py-2 mt-12 rounded h-32 w-[1230px] gap-16 bg-gray-100">
                <div>
                    <img className="h-16 w-24 transition-transform duration-300 hover:scale-75" src="1.webp" />
                    <p className="text-sm font-semibold">Minutes</p>
                </div>
                <div>
                    <img className="h-16 w-20 transition-transform duration-300 hover:scale-75" src="2.webp" />
                    <p className="text-sm font-semibold"> Mobiles & Tablets</p>
                </div>
                <div>
                    <img className="h-16 w-20 transition-transform duration-300 hover:scale-75" src="3.webp" />
                    <p className="text-sm font-semibold">TVs & Appliances</p>
                </div>
                <div>
                    <img className="h-16 w-20 transition-transform duration-300 hover:scale-75" src="4.webp" />
                    <p className="text-sm font-semibold">Electronics</p>
                </div>
                <div>
                    <img className="h-16 w-24 transition-transform duration-300 hover:scale-75" src="5.webp" />
                    <p className="text-sm font-semibold">Fashion</p>
                </div>

                <div>
                    <img className="h-16 w-20 transition-transform duration-300 hover:scale-75" src="6.webp" />
                    <p className="text-sm font-semibold">Home & Kitchen</p>
                </div>
                <div>
                    <img className="h-16 w-24 transition-transform duration-300 hover:scale-75" src="7.webp" />
                    <p className="text-sm font-semibold">Beauty & Toys</p>
                </div>
                <div>
                    <img className="h-16 w-20 transition-transform duration-300 hover:scale-75" src="8.webp" />
                    <p className="text-sm font-semibold">Furniture</p>
                </div>
                <div>
                    <img className="h-16 w-20 transition-transform duration-300 hover:scale-75" src="9.webp" />
                    <p className="text-sm font-semibold">Flight Bookings</p>
                </div>
                <div>
                    <img className="h-16 w-24 transition-transform duration-300 hover:scale-75" src="10.webp" />
                    <p className="text-sm font-semibold">Grocery</p>
                </div>

            </div>
        </div>
    )
}
export default SlidingProducts;