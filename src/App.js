import './App.css';
import "./scss/style.scss";
import {Routes, Route} from "react-router-dom";
import { useEffect, useState } from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Notfound from './components/Notfound';
import Productpage, {CartContext} from './components/Productpage';
import Sneakers from './pages/Sneakers';
import Promotions from './pages/Promotions';
import Trending from './pages/Trending';
import Cart from './pages/Cart';

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    setCartItem([...cartItem, item]);
  }

  useEffect(() => {
    const json = localStorage.getItem("cartItem");
    const savedCart = JSON.parse(json);
    if (savedCart) {
      setCartItem(savedCart);
    }

    const link = document.querySelectorAll("a");
  
    link.forEach((item) => {
      item.addEventListener("click", function () {
        window.scrollTo(0, 0);
      });
    });
  }, []);
  
  useEffect(() => {
    const json = JSON.stringify(cartItem);
    localStorage.setItem("cartItem", json);
  }, [cartItem]);

  return (
    <>
    <CartContext.Provider value={{cartItem, setCartItem, addToCart}}>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Notfound />} />
      <Route path="/about" element={<About />} />
      <Route path="/sneakers" element={<Sneakers />} />
      <Route path="/sneakers/:id" element={<Productpage/>} />
      <Route path="/promotions" element={<Promotions />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/cart" element={<Cart />} />

    </Routes>

    <Footer />
    </CartContext.Provider>
    </>
  );
}

export default App;
