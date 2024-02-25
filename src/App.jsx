import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import "../src/main.css";
import "remixicon/fonts/remixicon.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Detail";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Questions from "./Pages/Questions";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setIsLoading(true);
    document.body.style.position = "fixed";
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.position = "static";
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [location]);

  return (
    <>
      <Header />
      {isLoading ? <Loader /> : ""}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
