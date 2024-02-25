import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { quickViewOpenAction } from "../../redux/actions/quickView.action";

function Product({ item }) {
  const dispatch = useDispatch();
  const [view, setView] = useState(false);

  return (
    <div to={`/product/${item.id}`} className="product">
      <img src={item.thumbnail} alt={`${item.title} image`} />
      <div className="quick__shop-btns">
        <div className="base__btns">
          <div className="base__btns-icon">
            <i className="ri-heart-3-line"></i>
            <div className="tooltip">Bəyən</div>
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
