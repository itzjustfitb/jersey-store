import { useState } from "react";

function ScrollTopBtn() {
  const [value, setValue] = useState("none");

  const btnHandleClick = () => {
    document.documentElement.scrollTop = 0;
  };

  const calcScrollValue = () => {
    const pos = document.documentElement.scrollTop;
    const calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      setValue("scroll__top-btn");
    } else {
      setValue("none");
    }

    document.querySelector(
      "#scroll__top-btn"
    ).style.background = `conic-gradient(#000 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };

  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;

  return (
    <div id="scroll__top-btn" onClick={btnHandleClick} className={value}>
      <span>
        <i className="ri-arrow-up-line"></i>
      </span>
    </div>
  );
}

export default ScrollTopBtn;
