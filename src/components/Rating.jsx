import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import star2 from "../assets/img/svg/star2.svg";
import star from "../assets/img/svg/star.svg";
import manImage from "../assets/img/png/manimage.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Rating = () => {
  return (
    <div className=" py-3 py-lg-5">
      <div className=" z_3 position-relative pt-lg-5">
        <div className="positionBox position-absolute"></div>
        <Container>
          <Row className="pt-5 pb-lg-5">
            <Col lg={3} className="my-2 my-lg-0 ">
              <div className="ratingBackground p-3 p-lg-0 ">
                <h2 className="ff_ComicGecko text-white fs_3xsm fw-bold ">
                  Ratings Summary{" "}
                </h2>
                <div className="mt-3 pt-1 d-flex align-items-center justify-content-between">
                  <p className="mb-0 text-white fs_xsm ff_Calibri fw-normal">
                    Overall Rating
                  </p>
                  <img src={star2} alt="star2" />
                </div>
                <div className="mt-3  d-flex align-items-center justify-content-between">
                  <p className="mb-0 text-white fs_xsm ff_Calibri fw-normal">
                    Access
                  </p>
                  <img src={star} alt="star2" />
                </div>
                <div className="mt-3  d-flex align-items-center justify-content-between">
                  <p className="mb-0 text-white fs_xsm ff_Calibri fw-normal">
                    Location
                  </p>
                  <img src={star2} alt="star2" />
                </div>
                <div className="mt-3  d-flex align-items-center justify-content-between">
                  <p className="mb-0 text-white fs_xsm ff_Calibri fw-normal">
                    Cleanlines
                  </p>
                  <img src={star} alt="star2" />
                </div>
                <div className="mt-3  d-flex align-items-center justify-content-between">
                  <p className="mb-0 text-white fs_xsm ff_Calibri fw-normal">
                    Site Quality
                  </p>
                  <img src={star} alt="star2" />
                </div>
                <div className="mt-3  d-flex align-items-center justify-content-between">
                  <p className="mb-0 text-white fs_xsm ff_Calibri fw-normal">
                    Noise
                  </p>
                  <img src={star2} alt="star2" />
                </div>
              </div>
            </Col>
            <Col lg={9} className="my-2 my-lg-0 ps-lg-5 z_3">
              <Row>
                <Col className="my-2 my-lg-0" lg={8}>
                  <p className="text-white ff_Calibri fw-normal ms-2">
                    Filter By
                  </p>
                  <div className="d-sm-flex  align-items-center ">
                    <DropdownButton
                      className="ff_Calibri fw-normal fs_xsm "
                      id="dropdown-basic-button"
                      title="Traveler Type"
                    >
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton
                      className="ff_Calibri fw-normal fs_xsm ms-sm-3 ms-lg-2 ms-xl-3 my-3 my-sm-0 "
                      id="dropdown-basic-button"
                      title="Traveler Frequency"
                    >
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                </Col>
                <Col className="my-2 my-lg-0 " lg={4}>
                  <p className="text-white ff_Calibri fw-normal ms-2">
                    Sort By
                  </p>
                  <DropdownButton
                    className="ff_Calibri fw-normal fs_xsm "
                    id="dropdown-basic-button"
                    title="Newest - default"
                  >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
              <div className="d-flex mt-5">
                <div className="mb-0">
                  <div className="imageBorder p-1">
                    <img className="w-100" src={manImage} alt="manImage" />
                  </div>
                  <h4 className="mb-0 text-center text-white fs_xsm ff_Calibri fw-bold">
                    Snoopinaround
                  </h4>
                  <p className="mb-0 text-center text_green_50 fs_xsm ff_Calibri fw-bold ">
                    Geneseo,IL
                  </p>
                  <p className="mb-0 text-center text_green_50 fs_xsm ff_Calibri fw-bold mt-1">
                    Ram 2500
                  </p>
                  <p className="mb-0 text-center text_green_50 fs_xsm ff_Calibri fw-bold mt-1">
                    21 reviews
                  </p>
                  <button className="fs_xsm ff_ComicGecko text-white fw-bold mt-4 logBtn">
                    Member
                  </button>
                </div>
                <div className="ms-2 ms-sm-5 mt-md-4">
                  <p className="mb-0 text-white fs_xsm fw-bold ff_Calibri">
                    Outstanding Campground
                  </p>
                  <p className="mb-0 text_green_50 fs_xsm fw-normal ff_Calibri ">
                    Reviewed 10/24/2021
                  </p>
                  <div className="d-flex align-items-center my-3">
                    <p className="mb-0 text-white fs_xsm fw-normal ff_Calibri ">
                      Overall Rating
                    </p>
                    <img className="ms-3" src={star2} alt="star2" />
                  </div>
                  <p className="mb-0 text_green_50 fs_xsm fw-normal ff_Calibri mt-3">
                    The government campgrounds are the best and this one is no
                    exception. We stayed in loop #1 with electricity. Spacious
                    and private sites with fire rings and picnic tables.{" "}
                    <span className="d-xl-block">
                      The only noise was from acorns falling on rv’s. There is a
                      walking trail (Dog friendly
                    </span>{" "}
                    but no bikes) to the beach from the campground. Bicyclists
                    can take a short
                  </p>
                  <button className="fs_xsm ff_ComicGecko text-white fw-bold mt-3 signBtn">
                    Helpful
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Rating;
