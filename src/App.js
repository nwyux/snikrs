import './App.css';
import "./scss/style.scss";
import {Routes, Route} from "react-router-dom";
import { useEffect } from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Notfound from './components/Notfound';
import Productpage from './components/Productpage';
import Sneakers from './pages/Sneakers';
import Promotions from './pages/Promotions';
import Trending from './pages/Trending';

function App() {

  useEffect(() => {
    const link = document.querySelectorAll("a");

    link.forEach((item) => {
      item.addEventListener("click", function () {
        window.scrollTo(0, 0);
      });
    });
  });

  return (
    <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Notfound />} />
      <Route path="/about" element={<About />} />
      <Route path="/sneakers" element={<Sneakers />} />
      <Route path="/sneakers/:id" element={<Productpage/>} />
      <Route path="/promotions" element={<Promotions />} />
      <Route path="/trending" element={<Trending />} />
      
    </Routes>

    <Footer />
    </>
  );
}

export default App;
