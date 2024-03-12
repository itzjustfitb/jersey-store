import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import siteLogo from "../assets/images/jersey-store-logo.png";
import NightModeBtn from "./NightModeBtn";

function BurgerMenu({
  openBurgerMenu,
  setOpenBurgerMenu,
  nightModeActive,
  setNightModeActive,
}) {
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

  // let activeMenu;
  // useEffect(() => {
  //   if (localStorage) {
  //     activeMenu = localStorage.getItem("active-menu");
  //   }
  // });

  // function activeMenuRow(e, params) {
  //   localStorage.setItem("active-menu", params);
  // }

  // function inactiveMenuRow(params) {
  //   localStorage.setItem("active-menu", params);
  // }

  // if (activeMenu) {
  //   activeMenuRow();
  // }

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
              document.body.style.position = "static";
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
                    setCheck(e.target.textContent);
                    // activeMenu = localStorage.getItem("active-menu");
                    // if (!activeMenu) {
                    //   activeMenuRow(navigate.content);
                    // } else {
                    //   inactiveMenuRow(navigate.content);
                    // }
                  }}
                  key={index}
                >
                  {index === 1 ? (
                    <div>
                      <i className={navigate.className}></i>
                      <p>{navigate.content}</p>
                    </div>
                  ) : index === 5 ? (
                    <NightModeBtn
                      nightModeActive={nightModeActive}
                      setNightModeActive={setNightModeActive}
                    />
                  ) : (
                    <Link to={navigate.url}>
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
