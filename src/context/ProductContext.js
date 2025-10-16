import { createContext, useState, useEffect } from "react";
const ProductContext = createContext();
//____________________________________________________________
function ProductProvider({ children }) {//all the child componenets will reveive the data
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState("All");
    //state for search
    //____________________________________________________________
    async function getData() {
        try {
            const response = await fetch("https://dummyjson.com/products")
            const data = await response.json();
            console.log("Display Data:", data)
            setProducts(data.products);
        } catch (error) {
            console.log("Fetched Error:", error)
        }
    }
    useEffect(() => {
        getData();
    }, [])
    //____________________________________________________________
    const filteredProduct = products.filter((product) => {  // filter is applied on all the products, which will give new array
        const filteredItem = product?.title?.toLowerCase().includes(search.toLowerCase());// convert all products or product's title to lower case
        const searchCategory = category === "All" || product.category === category;  // and search will also convert into lower case and match it.
        return filteredItem && searchCategory;
    }
    )
    //____________________________________________________________
    return (
        <ProductContext.Provider value={{ products, filteredProduct, search, setSearch, category, setCategory }}>
            {children}
        </ProductContext.Provider>
    )
}
export { ProductContext, ProductProvider };