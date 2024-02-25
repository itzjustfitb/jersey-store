import { Link } from "react-router-dom";
import siteLogo from "../assets/images/jersey-store-logo.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import CartSidebar from "../Components/CartSidebar";
import SearchBar from "../Components/SearchBar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartListIsActive, setCartListIsActive] = useState(false);
  const { cartList } = useSelector((state) => state);
  const totalPrice = cartList.reduce((total, product) => {
    return total + product.quantity * product.price;
  }, 0);

  const [scrollInt, setScrollInt] = useState(0);
  window.addEventListener("scroll", () => {
    setScrollInt(scrollY);
  });

  return (
    <header className={scrollInt >= 50 ? "shadow__header" : ""}>
      <div className="header__container">
        <div className="header__top">
          <div className="header__top-container">
            <div className="header__contact">
              <p>
                Bizimlə əlaqə: <span> +994 50 987 65 43</span>
              </p>
            </div>
            <Link to="/" className="header__image">
              <img src={siteLogo} alt="Site Logo" />
            </Link>
            <div className="header__nav ">
              <Link to="/" className="bottom__bar home__icon">
                <i className="ri-home-3-line"></i>
              </Link>
              <div className={`header__nav-icon search bottom__bar`}>
                <i
                  onClick={() => setIsOpen(!isOpen)}
                  className="ri-search-eye-line"
                ></i>
              </div>
              <Link to="/wishlist" className="header__nav-icon bottom__bar">
                <i className="ri-heart-3-line"></i>
                <span className="count">0</span>
              </Link>
              <div
                onClick={() => setCartListIsActive(!cartListIsActive)}
                className="shopping__bag"
              >
                <div className="header__nav-icon bottom__bar">
                  <span className="count">{cartList.length}</span>
                  <i className="ri-shopping-bag-line"></i>
                </div>
                <p className="total">
                  {totalPrice}.00
                  <span> AZN</span>
                </p>
              </div>
              <Link className="bottom__bar dark-light__mode">
                <i className="ri-moon-line"></i>
              </Link>
            </div>
            <div className="header__burger">
              <i className="ri-menu-5-line"></i>
            </div>
          </div>
        </div>
        <div className="header__bottom">
          <nav className="header__bottom-container">
            <Link to="">ÖZƏL DİZAYN FORMALAR</Link>
            <Link to="">KOMANDA ÜÇÜN</Link>
            <div>
              <p>GÜNLÜK GEYİM</p>
              <i className="ri-arrow-down-s-line"></i>
              <div className="dropdown">
                <Link to="">
                  <p>T-SHIRT</p>
                </Link>
                <Link to="">
                  <p>SWEATSHIRT</p>
                </Link>
                <Link to="">
                  <p>HOODIE</p>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <CartSidebar
        setActivate={setCartListIsActive}
        activate={cartListIsActive}
        totalPrice={totalPrice}
      />
      <SearchBar setIsOpen={setIsOpen} isOpen={isOpen} />
    </header>
  );
}

export default Header;
