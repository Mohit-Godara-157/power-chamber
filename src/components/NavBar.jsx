import React, { useState } from "react";
import { Container } from "react-bootstrap";
import navlogo from "../assets/img/svg/navLogo.svg";

const NavBar = () => {
  const [first, setfirst] = useState(true);
  return (
    <div className="navBg">
      <Container>
        <nav className="d-flex align-items-center justify-content-between">
          <a href="#">
            <img className="w_50" src={navlogo} alt="navlogo" />
          </a>
          <ul
            className={
              first
                ? "d-flex align-items-center  mb-0 ps-0 closeNav"
                : "d-flex align-items-center  mb-0 ps-0 openNav"
            }
          >
            <button
              className="btn-close position-absolute end-0 top-0 m-5 bg-white opacity-100 d-lg-none"
              onClick={() => setfirst(true)}
            ></button>
            <li
              className="my-2 my-lg-0 mx-lg-3 "
              onClick={() => setfirst(true)}
            >
              <a
                href="#"
                className="navLinks fs_xsm ff_ComicGecko text-white fw-bold"
              >
                Home
              </a>
            </li>
            <li
              className="my-2 my-lg-0 mx-lg-3 "
              onClick={() => setfirst(true)}
            >
              <a
                href="#"
                className="navLinks fs_xsm ff_ComicGecko text-white fw-bold"
              >
                Campgrounds
              </a>
            </li>
            <li
              className="my-2 my-lg-0 mx-lg-3 "
              onClick={() => setfirst(true)}
            >
              <a
                href="#"
                className="navLinks fs_xsm ff_ComicGecko text-white fw-bold"
              >
                About us
              </a>
            </li>
            <li
              className="my-2 my-lg-0 mx-lg-3 "
              onClick={() => setfirst(true)}
            >
              <a
                href="#"
                className="navLinks fs_xsm ff_ComicGecko text-white fw-bold"
              >
                Contact
              </a>
            </li>
            <li className="my-2 my-lg-0 ms-lg-5" onClick={() => setfirst(true)}>
              <button className="fs_xsm ff_ComicGecko text-white fw-bold signBtn">
                Sign Up
              </button>
            </li>
            <li className="my-2 my-lg-0 ms-lg-4" onClick={() => setfirst(true)}>
              <button className="fs_xsm ff_ComicGecko text-white fw-bold logBtn">
                Log in
              </button>
            </li>
          </ul>
          <div
            className="d-flex flex-column curser d-lg-none"
            onClick={() => setfirst(false)}
          >
            <span className="menuitems"></span>
            <span className="menuitems my-1"></span>
            <span className="menuitems"></span>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default NavBar;
