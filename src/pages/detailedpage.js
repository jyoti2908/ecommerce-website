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
        <div className='flex'>
            <div className=" w-[400px] h-[400px] border-2 border-gray-200 mt-20 shadow-xl shadow-gray-300 ml-16 p-4">
                <img className="mt-8 ml-8" src={product.thumbnail} />
            </div>
            <div className="w-[700px] border-2 border-gray-300 mt-20 p-3 shadow-xl ">
                <h1 className="text-center text-xl font-bold mt-8 bg-red-200 justify-center">Title: {product.title}</h1><br/>
                <h3><span className="font-bold just bg-red-300">Description:</span> {product.description}</h3><br/>
                <h3><span className="font-bold just bg-red-300">Category:</span> {product.category}</h3>
                <h3><span className="font-bold just bg-red-300">Price: $ </span>{product.price}</h3>
                <h3><span className="font-bold just bg-red-300">Rating:</span>{product.rating}</h3>
                <h3><span className="font-bold just bg-red-300">Return Policy:</span>{product.returnPolicy}</h3>
                <h3><span className="font-bold just bg-red-300">MinimumOrderQuantity:</span>{product.minimumOrderQuantity}</h3>
                <h3><span className="font-bold just bg-red-300">Shipping Information:</span>{product.shippingInformation}</h3>
                <h3><span className="font-bold just bg-red-300">Stock:</span>{product.stock}</h3>
                 <h3><span className="font-bold just bg-red-300">Warranty Information:</span>{product.warrantyInformation}</h3>
            </div>
        </div>
    )
}
export default Detailedpage;