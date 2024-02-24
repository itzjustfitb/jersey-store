import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCartAction } from "../../redux/actions/cart.action";
import SizeGuide from "../SizeGuide";
import { fetchJerseysFromFirestoreOrAPI } from "../../jerseyService";
function ProductDetail() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const location = useLocation();
  const path = location.pathname.split("/").filter((x) => x !== "");
  const index = path[path.length - 1];
  const [productDetail, setProductDetail] = useState([]);
  const [count, setCount] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeBtn, setActiveBtn] = useState("");
  const buttonsList = ["XS", "S", "M", "L", "XL"];
  const detailedJersey = productDetail.find((item) => item.id === index);

  let dispatch = useDispatch();
  console.log(detailedJersey);
  useEffect(() => {
    fetchJerseysFromFirestoreOrAPI().then((res) => {
      setProductDetail(res);
    });
  }, []);

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
                if (index !== item) {
                  return (
                    <button
                      key={item}
                      className={activeBtn ? "button__active" : ""}
                      onClick={() => setActiveBtn(true)}
                    >
                      {item}
                    </button>
                  );
                }
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
                onChange={(e) => setCount(e.target.value)}
                value={count}
              />
              <button onClick={() => setCount((count) => count + 1)}>+</button>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCartAction({ ...detailedJersey, quantity: count })
                )
              }
              className="product__detail-add"
            >
              <p>SƏBƏTƏ AT</p>
            </button>
          </div>
          <div className="product__detail-footer">
            <button className="wishlist">
              <i className="ri-heart-line"></i>
              <p>Bəyən</p>
            </button>
            <button className="compare">
              <i className="ri-arrow-left-right-line"></i>
              <p>Müqayisə et</p>
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
