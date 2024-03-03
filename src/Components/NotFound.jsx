import React from "react";
import notFoundImg from "../assets/images/not-found.gif";
import { useSelector } from "react-redux";
function NotFound() {
  const wishList = useSelector((state) => state.wishList);

  console.log(wishList);

  return (
    <main className="frem">
      <p>404</p>
      <img src={notFoundImg} alt="Not Found Gif" />
      <h2>Look like you're lost</h2>
      <h5>the page you are looking for not avaible!</h5>
      <a href="/">Go to Home</a>
    </main>
  );
}

export default NotFound;
