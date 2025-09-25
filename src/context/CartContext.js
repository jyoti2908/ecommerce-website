import { createContext, useState } from "react"
const CartContext = createContext()

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);//setting cart items
  // _________________________________________________________
  function addToCart(item) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      } else {
        return [...prevItems, { ...item, quantity: 1 }]
      }
    })
  }
  // ____________________________________________________________
  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }
  //___________________________________________________________
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  //_____________________________________________________________
  const updateQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  // ____________________________________________________________
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalItems, updateQuantity,totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}
// ____________________________________________________________
export { CartContext, CartProvider }