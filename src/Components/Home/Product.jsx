import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { quickViewOpenAction } from "../../redux/actions/quickView.action";
import { addToWishListAction } from "../../redux/actions/like.action";
import { useState } from "react";
import { addToCompareListAction } from "../../redux/actions/compare.action";

function Product({ item }) {
  const dispatch = useDispatch();
  const [addToList, setAddToList] = useState(false);
  const [addToCompareList, setAddToCompareList] = useState(false);
  const addToWishList = () => {
    setAddToList(!addToList);
    dispatch(addToWishListAction(item));
  };
  const addToComparelist = () => {
    setAddToCompareList(!addToCompareList);
    dispatch(addToCompareListAction(item));
  };
  return (
    <div className="product">
      <img src={item.thumbnail} alt={`${item.title} image`} />
      <div className="quick__shop-btns">
        <div className="base__btns">
          <div className="base__btns-icon">
            <i
              onClick={addToWishList}
              className={addToList ? "ri-heart-fill" : "ri-heart-3-line"}
            ></i>
            <div className="tooltip">
              {addToList ? "Bəyəndiklərimdən çıxart" : "Bəyən"}
            </div>
          </div>
          <div className="base__btns-icon">
            <i
              onClick={addToComparelist}
              className={
                addToCompareList ? "ri-refresh-line" : "ri-loop-left-fill"
              }
            ></i>
            <div className="tooltip">
              {addToCompareList ? (
                <Link to="/compare">Müqayisə olunanlara bax</Link>
              ) : (
                "Müqayisə et"
              )}
            </div>
          </div>
          <div className="base__btns-icon">
            <i
              onClick={() => dispatch(quickViewOpenAction(item))}
              className="ri-zoom-in-line"
            ></i>
            <div className="tooltip">Bax</div>
          </div>
        </div>
        <Link to={`/product/${item.id}`} className="quick__add-btn">
          <i className="ri-eye-line"></i>
          <p>MƏHSULA BAX</p>
        </Link>
      </div>
      <div className="product__desc">
        <h3>
          {item.title} – <span>(komandalar üçün)</span>
        </h3>
        <p>
          {item.price}
          <span> AZN</span>
        </p>
      </div>
    </div>
  );
}

export default Product;
