import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import siteLogo from "../assets/images/jersey-store-logo.svg";
import NightModeBtn from "./NightModeBtn";

function BurgerMenu({ setIsOpen, openBurgerMenu, setOpenBurgerMenu }) {
  const [check, setCheck] = useState("");
  const navigations = [
    {
      url: "/",
      content: "ANA SƏHİFƏ",
      className: "ri-home-4-line",
    },
    {
      content: "AXTAR",
      className: "ri-search-2-line",
    },
    {
      url: "/cart",
      content: "SƏBƏTİM",
      className: "ri-shopping-cart-2-line",
    },
    {
      url: "/wishlist",
      content: "BƏYƏNDİKLƏRİM",
      className: "ri-heart-3-line",
    },
    {
      url: "/compare",
      content: "MÜQAYİSƏLƏR",
      className: "ri-loop-left-line",
    },
    {
      content: "GECƏ MODU",
      className: "ri-moon-line",
    },
  ];

  const cartList = useSelector((state) => state.cartList);
  const wishList = useSelector((state) => state.wishList);
  const compareList = useSelector((state) => state.compareList);

  return (
    <aside
      className={`burger__menu ${openBurgerMenu ? "active__burger-menu" : ""}`}
    >
      <div className="burger__menu-container">
        <div className="burger__menu-top">
          <h2>MENU</h2>
          <i
            onClick={() => {
              setOpenBurgerMenu(false);
              document.body.style.overflow = "initial";
            }}
            className="ri-close-line"
          ></i>
        </div>
        <div className="burger__menu-bottom">
          <ul>
            {navigations.map((navigate, index) => {
              return (
                <li
                  className={check === navigate.content ? "active" : ""}
                  onClick={(e) => {
                    setOpenBurgerMenu(false);
                    if (index === 5) {
                      setOpenBurgerMenu(true);
                    }
                    setCheck(e.target.textContent);
                  }}
                  key={index}
                >
                  {index === 1 ? (
                    <div
                      onClick={() => {
                        setIsOpen(true);
                        document.body.style.position = "static";
                      }}
                    >
                      <i className={navigate.className}></i>
                      <p>{navigate.content}</p>
                    </div>
                  ) : index === 5 ? (
                    <NightModeBtn />
                  ) : (
                    <Link
                      onClick={() => {
                        document.body.style.position = "static";
                      }}
                      to={navigate.url}
                    >
                      <i className={navigate.className}></i>
                      <p>{navigate.content}</p>
                      {index === 2 ? (
                        <span>{cartList.length}</span>
                      ) : index === 3 ? (
                        <span>{wishList.length}</span>
                      ) : index === 4 ? (
                        <span>{compareList.length}</span>
                      ) : (
                        ""
                      )}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="burger__menu-footer">
          <img src={siteLogo} alt="Site Logo" />
          <p> © 2024 JERSEYSTORE.AZ</p>
        </div>
      </div>
    </aside>
  );
}

export default BurgerMenu;
