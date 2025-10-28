import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

function Detailedpage() {
    const { products } = useContext(ProductContext)
    const { id } = useParams();
    // Find product by id
    const product = products.find((item) => item.id === parseInt(id));
    if (!product) return <p>Loading product details...</p>;
    return (
        <div className='flex md:flex-row flex-col md:ml-6'>
            <div className="md:w-[400px] md:h-[400px] border-2 border-gray-200 mt-8 shadow-xl shadow-gray-300 md:ml-16 md:p-4 md:mb-16 p-6">
                <img className="md:mt-8 md:ml-8" src={product.thumbnail} />
            </div>
            <div className="md:w-[700px] border-2 border-gray-300 md:mt-8 mt-6 md:p-3 p-6 shadow-xl md:mb-16">
                <h1 className="text-center text-xl font-bold md:mt-8 mt-2 bg-red-200 justify-center">Title: {product.title}</h1><br/>
                <h3 className="text-justify"><span className="font-bold bg-red-300">Description:</span> {product.description}</h3><br/>
                <h3><span className="font-bold bg-red-300">Category:</span> {product.category}</h3>
                <h3><span className="font-bold bg-red-300">Price: $ </span>{product.price}</h3>
                <h3><span className="font-bold bg-red-300">Rating:</span>{product.rating}</h3>
                <h3><span className="font-bold bg-red-300">Return Policy:</span>{product.returnPolicy}</h3>
                <h3><span className="font-bold bg-red-300">MinimumOrderQuantity:</span>{product.minimumOrderQuantity}</h3>
                <h3><span className="font-bold bg-red-300">Shipping Information:</span>{product.shippingInformation}</h3>
                <h3><span className="font-bold bg-red-300">Stock:</span>{product.stock}</h3>
                 <h3><span className="font-bold bg-red-300">Warranty Information:</span>{product.warrantyInformation}</h3>
            </div>
        </div>
    )
}
export default Detailedpage;