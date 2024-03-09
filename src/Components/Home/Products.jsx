import Product from "./Product";
import { useEffect, useState } from "react";
import { fetchJerseysFromFirestoreOrAPI } from "../../jerseyService";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Products() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetchJerseysFromFirestoreOrAPI().then((res) => {
      setDatas(res);
    });
  }, []);
  return (
    <section className="home__products">
      <div className="products__container">
        <div className="products__top">
          <h1>Özəl dizayn futbol formaları</h1>
          <p>
            İstədiyiniz dizayn və loqolarla yüksək texnologiyalı parçadan
            hazırlanan uyğun qiymətli oyun formaları
          </p>
        </div>
        <div className="products__bottom">
          {datas?.map((item) => {
            return <Product key={item.id} item={item} />;
          })}
        </div>
        <Link to="/products">
          <p>Bütün məhsullar</p>
          <i className="ri-arrow-right-line"></i>
        </Link>
      </div>
    </section>
  );
}

export default Products;
