import React from "react";
import { useDispatch, useSelector } from "react-redux";
import emptyCart from "../assets/images/empty-cart.svg";
import { Link } from "react-router-dom";
import {
  emptyTheCartAction,
  removeFromCartAction,
} from "../redux/actions/cart.action";
function Cart() {
  const { cartList } = useSelector((state) => state);
  const dispatch = useDispatch();

  const totalPrice = cartList.reduce((total, product) => {
    return total + product.quantity * product.price;
  }, 0);
  return (
    <main id="cart">
      <div className="cart__container">
        <div className="cart__left">
          {cartList.length ? (
            <div className="cart__fill">
              <div className="cart__top">
                <p>Şəkil</p>
                <p>Adı</p>
                <p>Ədəd</p>
                <p>Qiymət</p>
                <p>Cəm</p>
                <p>Sil</p>
              </div>
              <div className="cart__bottom">
                {cartList.map((product) => {
                  return (
                    <div key={product.id} className="cart__row">
                      <Link to={`/product/${product.id}`}>
                        <img src={product.thumbnail} alt="" />
                      </Link>
                      <p>{product.title}</p>
                      <p>{product.quantity}</p>
                      <p>
                        {product.price} <span>AZN</span>
                      </p>
                      <p>
                        {product.price * product.quantity} <span>AZN</span>
                      </p>
                      <div>
                        <button
                          onClick={() =>
                            dispatch(removeFromCartAction(product))
                          }
                        >
                          <i className="ri-delete-bin-line"></i>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="cart__default">
              <img src={emptyCart} alt="Empty Cart" />
              <p>Səbətiniz boşdur</p>
              <p>Bizi seçdiyiniz üçün təşəkkür edirik ! 😊</p>
              <Link to="/">
                <i className="fa-solid fa-circle-left"></i>
                <p>Alışverişə davam et</p>
              </Link>
            </div>
          )}
        </div>
        <div className="cart__right">
          <div className="cart__price-container">
            <div>
              <span>Cəmi:</span>
              <p>
                {totalPrice}.00<span> AZN</span>
              </p>
            </div>
            <div>
              <span>Kupon Endirimi:</span>
              <p>
                0.00 <span>AZN</span>
              </p>
            </div>
            <div>
              <span>Toplam:</span>
              <p>
                {totalPrice}.00 <span> AZN</span>
              </p>
            </div>
          </div>
          <button>
            <i className="fa-solid fa-circle-check"></i>
            <Link to="#">Sifarişi tamamla</Link>
          </button>
          <button>
            <i className="fa-solid fa-circle-left"></i>
            <Link to="/">Alışverişə davam et</Link>
          </button>
          <button onClick={() => dispatch(emptyTheCartAction(cartList))}>
            <i className="fa-solid fa-trash"></i>
            <Link to="#">Səbəti boşalt</Link>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Cart;
