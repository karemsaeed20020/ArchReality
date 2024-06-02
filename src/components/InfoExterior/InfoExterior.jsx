import React, { useState } from "react";
import "./InfoExterior.css";
import Header from "../Header/Header";
import { Card, Carousel } from "react-bootstrap";
import Vector from "../../assets/mdi_favourite-border.png";
import Project1 from "../../assets/video 1 1 (10).png";
import { details1, exterior } from "../../data/data";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

const InfoExterior = () => {
  const [showMore, setShowMore] = useState(false);
  

  const handleMoreExteriorClick = () => {
    setShowMore(!showMore);
  };
  const allDetails = [...details1];
  const carouselVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };
  

  return (
    <>
      <Header />
      <div className="shape1"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={carouselVariants}
      >
        <Carousel
          controls={false}
          data-bs-theme="white"
          style={{ marginTop: "20px", borderRadius: "100%" }}
        >
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
                Innovation, and Architectural Marvels Redefine Outdoor Spaces with
                Timeless Elegance and Contemporary Grandeur
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </motion.div>
      <div className="">
        <div className="details d-flex align-items-center justify-content-between ms-5 mt-1">
          <div className="res">
            <h3 className="design">Exterior Designs</h3>
            <p className="desc">
              Celebrating the Artistry of Exterior Design: Where Nature Meets
              Innovation, and Architectural Marvels Redefine Outdoor Spaces with
              Timeless Elegance and Contemporary Grandeur
            </p>
          </div>

          <Link to={"/exterior"} style={{ textDecoration: "none" }}>
            <motion.button
              className="btn3 me-5"
              style={{ background: "#A8C6EA", gap: "5px", color: "#fff" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* {showMoreExterior ? 'less' : 'more'} */}
              favourites
              <img
                src={Vector}
                alt=""
                style={{ width: "26px", height: "24px" }}
                className="hover:text-red"
              />
            </motion.button>
          </Link>
        </div>
        <div className="row mx-3">
          {exterior
            .slice(4, showMore ? exterior.length : 13)
            .map((detail1, i) => (
              <motion.div className="col-lg-4 col-md-6 mb-3" key={i} initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}  >
                <Card style={{ border: "none", background: "transparent" }}>
                  <Card.Img
                    variant="top"
                    src={detail1.image}
                    className="cardImage"
                    style={{ borderRadius: "25px" }}
                  />
                  <Card.Body>
                    <Card.Title className="cardTitle">
                      {detail1.title}
                    </Card.Title>
                    <Card.Text className="cardDetalis">
                      {detail1.desc}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            ))}
        </div>
        <div
          className="more d-flex justify-content-center mt-3"
          style={{ borderRadius: "24px" }}
        >
          <motion.button
            style={{ borderRadius: "24px", width: "286px", height: "45px"}}
            onClick={handleMoreExteriorClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="test et"
          >
            {showMore ? "Show less" : "Show more"}
          </motion.button>
        </div>
      </div>
      <Footer />
      
    </>
  );
};

export default InfoExterior;
