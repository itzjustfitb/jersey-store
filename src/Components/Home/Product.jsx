import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { quickViewOpenAction } from "../../redux/actions/quickView.action";
import { addToWishListAction } from "../../redux/actions/like.action";
import { useEffect, useState } from "react";
import { addToCompareListAction } from "../../redux/actions/compare.action";
import { toast } from "react-toastify";

function Product({ item }) {
  const wishList = useSelector((state) => state.wishList);
  const compareList = useSelector((state) => state.compareList);

  const [addedWish, setAddedWish] = useState(
    wishList.filter((wishedItem) => wishedItem.id === item.id).length
  );
  const [addedCompare, setAddedCompare] = useState(
    compareList.filter((comparedItem) => comparedItem.id === item.id).length
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (wishList) {
      setAddedWish(
        wishList.filter((wishItem) => wishItem.id === item.id).length
      );
    }
  }, [wishList]);

  useEffect(() => {
    if (compareList) {
      setAddedCompare(
        compareList.filter((comparedItem) => comparedItem.id === item.id).length
      );
    }
  }, [compareList]);

  const addToWishList = () => {
    try {
      setAddedWish(!addedWish);
      console.log(addedWish);
      dispatch(addToWishListAction(item));
      localStorage.setItem("wishlist", JSON.stringify([...wishList, item]));
      if (!addedWish) {
        toast.success("Bəyəndiklərimə əlavə olundu");
      } else {
        const filteredWishlist = wishList.filter(
          (product) => product.id !== item.id
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
      dispatch(addToCompareListAction(item));
      localStorage.setItem(
        "comparelist",
        JSON.stringify([...compareList, item])
      );
      if (!addedCompare) {
        toast.success("Müqayisə siyahısına əlavə olundu");
      } else {
        const filteredCompareList = compareList.filter(
          (product) => product.id !== item.id
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

  return (
    <div className="product">
      <div className="product__image">
        <img src={item.thumbnail} alt={`${item.title} image`} />
      </div>
      <div className="quick__shop-btns">
        <div className="base__btns">
          <div className="base__btns-icon">
            <i
              onClick={addToWishList}
              className={addedWish ? "ri-heart-fill" : "ri-heart-3-line"}
            ></i>
            <div className="tooltip">
              {addedWish ? "Bəyəndiklərimdən çıxart" : "Bəyən"}
            </div>
          </div>
          <div className="base__btns-icon">
            <i
              onClick={addToComparelist}
              className={
                addedCompare ? "ri-check-double-line" : "ri-loop-left-fill"
              }
            ></i>
            <div className="tooltip">
              {addedCompare ? (
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
