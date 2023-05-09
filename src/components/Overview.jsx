import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import image1 from "../assets/img/png/image1.png";
import image2 from "../assets/img/png/image2.png";
import image3 from "../assets/img/png/image3.png";
import image4 from "../assets/img/png/image4.png";
import dots3 from "../assets/img/png/dots3.png";
const Overview = () => {
  const [first, setfirst] = useState(3);
  return (
    <div className="my-3 my-xl-5 py-5 position-relative z_3 overflow-hidden">
      <img
        className="position-absolute animationScale image9"
        src={dots3}
        alt="dots3"
      />
      <img
        className="position-absolute animationScale image10"
        src={dots3}
        alt="dots3"
      />
      <Container className="mt-xl-5">
        <Row className="align-items-center">
          <Col className="my-3 my-lg-0" lg={6}>
            <h2 className="fs_sm fw-bold ff_ComicGecko">Overview</h2>

            <ul className="ps-0 mb-0 ">
              <li className="ff_Calibri fw-normal fs_xsm text_dark my-1 position-relative ms-4 blackDots">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li className="ff_Calibri fw-normal fs_xsm text_dark my-1 position-relative ms-4 blackDots">
                Commodo venenatis nec enim nisi id. Vestibulum interdum dictumst
                rhoncus ultrices amet amet.
              </li>
              <li className="ff_Calibri fw-normal fs_xsm text_dark my-1 position-relative ms-4 blackDots">
                {" "}
                Tellus adipiscing augue curabitur leo, pretium habitant turpis
                quis.
              </li>
              <li className="ff_Calibri fw-normal fs_xsm text_dark my-1 position-relative ms-4 blackDots">
                {" "}
                Quam mattis senectus odio mattis gravida gravida sollicitudin
                commodo. Cursus faucibus ut egestas in metus.
              </li>
              <li className="ff_Calibri fw-normal fs_xsm text_dark my-1 position-relative ms-4 blackDots">
                {" "}
                Consequat, suspendisse duis eget purus ornare.
              </li>
            </ul>
            <img
              className={
                first === 3
                  ? "h_315 my-4 pt-1  w-75 d-block"
                  : "h_315 my-4 pt-1  w-75 d-none"
              }
              src={image1}
              alt="image1"
            />
            <img
              className={
                first === 1
                  ? "h_315 my-4 pt-1  w-75 d-block"
                  : "h_315 my-4 pt-1  w-75 d-none"
              }
              src={image2}
              alt="image2"
            />
            <img
              className={
                first === 2
                  ? "h_315 my-4 pt-1  w-75 d-block"
                  : "h_315 my-4 pt-1  w-75 d-none"
              }
              src={image3}
              alt="image3"
            />
            <div className="w-75 mt-3 mt-lg-5">
              <div className="threeImageBox d-flex align-items-center justify-content-between px-4 py-3">
                <img
                  onClick={() => setfirst(1)}
                  className={
                    first === 1 ? "w-25 imgScale1 curser" : "curser scale0 w-25"
                  }
                  src={image2}
                  alt="image2"
                />
                <img
                  onClick={() => setfirst(2)}
                  className={
                    first === 2 ? "w-25 imgScale1 curser" : "curser scale0 w-25"
                  }
                  src={image3}
                  alt="image3"
                />
                <img
                  onClick={() => setfirst(3)}
                  className={
                    first === 3 ? "w-25 imgScale1 curser" : "curser scale0 w-25"
                  }
                  src={image4}
                  alt="image4"
                />
              </div>
            </div>
          </Col>
          <Col className="mt-4 mt-lg-0" lg={6}>
            <div className="platteBackground p-4 p-sm-4 p-md-5 p-lg-4 p-xl-5">
              <h2 className="ff_ComicGecko  fw-bold fs_sm text-white mb-2">
                Platte River Sold Out?{" "}
                <span className="d-block">We can get you a</span> reservation!
              </h2>
              <div className="p-4 sectionBorder mt-lg-5 mt-4 ">
                <div className="d-sm-flex align-items-center">
                  <select
                    className=" select_box curser ff_Calibri arrow pe-5 fw-normal w_25 w_xsm_100 fs_xsm text-white py-2 px-3"
                    id="cars"
                  >
                    <option className="bg-success " value="volvo">
                      CA
                    </option>
                    <option className="bg-success" value="saab">
                      PA
                    </option>
                  </select>
                  <select
                    className=" select_box curser ff_Calibri arrow pe-5 fw-normal w-100 ms-sm-3 mt-2 mt-sm-0  fs_xsm text-white py-2 px-3"
                    id="cars"
                  >
                    <option className="bg-success " value="volvo">
                      Doheny State Beach{" "}
                    </option>
                    <option className="bg-success" value="saab">
                      Other State Beach
                    </option>
                  </select>
                </div>
                <div className="mt-4 d-sm-flex align-items-center justify-content-between ">
                  <p className="mb-0 text-white fw-bold fs_xsm ff_Calibri ">
                    Site Type:
                  </p>
                  <div className="d-sm-flex align-items-center  my-2 my-sm-0 w_xsm_100 w_75">
                    <select
                      className=" select_box curser ff_Calibri arrow pe-5 fw-normal w-100 fs_xsm text-white py-2 px-3"
                      id="cars"
                    >
                      <option className="bg-success " value="volvo">
                        RV
                      </option>
                      <option className="bg-success" value="saab">
                        PA
                      </option>
                    </select>
                    <select
                      className=" select_box curser ff_Calibri arrow pe-5 fw-normal w-100 ms-sm-3 mt-2 mt-sm-0 fs_xsm text-white py-2 px-3"
                      id="cars"
                    >
                      <option className="bg-success " value="volvo">
                        10 ft.
                      </option>
                      <option className="bg-success" value="saab">
                        15 ft.
                      </option>
                    </select>
                  </div>
                </div>
                <div className="mt-4 d-sm-flex align-items-center justify-content-between">
                  <p className="mb-0 text-white fs_xsm fw-bold ff_Calibri my-2 my-sm-0">
                    Number in your party:
                  </p>
                  <select
                    className=" select_box curser ff_Calibri arrow pe-5 fw-normal w_xsm_100 w_25 mt-2 mt-sm-0 fs_xsm text-white py-2 px-3"
                    id="cars"
                  >
                    <option className="bg-success " value="volvo">
                      01
                    </option>
                    <option className="bg-success" value="saab">
                      02
                    </option>
                  </select>
                </div>
                <div className="mt-4 d-sm-flex align-items-center justify-content-between">
                  <p className="mb-0 text-white fs_xsm fw-bold ff_Calibri">
                    Check in Date:
                  </p>
                  <select
                    className=" select_box curser ff_Calibri arrow pe-5 mt-2 mt-sm-0 fw-normal w_50 fs_xsm w_xsm_100 text-white py-2 px-3"
                    id="cars"
                  >
                    <option className="bg-success " value="volvo">
                      Friday,May 13/2022
                    </option>
                    <option className="bg-success" value="saab">
                      Friday,May 12/2022
                    </option>
                  </select>
                </div>{" "}
                <div className="mt-4 d-sm-flex align-items-center justify-content-between">
                  <p className="mb-0 text-white fs_xsm fw-bold ff_Calibri ">
                    Check Out Date:
                  </p>
                  <select
                    className=" select_box curser ff_Calibri arrow pe-5 fw-normal mt-2 mt-sm-0 w_50 w_xsm_100 fs_xsm text-white py-2 px-3"
                    id="cars"
                  >
                    <option className="bg-success " value="volvo">
                      Sunday,May 15/2022
                    </option>
                    <option className="bg-success" value="saab">
                      Sunday,May 14/2022
                    </option>
                  </select>
                </div>
                <div className="d-flex justify-content-center mt-4  mt-sm-5 mb-1 mb-sm-3">
                  <button className="fs_xsm ff_ComicGecko text-white fw-bold logBtn">
                    Continue to Step 2
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Overview;
