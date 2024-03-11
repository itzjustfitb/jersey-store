import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import emptyCart from "../assets/images/empty-cart.svg";
import { Link } from "react-router-dom";
import Pagination from "../Components/Pagination";

import {
  emptyTheCartAction,
  removeFromCartAction,
} from "../redux/actions/cart.action";
import { toast } from "react-toastify";
function Cart() {
  const cartList = useSelector((state) => state.cartList);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = cartList.slice(firstPostIndex, lastPostIndex);

  const totalPrice = cartList.reduce((total, product) => {
    return total + product.quantity * product.price;
  }, 0);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPosts]);
  return (
    <main id="cart">
      <div className="cart__container">
        <div className="cart__left">
          {currentPosts?.length ? (
            <div className="cart__fill">
              <div className="cart__top">
                <p>MƏHSUL</p>
                <p>QİYMƏT</p>
                <p>ƏDƏD</p>
                <p>CƏMİ MƏBLƏĞ</p>
              </div>
              <div className="cart__bottom">
                {currentPosts.map((product) => {
                  return (
                    <div key={product.id} className="cart__row">
                      <div className="cart__row-product-title">
                        <div>
                          <button
                            onClick={() => {
                              dispatch(removeFromCartAction(product));
                              const filteredCartList = cartList.filter(
                                (item) => item.id !== product.id
                              );
                              localStorage.setItem(
                                "cartlist",
                                JSON.stringify(filteredCartList)
                              );
                              toast.warning("Məhsul səbətdən silindi");
                            }}
                          >
                            <i className="ri-delete-bin-line"></i>
                          </button>
                          <div className="cart__row-image">
                            <p className="cart__row-mobile-view">Şəkil</p>
                            <Link to={`/products/${product.id}`}>
                              <img
                                src={product.thumbnail}
                                alt={product.title}
                              />
                            </Link>
                          </div>
                          <span>
                            <p className="cart__row-mobile-view">Məhsul Adı</p>
                            <Link to={`/products/${product.id}`}>
                              {product.title}
                            </Link>
                            <p>Təxmini Çatdırılma: 17 - 18 March, 2024</p>
                          </span>
                        </div>
                      </div>
                      <div className="cart__row-product-price">
                        <p className="cart__row-mobile-view">Qiymət</p>
                        <p>
                          {product.price} <span>AZN</span>
                        </p>
                      </div>
                      <div className="cart__row-product-quantity">
                        <p className="cart__row-mobile-view">Ədəd</p>
                        <p>{product.quantity}</p>
                      </div>
                      <div className="cart__row-product-total-price">
                        <p className="cart__row-mobile-view">Cəmi Məbləğ</p>
                        <p>
                          {product.price * product.quantity} <span>AZN</span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Pagination
                totalPosts={cartList.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
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
          <button
            onClick={() => {
              dispatch(emptyTheCartAction(cartList));
              localStorage.setItem("cartlist", JSON.stringify([]));
              toast.warning("Səbətiniz artıq boşdur");
            }}
          >
            <i className="fa-solid fa-trash"></i>
            <Link to="#">Səbəti boşalt</Link>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Cart;
