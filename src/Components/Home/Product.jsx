import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCartAction } from "../../redux/actions/cart.action";

function Product({ item }) {
  const dispatch = useDispatch();

  const addToCart = (e) => {
    e.preventDefault();
    dispatch(addToCartAction(item));
  };
  return (
    <Link to={`/product/${item.id}`} className="product">
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
          {item.title} – <span>(komandalar üçün)</span>
        </h3>
        <p>
          {item.price}
          <span> AZN</span>
        </p>
      </div>
    </Link>
  );
}

export default Product;
