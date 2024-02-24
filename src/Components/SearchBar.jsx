import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToCartAction } from "../redux/actions/cart.action";
import { useDispatch } from "react-redux";
import { fetchJerseysFromFirestoreOrAPI } from "../jerseyService";

function SearchBar({ isOpen, setIsOpen }) {
  const [searchList, setSearchList] = useState([]);
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const searchingResult = (e) => {
    const searchResults = products.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSearchList(searchResults);
  };

  const addToCart = (e) => {
    e.preventDefault();
    dispatch(addToCartAction(item));
  };

  useEffect(() => {
    fetchJerseysFromFirestoreOrAPI().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <div className={`searchbar ${isOpen ? "searchbar__show" : ""}`}>
      <div className="searchbar__container">
        <div className="searchbar__header">
          <input
            onChange={searchingResult}
            type="text"
            placeholder="Məhsulları axtarın"
          />
          <i onClick={() => setIsOpen(false)} className="ri-close-line"></i>
        </div>
        <div className="searchbar__bottom">
          {searchList.length ? (
            <div className="searchbar__cards">
              {searchList.map((item) => {
                console.log(item);
                return (
                  <Link
                    key={item.id}
                    to={`/product/${item.id}`}
                    className="searchbar__card"
                    onClick={() => setIsOpen(false)}
                  >
                    <img src={item.thumbnail} alt={`${item.title} image`} />
                    <div className="quick__shop-btns">
                      <div className="base__btns">
                        <div className="base__btns-icon">
                          <i className="ri-heart-3-line"></i>
                          <div className="tooltip">Bəyən</div>
                        </div>
                        <div className="base__btns-icon">
                          <i className="ri-zoom-in-line"></i>
                          <div className="tooltip">Bax</div>
                        </div>
                      </div>
                      <button onClick={addToCart} className="quick__add-btn">
                        <i className="ri-shopping-cart-line"></i>
                        <p>SƏBƏTƏ AT</p>
                      </button>
                    </div>
                    <div className="product__desc">
                      <h3>
                        {item.title} – <span>{item.id}</span>{" "}
                        <span>(komandalar üçün)</span>
                      </h3>
                      <p>
                        {item.price}
                        <span> AZN</span>
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="searchbar__empty">Məhsul tapılmadı</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
