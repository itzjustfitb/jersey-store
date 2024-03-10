import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCartAction } from "../redux/actions/cart.action";
import { Link } from "react-router-dom";

function CartSidebar({ activate, setActivate, totalPrice }) {
  const cartList = useSelector((state) => state.cartList);
  const dispatch = useDispatch();
  return (
    <aside className={`cart__sidebar ${activate ? "show" : ""}`}>
      <div className="cart__top">
        <h2>SƏBƏTİNİZ</h2>
        <div onClick={() => setActivate(false)} className="cart__close">
          <p>BAĞLA</p>
          <i className="ri-close-line"></i>
        </div>
      </div>
      <div className="cart__bottom">
        {cartList.length ? (
          <div className="cart__fill">
            <div className="cart__rows">
              {cartList?.map((item) => {
                return (
                  <div key={item.id} className="cart__row">
                    <div className="cart__row-container">
                      <Link to={`/product/${item.id}`}>
                        <img src={item.thumbnail} alt={item.title} />
                      </Link>
                      <div className="cart__product-description">
                        <h1>{item.title}</h1>
                        <p>
                          <span className="count">{item.quantity}</span>{" "}
                          <span>x</span>{" "}
                          <span className="product__price">{item.price}</span>{" "}
                          <span>AZN</span>
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          dispatch(removeFromCartAction(item));
                          const filteredCartList = cartList.filter(
                            (cartItem) => cartItem.id !== item.id
                          );
                          localStorage.setItem(
                            "cartlist",
                            JSON.stringify(filteredCartList)
                          );
                        }}
                        className="cart__remove"
                      >
                        <i className="ri-close-line"></i>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="cart__total">
              <div className="cart__total-top">
                <p>CƏMİ MƏBLƏĞ:</p>
                <p>
                  {totalPrice}.00 <span> AZN</span>
                </p>
              </div>
              <Link className="cart__total-bottom" to="cart">
                SƏBƏTƏ BAX
              </Link>
            </div>
          </div>
        ) : (
          <div className="cart__empty">
            <i className="ri-shopping-cart-fill"></i>
            <p>Səbət boşdur</p>
          </div>
        )}
      </div>
    </aside>
  );
}

export default CartSidebar;
