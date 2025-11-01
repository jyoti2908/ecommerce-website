import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import WishList from "./pages/wishlist"
import Cart from "./pages/cart"
import Login from "./pages/login"
import SignUp from "./pages/signup"
import ProductList from './components/ProductList';
import { ProductProvider } from './context/ProductContext';
import Footer from './components/Footer';
import {CartProvider} from './context/CartContext'
import { WishListProvider } from './context/WishContext';
import Detailedpage from './pages/detailedpage';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <ProductProvider>
        <CartProvider>
          <WishListProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/detailedpage/:id" element={<Detailedpage />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
        </WishListProvider>
        </CartProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
