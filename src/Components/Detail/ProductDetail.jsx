import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { addToCartAction } from "../../redux/actions/cart.action";
import SizeGuide from "../SizeGuide";
import { fetchJerseysFromFirestoreOrAPI } from "../../jerseyService";
import {
  addToWishListAction,
  setToWishlistAction,
} from "../../redux/actions/like.action";
import {
  addToCompareListAction,
  setToComparelistAction,
} from "../../redux/actions/compare.action";
import { toast } from "react-toastify";
function ProductDetail() {
  const storedWishList = JSON.parse(localStorage.getItem("wishlist"));
  const storedCompareList = JSON.parse(localStorage.getItem("comparelist"));
  // useEffect(() => {
  //   if (storedWishList) {
  //     dispatch(setToWishlistAction(storedWishList));
  //   }
  //   if (storedCompareList) {
  //     dispatch(setToComparelistAction(storedCompareList));
  //   }
  // }, []);
  useEffect(() => {
    fetchJerseysFromFirestoreOrAPI().then((res) => {
      setProductDetail(res);
    });
  }, []);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const location = useLocation();
  const cartList = useSelector((state) => state.cartList);
  const path = location.pathname.split("/").filter((x) => x !== "");
  const index = path[path.length - 1];
  const [productDetail, setProductDetail] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const detailedJersey = productDetail.find((item) => item.id === index);
  const cartItem = cartList?.find((item) => item.id === detailedJersey?.id);
  const [count, setCount] = useState(cartItem?.quantity || 1);
  const [addedCompare, setAddedCompare] = useState(
    storedCompareList?.filter((comparedItem) => comparedItem?.id === index)
      .length
  );
  const wishList = useSelector((state) => state.wishList);
  const compareList = useSelector((state) => state.compareList);
  let dispatch = useDispatch();
  const [addedWish, setAddedWish] = useState(
    storedWishList?.filter((wishedItem) => wishedItem?.id === index).length
  );

  const handleToCart = () => {
    let totalQuantity;
    if (cartItem?.quantity) {
      totalQuantity = cartItem?.quantity + count;
    } else {
      totalQuantity = count;
    }

    try {
      dispatch(
        addToCartAction({
          ...detailedJersey,
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

  const addToWishList = () => {
    try {
      setAddedWish(!addedWish);
      dispatch(addToWishListAction(detailedJersey));
      localStorage.setItem(
        "wishlist",
        JSON.stringify([...wishList, detailedJersey])
      );
      if (!addedWish) {
        toast.success("Bəyəndiklərimə əlavə olundu");
      } else {
        const filteredWishlist = wishList.filter(
          (wishedItem) => wishedItem.id !== index
        );
        localStorage.setItem("wishlist", JSON.stringify(filteredWishlist));
        toast.warning("Bəyəndiklərimdən silindi");
      }
    } catch (error) {
      toast.error("Xəta başverdi");
    }
  };

  const addToComparelist = () => {
    setAddedCompare(!addedCompare);
    dispatch(addToCompareListAction(detailedJersey));
    localStorage.setItem(
      "comparelist",
      JSON.stringify([...compareList, detailedJersey])
    );
    if (!addedCompare) {
      toast.success("Müqayisə siyahısına əlavə olundu");
    } else {
      toast.warning("Müqayisə siyahısından silindi");
      const filteredCompareList = compareList.filter(
        (comparedItem) => comparedItem.id !== index
      );
      localStorage.setItem("comparelist", JSON.stringify(filteredCompareList));
    }
  };

  return (
    <section className="product__section">
      <div className="product__container">
        <div className="product__left">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {detailedJersey?.images.map((item) => {
              return (
                <SwiperSlide key={item}>
                  <img src={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="swiper__footer">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {detailedJersey?.images.map((item) => (
                <SwiperSlide key={item}>
                  <img src={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="product__right">
          <div className="product__detail-title">
            <h1 className="product__detail-header">{detailedJersey?.title}</h1>
            <p className="product__detail-price">
              {detailedJersey?.price}.00 <span>AZN</span>
            </p>

            <p>Sifarişlər 4-6 gün ərzində təhvil verilir.</p>
          </div>
          <div className="product__detail-selection">
            <div className="counter">
              <button
                onClick={() =>
                  setCount((count) => {
                    if (count < 2) {
                      return count;
                    } else {
                      return count - 1;
                    }
                  })
                }
              >
                -
              </button>
              <input
                type="number"
                onChange={(e) => {
                  setCount(Number(e.target.value));
                }}
                value={count}
              />
              <button onClick={() => setCount((count) => count + 1)}>+</button>
            </div>
            <button onClick={handleToCart} className="product__detail-add">
              <p>SƏBƏTƏ AT</p>
            </button>
          </div>
          <div className="product__detail-footer">
            <button onClick={addToWishList} className="wishlist">
              <i
                className={addedWish ? "ri-heart-fill" : "ri-heart-3-line"}
              ></i>
              <p>{addedWish ? "Bəyəndiklərimdən çıxart" : "Bəyən"}</p>
            </button>
            <button className="compare">
              <i
                onClick={addToComparelist}
                className={
                  addedCompare ? "ri-check-double-line" : "ri-loop-left-line"
                }
              ></i>
              <p>
                {addedCompare ? (
                  <Link to="/compare">Müqayisə olunanlara bax</Link>
                ) : (
                  "Müqayisə et"
                )}
              </p>
            </button>
            <button onClick={() => setModalOpen(true)} className="sizeguide">
              <i className="ri-ruler-line"></i>
              <p>Ölçü cədvəli</p>
            </button>
          </div>
          <div className="product__detail-description">
            <h1>Ətraflı</h1>
            <p>
              Yeni buraxılmış <span>{detailedJersey?.title}</span> ilə Blaugrana
              ehtirasınızı ortaya qoymağa hazır olun. Yalnız JerseyStore.az
              saytında mövcud olan məşhur Blaugrana formasını geyinərək kluba
              sarsılmaz dəstəyinizi göstərin.
            </p>
          </div>
        </div>
      </div>
      <SizeGuide modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </section>
  );
}

export default ProductDetail;
