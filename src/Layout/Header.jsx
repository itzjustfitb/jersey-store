import { Link } from "react-router-dom";
import siteLogo from "../assets/images/jersey-store-logo.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartSidebar from "../Components/CartSidebar";
import SearchBar from "../Components/SearchBar";
import BurgerMenu from "../Components/BurgerMenu";
import NightModeBtn from "../Components/NightModeBtn";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartListIsActive, setCartListIsActive] = useState(false);
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const [nightModeActive, setNightModeActive] = useState(false);
  const cartList = useSelector((state) => state.cartList);
  const totalPrice = cartList.reduce((total, product) => {
    return total + product.quantity * product.price;
  }, 0);
  const wishList = useSelector((state) => state.wishList);

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
              <div className={`header__nav-icon search`}>
                <i
                  onClick={() => {
                    setIsOpen(!isOpen);
                    document.body.style.position = "fixed";
                  }}
                  className="ri-search-eye-line"
                ></i>
              </div>
              <NightModeBtn
                nightModeActive={nightModeActive}
                setNightModeActive={setNightModeActive}
              />
              <Link to="/wishlist" className="header__nav-icon bottom__bar">
                <i
                  onClick={() => setIsOpen(false)}
                  className="ri-heart-3-line"
                ></i>
                <span className="count">{wishList.length}</span>
              </Link>
              <div
                onClick={() => {
                  setCartListIsActive(!cartListIsActive);
                  setIsOpen(false);
                }}
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
            </div>
            <div className="header__burger">
              <i
                onClick={() => {
                  setOpenBurgerMenu(true);
                  document.body.style.position = "fixed";
                }}
                className="ri-menu-5-line"
              ></i>
            </div>
          </div>
        </div>
      </div>
      <CartSidebar
        setActivate={setCartListIsActive}
        activate={cartListIsActive}
        totalPrice={totalPrice}
      />
      <BurgerMenu
        setIsOpen={setIsOpen}
        setOpenBurgerMenu={setOpenBurgerMenu}
        openBurgerMenu={openBurgerMenu}
        setNightModeActive={setNightModeActive}
        nightModeActive={nightModeActive}
      />
      <SearchBar setIsOpen={setIsOpen} isOpen={isOpen} />
    </header>
  );
}

export default Header;
