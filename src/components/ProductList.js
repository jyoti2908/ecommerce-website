import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import ProductCard from "./ProductCard";
import '../App.css';

function ProductList() {
    const { filteredProduct } = useContext(ProductContext);// We will use "filteredProduct" from ProductContext here.
    const [index, setIndex] = useState(0) // For items per page.
    const itemsPerPage = 3 // For items per page.

    const handleLeftButton = () => {
        setIndex(prev => prev - 1);
    }
    const handleRightButton = () => {
        setIndex(prev => prev + 1);
    }
    return (
        <div className=" holder flex flex-wrap">
            <button onClick={handleLeftButton} disabled={index === 0}
                className="leftButton h-14 w-14 bg-red-400 mt-36 rounded-full ml-6 hover:bg-gray-400" >
                <span className="left"><FaArrowLeft /></span>
            </button>
            {filteredProduct.slice(index, index + itemsPerPage).map((item) => (
                <ProductCard key={item.id} item={item} /> // we are passing entire item as a prop to child component(ProductCard.js)
            ))}
            <button onClick={handleRightButton} disabled={index === filteredProduct.length - 3} className=" rightButton h-14 w-14 bg-red-400 mt-40 rounded-full mt-36 ml-12 hover:bg-gray-400" >
                <span className="right"><FaArrowRight /></span>
            </button>
        </div>
    )
}
export default ProductList;