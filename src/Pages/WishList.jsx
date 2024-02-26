import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromWishListAction } from "../redux/actions/like.action";

function WishList() {
  const wishList = useSelector((state) => state.wishList);
  console.log(wishList);

  function removeItem(e, element) {
    console.log(element);
    e.preventDefault();
    dispatch(removeFromWishListAction(element));
  }
  let dispatch = useDispatch();
  return (
    <main className="wishlist">
      <div className="wishlist__container">
        {wishList.length ? (
          <div className="wishlist__fill">
            <div className="wishlist__header">
              <h1>BƏYƏNDİKLƏRİNİZİN SİYAHISI</h1>
            </div>
            <div className="wishlist__bottom">
              {wishList.length
                ? wishList.map((item) => {
                    return (
                      <div key={item.id} className="product">
                        <button
                          onClick={(e) => removeItem(e, item)}
                          className="delete-btn"
                        >
                          <div className="svg-wrapper">
                            <i className="ri-delete-bin-line"></i>
                          </div>
                          <span>Sil</span>
                        </button>

                        <Link
                          to={`/product/${item.id}`}
                          className="product__content"
                        >
                          <img
                            src={item.thumbnail}
                            alt={`${item.title} image`}
                          />
                          <div className="product__desc">
                            <h3>
                              {item.title} – <span>(komandalar üçün)</span>
                            </h3>
                            <p>
                              {item.price}
                              <span> AZN</span>
                            </p>
                          </div>
                        </Link>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        ) : (
          <div className="wishlist__empty">
            <i className="ri-heart-line"></i>
            <p>YENİ MƏHSUL BƏYƏNİN.</p>
            <Link to="/">MAĞAZAYA QAYIT</Link>
          </div>
        )}
      </div>
    </main>
  );
}

export default WishList;
