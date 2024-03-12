import React, { useEffect, useState } from "react";

function NightModeBtn() {
  const getTheme = () => {
    return JSON.parse(localStorage.getItem("night-mode")) || false;
  };
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    localStorage.setItem("night-mode", JSON.stringify(theme));
    if (theme) {
      document.body.classList.add("night__mode");
    } else {
      document.body.classList.remove("night__mode");
    }
  }, [theme]);
  return (
    <div
      onClick={() => {
        setTheme(!theme);
        document.body.style.position = "static";
      }}
      className={`header__nav-icon night__mode-button ${
        theme ? "night__mode-button-active" : ""
      }`}
    >
      <i className={theme ? "ri-sun-line" : "ri-moon-line"}></i>
    </div>
  );
}

export default NightModeBtn;
