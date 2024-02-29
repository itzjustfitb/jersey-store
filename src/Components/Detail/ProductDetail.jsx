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
import { addToWishListAction } from "../../redux/actions/like.action";
import { addToCompareListAction } from "../../redux/actions/compare.action";
import { toast } from "react-toastify";
function ProductDetail() {
  useEffect(() => {
    fetchJerseysFromFirestoreOrAPI().then((res) => {
      setProductDetail(res);
    });
  }, []);

  const [added, setAdded] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const location = useLocation();
  const { cartList } = useSelector((state) => state);
  const path = location.pathname.split("/").filter((x) => x !== "");
  const index = path[path.length - 1];
  const [productDetail, setProductDetail] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeBtn, setActiveBtn] = useState("");
  const buttonsList = ["XS", "S", "M", "L", "XL"];
  const detailedJersey = productDetail.find((item) => item.id === index);
  const cartItem = cartList?.find((item) => item.id === detailedJersey?.id);
  const [count, setCount] = useState(cartItem?.quantity || 1);
  const [addToCompareList, setAddToCompareList] = useState(false);

  let dispatch = useDispatch();

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
    setAdded(!added);
    dispatch(addToWishListAction(detailedJersey));
  };

  const addToComparelist = () => {
    setAddToCompareList(!addToCompareList);
    dispatch(addToCompareListAction(detailedJersey));
    console.log(detailedJersey);
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
          <div className="product__detail-sizes">
            <p>Ölçülər:</p>
            <div className="product__detail-sizes-buttons">
              {buttonsList.map((item, index) => {
                console.log(item, index);

                return (
                  <button
                    key={item}
                    className={activeBtn ? "button__active" : ""}
                    onClick={() => setActiveBtn(true)}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
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
              <i className={added ? "ri-heart-fill" : "ri-heart-3-line"}></i>
              <p>{added ? "Bəyəndiklərimdən çıxart" : "Bəyən"}</p>
            </button>
            <button onClick={addToComparelist} className="compare">
              <i
                className={
                  addToCompareList ? "ri-refresh-line" : "ri-loop-left-line"
                }
              ></i>
              <p>
                {addToCompareList ? (
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
            <h1>Description</h1>
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
