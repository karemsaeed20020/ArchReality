import React, { useEffect, useMemo, useState } from "react";
import "./Info.css";
import Header from "../../components/Header/Header";
import Carousel from "react-bootstrap/Carousel";
import Project from "../../assets/video 1 1 (9).png";
import Project1 from "../../assets/video 1 1 (10).png";
import Project2 from "../../assets/video 1 1 (11).png";
import { Card, Col, Row } from "react-bootstrap";
import { ar, details, details1, exterior, interior,arModel, interior1, exterior2, exterior1 } from "../../data/data";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";

const Info = () => {
  const [showMore, setShowMore] = useState(false);
  const [allDetails, setAllDetails] = useState([]);

  // const allDetails = [...details];
  // const allDetails1 = [...ar];
  useEffect(() => {
    // Simulating data fetching with setTimeout
    const fetchData = () => {
      setTimeout(() => {
        setAllDetails(details);
      }, 1000);
    };

    fetchData();

    // Cleanup function
    return () => {
      setAllDetails([]);
    };
  }, []);

  // Memoize the 'ar' data using useMemo
  const allDetails1 = useMemo(() => [...arModel], []);
  const carouselVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };
  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };
  return (
    <>
      <Header />
      <div className="shape1"></div>

      <motion.div
        className="carousel-container"
        initial="hidden"
        animate="visible"
        variants={carouselVariants}
      >
        <Carousel
          controls={false}
          data-bs-theme="white"
          style={{
            borderRadius: "100%",
            backgroundColor: "transparent !important",
          }}
        >
          <Carousel.Item>
            <img
              className="d-block w-100 slider"
              src={Project}
              alt="First slide"
            />
            <Carousel.Caption className="caption">
              <h2 className="text6 text-white">Our projects</h2>
              <p className="line6 text-white">
                Take a look at many of the projects that our <br /> company has
                completed recently
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slider"
              src={Project1}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h2 className="text7 text-white">Exterior Designs</h2>
              <p className="line7 text-white">
                Celebrating the Artistry of Exterior Design: Where Nature Meets
                Innovation, and Architectural Marvels Redefine Outdoor Spaces
                with Timeless Elegance and Contemporary Grandeur
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slider"
              src={Project2}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h2 className="text8 zxc text-white">Interior Designs</h2>
              <p className="line8 text-white">
                Unveiling Interior Elegance: A Symphony of Design Harmonizing
                Spaces, Where Every Detail Speaks of Comfort, Style, and
                Timeless Sophistication
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </motion.div>

      <div className="" style={{ marginTop: "-10px" }}>
        <div className="details d-flex align-items-center justify-content-between ms-5 mt-1">
          <h3 className="design2">Exterior Designs</h3>
          <Link to={"/infoExterior"} style={{ textDecoration: "none" }}>
            <motion.button
              className="btn3 vc me-5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* {showMoreExterior ? 'less' : 'more'} */}
              more
            </motion.button>
          </Link>
        </div>

        <div className="row  mx-3">
          {exterior1.slice(1, 4).map((detail1, i) => (
            <motion.div
              className="col-lg-4 ce col-md-6 mb-4"
              key={i}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card style={{ border: "none", background: "transparent" }}>
                <Card.Img
                  variant="top"
                  src={detail1.image}
                  style={{ borderRadius: "25px" }}
                />
                <Card.Body>
                  <Card.Title className="cardTitle">{detail1.title}</Card.Title>
                  <Card.Text>{detail1.desc}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="" style={{ marginTop: "-50px" }}>
        <div className="details d-flex align-items-center justify-content-between ms-5 mt-2">
          <h3 className="design2">Interior Designs</h3>
          <Link to={"/infoInterior"} style={{ textDecoration: "none" }}>
            <motion.button
              className="btn3 vc me-5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* {showMoreInterior ? 'less' : 'more'} */}
              more
            </motion.button>
          </Link>
        </div>

        <div className="row mx-3">
          {/* Render details based on showMore state */}
          {interior1
            .slice(0, showMore ? allDetails.length : 3)
            .map((detail, i) => (
              <motion.div
                className="col-lg-4 col-md-6 mb-3"
                key={i}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card style={{ border: "none", background: "transparent" }}>
                  <Card.Img
                    variant="top"
                    src={detail.image}
                    className="cardImage"
                    style={{ borderRadius: "15px" }}
                  />
                  <Card.Body>
                    <Card.Title className="cardTitle">
                      {detail.title}
                    </Card.Title>
                    <Card.Text className="cardDetalis">{detail.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            ))}
        </div>
      </div>
      <div className="" style={{ marginTop: "-50px" }}>
        <div className="details d-flex align-items-center justify-content-between ms-5  mt-2">
          <h3 className="design2">Designs with AR</h3>
          <Link
            to={"/interior"}
            style={{
              textDecoration: "none",
              position: "relative",
              right: "45px",
            }}
          >
            <motion.button
              className="btn3 vc  me-3"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* {showMoreInterior ? 'less' : 'more'} */}
              more
            </motion.button>
          </Link>
        </div>

        <div className="row mx-3">
          {arModel
            .slice(0, showMore ? allDetails.length : 3)
            .map((detail, i) => (
              <motion.div
                className="col-lg-4 col-md-6 mb-3"
                key={i}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card style={{ border: "none", background: "transparent" }}>
                  {/* <h1>{detail.id}</h1> */}
                  <Card.Img
                    variant="top"
                    src={detail.image}
                    className="cardImage"
                    style={{borderRadius: "15px"}}
                  />
                  <Card.Body>
                    <Card.Title className="cardTitle">
                      {detail.title}
                    </Card.Title>
                    <Card.Text className="cardDetalis">{detail.desc}</Card.Text>
                    <motion.button
                      className="btn3 vc  me-3"
                      style={{ width: "150px" }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link
                        to={`/ARmodel/${detail.id}`}
                        style={{
                          textDecoration: "none",
                          
                        }}
                      >
                        Go to detail
                      </Link>
                    </motion.button>
                  </Card.Body>
                </Card>
              </motion.div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Info;
