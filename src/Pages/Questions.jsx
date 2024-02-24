import React from "react";
import { Link } from "react-router-dom";

function Questions() {
  return (
    <main id="questions">
      <div className="questions__container">
        <div className="questions__rows">
          <div className="questions__row">
            <h3>Sifarişlər nə vaxta çatdırılır?</h3>
            <div className="questions__row-content">
              <p>Seçimə görə 4-6 və ya 12-18 gün ərzində çatdırılır.</p>
            </div>
          </div>
          <div className="questions__row">
            <h3>Hansı bədən ölçüləri var?</h3>
            <div className="questions__row-content">
              <p>Böyüklər üçün ölçülər: S, M, L, XL, 2XL, 3XL, 4XL</p>
              <p>Uşaqlar üçün ölçülər: 116, 128, 140, 152, 164 sm</p>
            </div>
          </div>
          <div className="questions__row">
            <h3>
              Peşəkar oyun formaları və sadə formalar arasında nə fərq var?
            </h3>
            <div className="questions__row-content">
              <p>
                Peşəkar oyun formaları versiya oyunçuların oyunda geyindiyi
                modeldir. Yəni, keyfiyyətcə həvəskar oyunçuların formalarından
                daha üstün olur. Oyunçu formasının aşağısı hissəsi yumru olur,
                kəsimi isə <strong>slim fit</strong> (kip) qəlibdir. Komanda və
                simvol/loqosu yüksək keyfiyyətli UVDTF material və ya naxışlı
                olur. Sponsor yazısı, ad və nömrə isə fleks material yapışqandan
                ibarət olur.
              </p>
              <p>
                <strong>Fan</strong> versiyada isə bu özəlliklər çox az qısmi
                var; loqo, sponsor, ad və nömrə <strong>sublim</strong> çapdır,
                kəsimi isə standart(regular) qəlibdir. Sadə versiya eynilə
                fanshop futbolformarı kimi olur.
              </p>
            </div>
          </div>
          <div className="questions__row">
            <h3>Sifarişlər nə vaxta çatdırılır?</h3>
            <div className="questions__row-content">
              <p>Böyüklər üçün ölçülər: S, M, L, XL, 2XL, 3XL, 4XL</p>
              <p>Uşaqlar üçün ölçülər: 116, 128, 140, 152, 164 sm</p>
            </div>
          </div>
          <div className="questions__row">
            <h3>Dəyişdirmə və qaytarma var?</h3>
            <div className="questions__row-content">
              <p>
                Xidmət şərtlərində əvvəlcədən bildirdiyimiz maddələr ilə proses
                həyata keçirilə bilər.
              </p>
            </div>
          </div>
          <div className="questions__row">
            <h3>Futbol forması necə yuyulmalıdır?</h3>
            <div className="questions__row-content">
              <p>
                Hazırladığımız məhsulları 40 dərəcədən yuxarı istilikdə yumağı
                məsləhət görmürük. Paltarı tərs çevirin, soyuq suda, yuyucu toz
                istifadə etmədən yusanız, uzun illər istifadə edə biləcəksiniz.
              </p>
            </div>
          </div>
        </div>
        <p className="questions__content">
          Əgər hələ də sullarınıza cavab tapa bilmədinizsə, aşağıda qeyd edilən
          linklərdən bizimlə əlaqə yaradıb bütün suallarınızı verə bilərsiniz:
        </p>
        <ul className="questions__socials">
          <li>
            <p>E-mail:</p>
            <Link to="#">info@jerseystore.az</Link>
          </li>
          <li>
            <p>Facebook:</p>
            <Link to="#">Facebook.com/jerseystore.az</Link>
          </li>
          <li>
            <p>Instagram:</p>
            <Link to="#">instagram.com/jerseystore.az</Link>
          </li>
          <li>
            <p>Whatsapp:</p>
            <Link to="#">+994 (70) 987 65 43</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Questions;
