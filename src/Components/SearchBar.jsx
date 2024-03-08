import React, { useEffect, useState } from "react";
import { fetchJerseysFromFirestoreOrAPI } from "../jerseyService";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function SearchBar({ isOpen, setIsOpen }) {
  const [searchList, setSearchList] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchList]);
  const searchingResult = (e) => {
    const searchResults = products.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchList(searchResults);
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
                return (
                  <Link
                    key={item.id}
                    onClick={() => setIsOpen(false)}
                    to={`/products/${item.id}`}
                    className="product"
                  >
                    <img src={item.thumbnail} alt={`${item.title} image`} />
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
                );
              })}
            </div>
          ) : (
            <div className="searchbar__empty">Məhsul tapılmadı</div>
          )}
          {isLoading ? <Loader /> : ""}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
