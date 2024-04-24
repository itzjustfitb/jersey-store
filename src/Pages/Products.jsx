import React, { useEffect, useState } from "react";
import { fetchJerseysFromFirestoreOrAPI } from "../jerseyService";
import Product from "../Components/Home/Product";
import Breadcrumbs from "../Components/Breadcrumbs";
import Pagination from "../Components/Pagination";
import { useLocation } from "react-router-dom";

function Products({ setCartListIsActive }) {
  const [datas, setDatas] = useState([]);
  const [defaultList, setDefaultList] = useState([]);
  const [showDropdown, setShowDropdown] = useState("");
  const [secondRowCheck, setSecondRowCheck] = useState("");
  const [firstRowCheck, setFirstRowCheck] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [paginationActive, setPaginationActive] = useState(true);
  const [resetSettings, setResetSettings] = useState(false);
  const location = useLocation();
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = datas.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    fetchJerseysFromFirestoreOrAPI().then((res) => {
      setDatas(res);
      setDefaultList(res);
    });
  }, []);

  useEffect(() => {
    const index = location.pathname.split("/,").filter((item) => item !== "");
    index.push(`?page=${currentPage}`);
    const modifiedUrl = `${index.join("")}`;
    window.history.pushState({}, "", modifiedUrl);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, location.pathname]);

  const secondRow = [
    {
      name: "Fenerbahçe SK",
    },
    {
      name: "FC Barcelona",
    },
    {
      name: "Chelsea FC",
    },
    {
      name: "Arsenal FC",
    },
    {
      name: "Hamısı",
    },
  ];
  const firstRow = [
    {
      name: "Qiymət: Artan sıra ilə",
    },
    {
      name: "Qiymət: Azalan sıra ilə",
    },
    {
      name: "Ad: A-Z",
    },
    {
      name: "Ad: Z-A",
    },
  ];

  const increasingOrder = () => {
    const updatedDatas = datas.sort((a, b) => a.price - b.price);
    setDatas(updatedDatas);
  };

  const decreasingOrder = () => {
    const updatedDatas = datas.sort((a, b) => b.price - a.price);
    setDatas(updatedDatas);
  };

  const nameAToZ = () => {
    const updatedDatas = datas.sort((a, b) => a.club.localeCompare(b.club));
    setDatas(updatedDatas);
  };
  const nameZToA = () => {
    const updatedDatas = datas.sort((a, b) => b.club.localeCompare(a.club));
    setDatas(updatedDatas);
  };

  const navigateSecondRow = (e) => {
    setPaginationActive(false);
    setResetSettings(true);
    setSecondRowCheck(e.target.textContent);
    if (e.target.textContent === "Fenerbahçe SK") {
      const filteredDatas = defaultList.filter(
        (item) => item.club === "Fenerbahçe"
      );
      setDatas(filteredDatas);
    } else if (e.target.textContent === "FC Barcelona") {
      const filteredDatas = defaultList.filter(
        (item) => item.club === "FC Barcelona"
      );
      setDatas(filteredDatas);
    } else if (e.target.textContent === "Chelsea FC") {
      const filteredDatas = defaultList.filter(
        (item) => item.club === "Chelsea FC"
      );
      setDatas(filteredDatas);
    } else if (e.target.textContent === "Arsenal FC") {
      const filteredDatas = defaultList.filter(
        (item) => item.club === "Arsenal FC"
      );
      setDatas(filteredDatas);
    } else {
      setDatas(defaultList);
    }
  };
  const navigateFirstRow = (e) => {
    setPaginationActive(false);
    setResetSettings(true);
    setFirstRowCheck(e.target.textContent);
    if (e.target.textContent === "Qiymət: Artan sıra ilə") {
      increasingOrder();
    } else if (e.target.textContent === "Qiymət: Azalan sıra ilə") {
      decreasingOrder();
    } else if (e.target.textContent === "Ad: A-Z") {
      nameAToZ();
    } else {
      nameZToA();
    }
  };

  return (
    <main className="products__page" onClick={() => setCartListIsActive(false)}>
      <div className="products__page-container">
        <div className="products__page-top">
          <div className="products__page-selection ">
            <div className="products__page-selection-top">
              <Breadcrumbs />
              <div className="products__page-selection-header">
                <h1>Seçimlər</h1>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="setting-btn"
                >
                  <span className="bar bar1"></span>
                  <span className="bar bar2"></span>
                  <span className="bar bar1"></span>
                </button>
              </div>
            </div>
            <div
              className={`products__page-dropdown ${
                showDropdown ? "show__dropdown" : ""
              }`}
            >
              <div className="products__page-dropdown-row">
                <h1>SIRALA</h1>
                <ul>
                  {firstRow.map((item) => {
                    return (
                      <li
                        onClick={navigateFirstRow}
                        className={
                          firstRowCheck === item.name ? "active__row" : ""
                        }
                        key={item.name}
                      >
                        {item.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="products__page-dropdown-row">
                <h1>KOMANDALAR</h1>
                <ul>
                  {secondRow.map((item) => {
                    return (
                      <li
                        className={
                          secondRowCheck === item.name ? "active__row" : ""
                        }
                        onClick={navigateSecondRow}
                        key={item.name}
                      >
                        {item.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`products__page-bottom ${
            currentPosts.length < 5 ? "lower__posts" : ""
          }`}
        >
          {currentPosts?.map((item) => {
            return <Product key={item.id} item={item} />;
          })}
        </div>

        <Pagination
          totalPosts={datas.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </main>
  );
}

export default Products;
