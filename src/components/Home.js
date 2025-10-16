import Details from "./Details";
import Display from "./Display";
import ProductList from "./ProductList";
import SlidingProducts from "./SlidingProducts";
function Home() {
    return (
        <div>
            <SlidingProducts />
            {/* Responsive Image Slider */}
            <div className="relative w-full h-40 sm:h-64 md:h-80 lg:h-[380px] overflow-hidden bg-gray-100">
                <img
                    className="absolute w-full h-full object-cover group-hover:animate-none animate-staticShow"
                    src="one.jpg"
                    style={{ animationDelay: '0s' }}
                    alt="Slide 1"
                />
                <img
                    className="absolute w-full h-full object-cover group-hover:animate-none animate-slideRight"
                    src="two.jpg"
                    style={{ animationDelay: '4s' }}
                    alt="Slide 2"
                />
                <img
                    className="absolute w-full h-full object-cover group-hover:animate-none animate-slideRight"
                    src="three.jpg"
                    style={{ animationDelay: '8s' }}
                    alt="Slide 3"
                />
                <img
                    className="absolute w-full h-full object-cover group-hover:animate-none animate-slideRight"
                    src="four.jpg"
                    style={{ animationDelay: '12s' }}
                    alt="Slide 4"
                />
            </div>
            <ProductList />
            <Display />
            <Details />
        </div>
    );
}
export default Home;

