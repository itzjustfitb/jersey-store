import React from "react";

function NightModeBtn({ nightModeActive, setNightModeActive }) {
  return (
    <div
      onClick={() => setNightModeActive(!nightModeActive)}
      className={`header__nav-icon night__mode-button ${
        nightModeActive ? "night__mode-button-active" : ""
      }`}
    >
      <i className={nightModeActive ? "ri-sun-line" : "ri-moon-line"}></i>
    </div>
  );
}

export default NightModeBtn;
