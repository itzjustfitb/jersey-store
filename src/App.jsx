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
import WishList from "./Pages/WishList";
import Compare from "./Pages/Compare";
import ScrollTopBtn from "./Components/ScrollTopBtn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setToWishlistAction } from "./redux/actions/like.action";
import { useDispatch } from "react-redux";
import { setToComparelistAction } from "./redux/actions/compare.action";
import NotFound from "./Pages/NotFound";
import Products from "./Pages/Products";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const storedWishList = JSON.parse(localStorage.getItem("wishlist"));
  const storedCompareList = JSON.parse(localStorage.getItem("comparelist"));
  const location = useLocation();
  const dispatch = useDispatch();
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

  useEffect(() => {
    if (storedWishList) {
      dispatch(setToWishlistAction(storedWishList));
    }
    if (storedCompareList) {
      dispatch(setToComparelistAction(storedCompareList));
    }
  }, []);

  return (
    <>
      <Header />
      {isLoading ? <Loader /> : ""}
      <ToastContainer className="toast" autoClose={2000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <ScrollTopBtn />
      <Footer />
    </>
  );
}

export default App;
