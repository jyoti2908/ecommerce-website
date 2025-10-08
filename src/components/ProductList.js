import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import ProductCard from "./ProductCard";

function ProductList() {
    const {filteredProduct } = useContext(ProductContext);// We will use "filteredProduct" from ProductContext here.
    const [index, setIndex] = useState(0) // For items per page.
    const itemsPerPage = 3 // For items per page.

    const handleLeftButton = () => {  
        setIndex(prev => prev - 1);
    }
    const handleRightButton = () => {
        setIndex(prev => prev + 1);
    }

    return (
        <div className="flex flex-wrap">
            <button onClick={handleLeftButton} disabled={index === 0} 
            className="lg:h-14 lg:w-14 bg-red-400 rounded-full lg:mt-64 lg:ml-24 hover:bg-gray-400 sm:h-6 sm:w-6 sm:mt-56 sm:ml-3" >
                <span className="left"><FaArrowLeft /></span>
            </button>
            {filteredProduct.slice(index, index + itemsPerPage).map((item) => (
                <ProductCard key={item.id} item={item} /> // we are passing entire item as a prop to child component(ProductCard.js)
            ))}
            <button onClick={handleRightButton} disabled={index === filteredProduct.length - 3} className="h-14 w-14 bg-red-400 mt-40 rounded-full mt-64 ml-6 hover:bg-gray-400" >
                <span className="right"><FaArrowRight /></span>
            </button>
        </div>
    ) 
}
export default ProductList;