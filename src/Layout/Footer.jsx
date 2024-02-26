import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__top">
          <p>
            2013-cü ildən ən uyğun qiymətə yüksək keyfiyyətli futbol formaları
            və digər futbol məhsullarının topdan və pərakəndə satışını həyata
            keçiririk.
          </p>
          <div className="footer__row">
            <h1>MÜŞTƏRİ XİDMƏTLƏRİ</h1>
            <ul>
              <Link to="/about">
                <li>Haqqımızda</li>
              </Link>
              <Link to="/contact-us">
                <li>Bizimlə əlaqə</li>
              </Link>
              <Link to="/questions">
                <li>Tez-tez verilən suallar</li>
              </Link>
            </ul>
          </div>
          <div className="footer__row">
            <h1>MƏLUMAT</h1>
            <ul>
              <Link to="">
                <li>Ölçülər</li>
              </Link>
              <Link to="">
                <li>Xidmət şərtləri</li>
              </Link>
              <Link to="/compare">
                <li>Müqayisə olunan məhsullar</li>
              </Link>
            </ul>
          </div>
          <div className="footer__row">
            <h1>KEÇİDLƏR</h1>
            <ul>
              <Link to="">
                <li>JERSEY STORE necə işləyir?</li>
              </Link>
              <Link to="">
                <li>Topdan sifariş</li>
              </Link>
              <Link to="">
                <li>Parça növləri</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2024 JERSEYSTORE.AZ Bütün hüquqlar qorunur</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
