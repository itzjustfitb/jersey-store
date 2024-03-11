import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCompareListAction } from "../redux/actions/compare.action";
import { toast } from "react-toastify";
import Breadcrumbs from "../Components/Breadcrumbs";
import Pagination from "../Components/Pagination";

function Compare() {
  const compareList = useSelector((state) => state.compareList);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = compareList.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPosts]);

  function removeItem(e, element) {
    toast.warning("Müqayisə siyahısından silindi");
    e.preventDefault();
    dispatch(removeFromCompareListAction(element));
    const filteredCompareList = compareList.filter(
      (comparedItem) => comparedItem.id !== element.id
    );
    localStorage.setItem("comparelist", JSON.stringify(filteredCompareList));
  }

  return (
    <main id="compare">
      <div className="compare__container">
        {compareList.length ? (
          <div className="compare__fill">
            <Breadcrumbs />
            <div className="compare__header">
              <h1>MÜQAYİSƏ OLUNAN MƏHSULLAR</h1>
            </div>
            <div className="compare__bottom">
              <div className="compare__nav">
                <div className="compare__field"></div>
                <div className="compare__details">
                  <p>AD</p>
                  <p>TƏSVİR</p>
                  <p>MÖVCUDLUQ</p>
                  <p>QİYMƏT</p>
                  <p>REYTİNQ</p>
                </div>
              </div>
              <div className="compare__list-container">
                {currentPosts?.map((item) => (
                  <div key={item.id} className="compare__card">
                    <button
                      onClick={(e) => removeItem(e, item)}
                      className="delete-btn"
                    >
                      <div className="svg-wrapper">
                        <i className="ri-delete-bin-line"></i>
                      </div>
                      <span>Sil</span>
                    </button>

                    <div className="compare__card-content">
                      <Link>
                        <img src={item.thumbnail} alt={item.title} />
                      </Link>
                      <div className="compare__card-details">
                        <p>{item.title}</p>
                        <p>
                          <span>
                            Sifarişlər 4-6 gün ərzində təhvil verilir.
                          </span>
                        </p>
                        <p>
                          <span>ANBARDA</span>
                        </p>
                        <p>
                          {item.price}.00<span>AZN</span>
                        </p>
                        <p>
                          <span>{item.rating}</span>
                          <i className="ri-star-fill"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Pagination
              totalPosts={compareList.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        ) : (
          <div className="compare__empty">
            <i className="ri-arrow-left-right-line"></i>
            <p>MÜQAYİSƏ EDİLƏCƏK MƏHSUL YOXDUR</p>
            <Link to="/">MAĞAZAYA QAYIT</Link>
          </div>
        )}
      </div>
    </main>
  );
}

export default Compare;
