import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <main className="notfound">
      <div className="notfound__container">
        <div className="notfound__top">
          <h1>404</h1>
          <span>TAPILMADI</span>
        </div>
        <div className="notfound__bottom">
          <p>AXTARDIĞINIZ SƏHİFƏ VƏ YA MƏHSUL TAPILMADI.</p>
          <Link to="/">
            <button>MAĞAZAYA QAYIT</button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
