import { Link } from "react-router-dom";
import Breadcrumbs from "../Components/Breadcrumbs";

function Contact() {
  return (
    <main className="contact__us-section">
      <div className="contact__us-container">
        <div className="contact__us-header">
          <Breadcrumbs />
          <h3>Bizimlə Əlaqə</h3>
        </div>
        <div className="contact__us-top">
          <div className="contact__us-inputs">
            <div className="inputs">
              <input
                id="contact__us-name"
                placeholder="Adınız"
                type="text"
                required
              />
              <input
                id="contact__us-surname"
                placeholder="Soyadınız"
                type="text"
                required
              />
            </div>
            <div className="inputs">
              <input
                id="contact__us-email"
                placeholder="Email"
                type="email"
                required
              />
              <input
                id="contact__us-phone"
                placeholder="Telefon"
                type="number"
                required
              />
            </div>
            <div className="textareas">
              <textarea
                id="contact__us-comment"
                placeholder="Mesajınız"
                cols="99"
                rows="10"
              ></textarea>
              <div className="submit__button">
                <button id="sender">
                  <p>Göndər</p>
                </button>
              </div>
            </div>
          </div>
          <iframe
            className="contact__us-map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d38070.00919956408!2d49.87210494285989!3d40.410749946860996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2saz!4v1710179193929!5m2!1sen!2saz"
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact__us-bottom">
          <div className="contact__us-card">
            <div>
              <i className="ri-map-pin-line"></i>
            </div>
            <h5>Adres</h5>
            <p>Bakı, Azərbaycan</p>
          </div>
          <div className="contact__us-card">
            <div>
              <i className="ri-mail-open-line"></i>
            </div>
            <h5>Email Adres</h5>
            <p>info@jerseystore.az</p>
          </div>
          <div className="contact__us-card">
            <div>
              <i className="ri-phone-line"></i>
            </div>
            <h5>Telefon</h5>
            <p>+994 50 987 65 43</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
