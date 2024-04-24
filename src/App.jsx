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
import QuickView from "./Components/QuickView";
import { setToCartAction } from "./redux/actions/cart.action";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cartListIsActive, setCartListIsActive] = useState(false);

  const storedWishList = JSON.parse(localStorage.getItem("wishlist"));
  const storedCompareList = JSON.parse(localStorage.getItem("comparelist"));
  const storedCartList = JSON.parse(localStorage.getItem("cartlist"));
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "initial";
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
    if (storedCartList) {
      dispatch(setToCartAction(storedCartList));
    }

    Aos.init({
      offset: 200,
    });
  }, []);

  return (
    <>
      <Header
        setCartListIsActive={setCartListIsActive}
        cartListIsActive={cartListIsActive}
      />
      {isLoading ? <Loader /> : ""}
      <ToastContainer
        className="toast"
        position="bottom-right"
        draggable
        newestOnTop
        autoClose={2000}
      />
      <Routes>
        <Route
          path="/"
          element={<Home setCartListIsActive={setCartListIsActive} />}
        />
        <Route
          path="/products/:id"
          element={<Product setCartListIsActive={setCartListIsActive} />}
        />
        <Route
          path="/about"
          element={<About setCartListIsActive={setCartListIsActive} />}
        />
        <Route
          path="/contact-us"
          element={<Contact setCartListIsActive={setCartListIsActive} />}
        />
        <Route
          path="/cart"
          element={<Cart setCartListIsActive={setCartListIsActive} />}
        />
        <Route
          path="/wishlist"
          element={<WishList setCartListIsActive={setCartListIsActive} />}
        />
        <Route
          path="/compare"
          element={<Compare setCartListIsActive={setCartListIsActive} />}
        />
        <Route
          path="*"
          element={<NotFound setCartListIsActive={setCartListIsActive} />}
        />
        <Route
          path="/products"
          element={<Products setCartListIsActive={setCartListIsActive} />}
        />
      </Routes>
      <QuickView />
      <ScrollTopBtn />
      <Footer />
    </>
  );
}

export default App;
