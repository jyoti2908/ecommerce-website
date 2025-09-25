import { createContext,useState } from "react"
const WishListContext = createContext()

function WishListProvider({children}){
    const [wishListItems, setWishListItems] = useState([]);
// ______________________________________________________________
    function addToWishList (item){ // It takes "item" as an argument, which is product or object you want to add in wishlist. 
        setWishListItems((prevItems)=>[...prevItems , item])// It creates a new array using spread operator, which spreads
    }                                              //  previous items and add new item.                                        
// ______________________________________________________________ 
    function removeFromWishList(id){ // It passes "id" as an argument, which is unique identifier of an element, we want to remove
       setWishListItems ((prevItems) => prevItems.filter((item) => item.id !== id ))
    }
// ______________________________________________________________
  return(
    <WishListContext.Provider value = {{wishListItems, addToWishList,removeFromWishList}}>
        {children}
    </WishListContext.Provider>
  )  
}

export { WishListContext, WishListProvider}