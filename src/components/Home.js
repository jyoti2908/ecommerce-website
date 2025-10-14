import Details from "./Details";
import Display from "./Display";
import ProductList from "./ProductList";
import SlidingProducts from "./SlidingProducts";

function Home() {
    return (
        <div>
            <SlidingProducts />
            <div className="relative w-full h-[380px] overflow-hidden bg-gray-100">
                <img className="absolute w-full h-[400px] object-cover group-hover:animate-none animate-staticShow"
                    src="four.jpg"
                    style={{ animationDelay: '0s' }} />
                <img className="absolute w-full h-[400px] object-cover group-hover:animate-none animate-slideRight"
                    src="two.jpg"
                    style={{ animationDelay: '4s' }} />
                <img className="absolute w-full h-[400px] object-cover group-hover:animate-none animate-slideRight"
                    src="three.jpg"
                    style={{ animationDelay: '8s' }} />
                <img className="absolute w-full h-[400px] object-cover group-hover:animate-none animate-slideRight"
                    src="one.jpg"
                    style={{ animationDelay: '12s' }} />
            </div>
            <ProductList />
            <Display />
            <Details/>
        </div>
    )
}
export default Home;