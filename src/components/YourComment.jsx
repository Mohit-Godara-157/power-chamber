import React from "react";
import { Container } from "react-bootstrap";
import star2 from "../assets/img/svg/star2.svg";
import dots2 from "../assets/img/png/dots2.png";

const YourComment = () => {
  return (
    <div className="py-lg-5 py-3 position-relative z_3 ">
      <img
        className="position-absolute animationScale image6"
        src={dots2}
        alt="dots2"
      />
      <img
        className="position-absolute animationScale image7"
        src={dots2}
        alt="dots2"
      />
      <img
        className="position-absolute animationScale image8"
        src={dots2}
        alt="dots2"
      />
      <Container>
        <div className="bgImage py-3 py-lg-5">
          <h3 className="text-center text-white pt-3 pt-sm-5 fs_sm ff_ComicGecko fw-bold">
            Your comment/rating/review;
          </h3>
          <div className="commentSectionBg px-2 my-3 my-mg-4 my-lg-5 py-3 py-lg-4">
            <h3 className="text-white text-center ff_Calibri fs_3xsm fw-bold">
              Your Rating
            </h3>
            <div className="d-flex justify-content-center mt-1">
              <img src={star2} alt="star2" />
            </div>
            <div className="mw_640 mx-auto mt-3 mt-lg-5">
              <input
                className="inputModify w-100 text_greenLight fs_2xsm fw-normal ff_Calibri"
                placeholder="Name"
                type="text"
              />
              <input
                className="inputModify w-100 text_greenLight fs_2xsm fw-normal ff_Calibri my-3"
                placeholder="Email"
                type="email"
              />
              <textarea
                className="inputModify  w-100 text_greenLight fs_2xsm fw-normal ff_Calibri"
                placeholder="Review"
                cols="30"
                rows="5"
              ></textarea>
              <p className="mb-3 mb-lg-5 text_greenLight_20 mt-3 fw-normal ff_Calibri fs_xsm">
                Your email address will not be published. Required fields marked
              </p>
              <div className="d-flex align-items-center">
                <button className="fs_xsm ff_ComicGecko text-white fw-bold logBtn">
                  Post Review
                </button>
                <button className="fs_xsm ff_ComicGecko text-white ms-3 fw-bold signBtn">
                  <svg
                    className="me-1"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.4914 10.1984V19.1984M11.4914 10.1984L8.99142 12.1984M11.4914 10.1984L13.9914 12.1984M4.52542 7.31543C3.57963 7.55342 2.75329 8.12859 2.20167 8.93287C1.65005 9.73715 1.4111 10.7152 1.52972 11.6832C1.64835 12.6512 2.11638 13.5426 2.84588 14.1899C3.57538 14.8372 4.51615 15.1958 5.49142 15.1984H6.49142"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.3219 5.33596C14.9801 3.98253 14.1364 2.8097 12.962 2.05522C11.7875 1.30073 10.3701 1.02105 8.99711 1.27286C7.6241 1.52468 6.3982 2.28914 5.56792 3.4113C4.73764 4.53345 4.36512 5.92933 4.52586 7.31596C4.52586 7.31596 4.67886 8.19796 4.99186 8.69796"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.4912 15.1982C17.1972 15.1978 17.8952 15.0478 18.5391 14.7581C19.183 14.4684 19.7582 14.0457 20.2269 13.5177C20.6957 12.9897 21.0473 12.3684 21.2586 11.6948C21.4699 11.0211 21.5362 10.3103 21.453 9.60919C21.3698 8.90806 21.1391 8.23251 20.776 7.62698C20.4129 7.02146 19.9257 6.49969 19.3464 6.09603C18.7672 5.69236 18.109 5.41596 17.4152 5.285C16.7214 5.15405 16.0078 5.17151 15.3212 5.33624L13.9912 5.69824"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Choose file
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default YourComment;
