import Product from "./Product";
import { useEffect, useState } from "react";
import { fetchJerseysFromFirestoreOrAPI } from "../../jerseyService";
import { useSelector } from "react-redux";
function Products() {
  const [datas, setDatas] = useState([]);
  const wishList = useSelector((state) => state.wishList);

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
      </div>
    </section>
  );
}

export default Products;
