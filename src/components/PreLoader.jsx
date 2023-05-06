import React from "react";
import loadimg from "../assets/img/svg/navLogo.svg";
const Preloader = () => {
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
    document.body.classList.remove("overflow-hidden");
  }, 3000);
  return (
    <div className="d-flex align-items-center justify-content-center w-100">
      <div className="preloader">
        <img
          className="animationScale "
          width={140}
          src={loadimg}
          alt="loadimg"
        />
      </div>
    </div>
  );
};

export default Preloader;
