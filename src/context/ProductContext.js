import { createContext, useState, useEffect } from "react";
const ProductContext = createContext();
//____________________________________________________________
function ProductProvider({ children }) {//all the child componenets will reveive the data
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [category,setCategory]=useState("All");
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
    const filteredProduct = products.filter((product) => {
// filter is applied on all the products, which will give new array
      const filterdItem =  product?.title?.toLowerCase().includes(search.toLowerCase());
      const searchCategory = category === "All" || product.category === category;

      return filterdItem && searchCategory;
    } // convert all products or product's title to lower case
    )                                     // and search will also convert into lower case and match it.
    //  _________________________________________________________
    // function matchSearch(product) {
    //     return product?.title?.toLowerCase().includes(search.toLowerCase())
    // }
    // const filteredProduct = matchSearch()
    //____________________________________________________________
    return (
        <ProductContext.Provider value={{ products, filteredProduct, search, setSearch ,category,setCategory}}> //from here we will pass all the data//
            {children}
        </ProductContext.Provider>
    )
}
export { ProductContext, ProductProvider };