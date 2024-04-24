import { Link } from "react-router-dom";
import Breadcrumbs from "../Components/Breadcrumbs";

function About({ setCartListIsActive }) {
  return (
    <main id="about" onClick={() => setCartListIsActive(false)}>
      <div className="about__container">
        <Breadcrumbs />
        <h1>Haqqımızda</h1>
        <div className="about__container-row">
          <p>
            Hər zaman içimizdə olan futbol sevgisini özümüzə axtardığımız
            əfsanəvi formaların kolleksiyasını yığmaqla bu yola başladıq.
            2010-lara qədər ölkəmizdə çətinliklə futbol formasının əldə
            edilməsinin özümüz də şahidi olduq. 2013-dən etibarən Azərbaycanda
            ilk onlayn futbol forması mağazasını sizlərin də rahatlıqla yeni
            mövsüm və retro formaları əldə edə bilməyiniz üçün əvvəla sosial
            mediada başlasaq da, son 4 ildə işimizi FUTBOLFORMASI.AZ saytımızdan
            daha operativ və geniş seçimli olaraq davam etdiririk. Artıq, 10-cu
            ilimizdə sizlərlə birlikdə 1000-lərlə fərdi müştəri, 100-lərlə
            korporativ müştəri bazamızı formalaşdırmışıq. Sizə özəl dizaynda
            hazırladığımız məhsulları müstəqil və bütöv Azərbaycanımızın bütün
            regionlarına topdan və pərakəndə satışını həyata keçiririk.
          </p>
          <p>
            Əlaqə məlumatlarımız: <Link to="#">info@jerseystore.az</Link>
            <Link to="#">+994 (70) 987 65 43</Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
