import { Link } from "react-router-dom";

function Contact() {
  return (
    <main id="contact">
      <div className="contact__container">
        <p>
          <Link to="/">JERSEYSTORE.AZ</Link> dəstək xidmətimizlə əlaqə yaradıb
          bütün suallarınızı verə bilərsiniz:
        </p>
        <ul>
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
        <div>
          <h1>İş saatları</h1>
          <div>
            <p>Bazar ertəsi – cümə | 11:00 – 17:00</p>
            <p>Şənbə | 12:00 – 16:00</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
