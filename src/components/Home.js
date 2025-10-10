import ProductList from "./ProductList";
import SlidingProducts from "./SlidingProducts";

function Home() {
    return (
        <div>
            <div className="relative w-full h-[400px] overflow-hidden bg-gray-100 group">
                <img className="absolute w-full h-[400px] mt-8 object-cover group-hover:animate-none animate-staticShow"
                    src="one.jpg"
                    style={{ animationDelay: '0s' }} />
                <img className="absolute w-full h-[400px] mt-8 object-cover group-hover:animate-none animate-slideRight"
                    src="two.jpg"
                    style={{ animationDelay: '4s' }} />
                <img className="absolute w-full h-[400px] mt-8 object-cover group-hover:animate-none animate-slideRight"
                    src="three.jpg"
                    style={{ animationDelay: '8s' }} />
                <img className="absolute w-full h-[400px] mt-8 object-cover group-hover:animate-none animate-slideRight"
                    src="four.jpg"
                    style={{ animationDelay: '12s' }} />
            </div>
            <ProductList />
            <SlidingProducts/>
        </div>
    )
}
export default Home;