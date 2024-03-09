import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quickViewCloseAction } from "../redux/actions/quickView.action";
import { toast } from "react-toastify";
import { addToWishListAction } from "../redux/actions/like.action";
import { addToCompareListAction } from "../redux/actions/compare.action";
import { Link } from "react-router-dom";
import { addToCartAction } from "../redux/actions/cart.action";

function QuickView() {
  const item = useSelector((state) => state.quickViewList);
  const [view, setView] = useState(false);
  const wishList = useSelector((state) => state.wishList);
  const compareList = useSelector((state) => state.compareList);
  const [addedWish, setAddedWish] = useState(false);
  const [addedCompare, setAddedCompare] = useState(false);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (wishList.length) {
      setAddedWish(
        wishList.filter((wishItem) => wishItem.id === item[0]?.id).length
      );
    }
  }, [wishList, item]);

  useEffect(() => {
    if (compareList.length) {
      setAddedCompare(
        compareList.filter((comparedItem) => comparedItem.id === item[0]?.id)
          .length
      );
    }
  }, [compareList, item]);

  useEffect(() => {
    if (item.length === 1) {
      setView(true);
      document.body.style.overflowY = "hidden";
    } else {
      setView(false);
      document.body.style.overflow = "auto";
    }
  }, [item.length]);

  const clickToContainer = (e) => {
    e.stopPropagation();
  };

  const addToWishList = () => {
    try {
      setAddedWish(!addedWish);
      dispatch(addToWishListAction(item[0]));
      localStorage.setItem("wishlist", JSON.stringify([...wishList, item]));
      if (!addedWish) {
        toast.success("Bəyəndiklərimə əlavə olundu");
      } else {
        const filteredWishlist = wishList.filter(
          (product) => product.id !== item[0]?.id
        );
        localStorage.setItem("wishlist", JSON.stringify(filteredWishlist));
        toast.warning("Bəyəndiklərimdən silindi");
      }
    } catch (error) {
      toast.error("Xəta başverdi");
    }
  };

  const addToComparelist = () => {
    try {
      setAddedCompare(!addedCompare);
      dispatch(addToCompareListAction(item[0]));
      localStorage.setItem(
        "comparelist",
        JSON.stringify([...compareList, item])
      );
      if (!addedCompare) {
        toast.success("Müqayisə siyahısına əlavə olundu");
      } else {
        const filteredCompareList = compareList.filter(
          (comparedItem) => comparedItem.id !== item[0]?.id
        );
        localStorage.setItem(
          "comparelist",
          JSON.stringify(filteredCompareList)
        );
        toast.warning("Müqayisə siyahısından silindi");
      }
    } catch (error) {
      toast.error("Xəta başverdi");
    }
  };

  const handleToCart = () => {
    let totalQuantity = 0;
    totalQuantity = totalQuantity += count;

    try {
      dispatch(
        addToCartAction({
          ...item[0],
          quantity: totalQuantity,
        })
      );
      toast.success("Məhsul səbətə əlavə olundu");
    } catch (error) {
      toast.error(error);
    }

    totalQuantity = 1;
    setCount(1);
  };

  return (
    <div
      onClick={() => dispatch(quickViewCloseAction(item[0]))}
      className={`quick__view ${view ? "quick__view-show" : ""}`}
    >
      <div className="quick__view-container">
        <div onClick={clickToContainer} className="quick__view-content">
          <i
            onClick={() => dispatch(quickViewCloseAction(item[0]))}
            className="ri-close-line"
          ></i>
          <div className="quick__view-left">
            <img src={item[0]?.thumbnail} alt={item[0]?.title} />
            <div className="quick__view-actions">
              <div className="quick__view-icon">
                <div className="tooltip">
                  {addedWish ? "Bəyəndiklərimdən çıxart" : "Bəyən"}
                </div>
                <i
                  onClick={addToWishList}
                  className={addedWish ? "ri-heart-fill" : "ri-heart-3-line"}
                ></i>
              </div>
              <div className="quick__view-icon">
                <div className="tooltip">
                  {addedCompare ? (
                    <Link to="/compare">Müqayisə olunanlara bax</Link>
                  ) : (
                    "Müqayisə et"
                  )}
                </div>
                <i
                  onClick={addToComparelist}
                  className={
                    addedCompare ? "ri-check-double-line" : "ri-loop-left-fill"
                  }
                ></i>
              </div>
            </div>
          </div>
          <div className="quick__view-right">
            <div className="quick__view-right-container">
              <h1>{item[0]?.title}</h1>
              <p>
                {item[0]?.price} <span>AZN</span>
              </p>
              <p>Sifarişlər 4-6 gün ərzində təhvil verilir.</p>
              <div className="quick__view-basket">
                <div className="quick__view-counter">
                  <button
                    onClick={() =>
                      setCount((prev) => {
                        if (prev < 2) {
                          return prev;
                        } else {
                          return prev - 1;
                        }
                      })
                    }
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                  />
                  <button onClick={() => setCount((prev) => prev + 1)}>
                    +
                  </button>
                </div>
                <button onClick={handleToCart} className="quick__view-add">
                  SƏBƏTƏ AT
                </button>
              </div>
              <div className="quick__view-description">
                <p>
                  Yeni buraxılmış <span>{item[0]?.title}</span> ilə Blaugrana
                  ehtirasınızı ortaya qoymağa hazır olun. Yalnız JerseyStore.az
                  saytında mövcud olan məşhur Blaugrana formasını geyinərək
                  kluba sarsılmaz dəstəyinizi göstərin.
                </p>
                <p>
                  Club: <span>{item[0]?.club}</span>
                </p>
                <p>
                  Rating:
                  <span>
                    <span>{item[0]?.rating}</span>
                    <i className="ri-star-fill"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickView;
