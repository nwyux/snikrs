import './App.css';
import "./scss/style.scss";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Notfound from './components/Notfound';
import Productpage from './components/Productpage';
import ProductItem from './components/ProductItem';

function App() {
  return (
    <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Notfound />} />
      <Route path="/about" element={<About />} />
      <Route path="/sneakers" element={<ProductItem />} />
      <Route path="/sneakers/:id" element={<Productpage/>} />
      
    </Routes>

    <Footer />
    </>
  );
}

export default App;
