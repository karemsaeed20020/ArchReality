import React, { useEffect, useState } from "react";
import styles from "./PropertyDetail.module.css"; // assuming you use CSS Modules
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaKitchenSet } from "react-icons/fa6";
import { MdOutlineBedroomChild } from "react-icons/md";
import { GiSaloon } from "react-icons/gi";
import { LuSofa } from "react-icons/lu";
import { FaBath } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";
import Image78 from "../../assets/Master_Pic.png";
import Image79 from "../../assets/Modela1.png";
import Image80 from "../../assets/Modela2.png";
import Image81 from "../../assets/Modela3.png";
import Image82 from "../../assets/Modela4.png";
import Image83 from "../../assets/Model1.jpg";
import Image84 from "../../assets/Master_Pic(1).png";
import Image85 from "../../assets/Model2.jpg";
import Image86 from "../../assets/Modelb1.png";
import Image87 from "../../assets/Modelb2.png";
import Image88 from "../../assets/Modelb3.png";
import Image89 from "../../assets/Modelb4.png";
import Image90 from "../../assets/Master(1)_Pic.png";
import Image91 from "../../assets/Modelc1.png";
import Image92 from "../../assets/Modelc2.png";
import Image93 from "../../assets/Modelc3.png";
import Image94 from "../../assets/Modelc4.png";
import Image95 from "../../assets/Modelc5.png";
import Image96 from "../../assets/Model3.jpg";

const PropertyDetail = () => {
  const [open, setOpen] = useState(false);
  const [openQr, setOpenQr] = useState(false);
  const [model, setModel] = useState([]);
  const { id } = useParams();

  const Model1 = [Image78, Image79, Image80, Image81, Image82];
  const Model2 = [Image84, Image86, Image87, Image88, Image89];
  const Model3 = [Image90,Image91, Image92, Image93, Image94, Image95];

  useEffect(() => {
    if (id === "1") {
      setModel(Model1);
    } else if (id === "2") {
      setModel(Model2);
    } else {
      setModel(Model3);
    }
  }, [id]);

  return (
    <>
      <div className={styles.container}>
        <div
          style={{
            width: "60%",
            backgroundColor: "#F8EDD9",
            borderRadius: "20px",
            padding: "15px",
            paddingBottom: "0",
          }}
        >
          <div className={styles.header}>
            <h1 style={{ fontWeight: "700" }}>Royal Hotel</h1>
            <motion.button
              className="btn3 vc  me-3"
              style={{ width: "150px" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <h3 className={styles.favouriteButton}>favourite ♥</h3>
            </motion.button>
          </div>
          <h5 style={{ color: "#A7A7A7" }}>Interior Design</h5>

          <div className={styles.mainImageContainer}>
            <img
              src={id === "1" ? Image78 : id === "2" ? Image84 : Image90}
              alt="Main"
              className={styles.mainImage}
              onClick={() => setOpen(true)}
            />
          </div>

          <div
            className={styles.imagesContainer}
            style={{ position: "relative" }}
          >
            {model.slice(0, 3).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={styles.thumbnail}
                onClick={() => setOpen(true)}
              />
            ))}
            <div
              className={styles.moreImages}
              style={{
                position: "absolute",
                left: "0",
                right: "0",
                height: "100%",
                borderRadius: "14px",
                marginLeft: "auto",
              }}
              onClick={() => setOpen(true)}
            >
              +{model.length - 3}
            </div>
          </div>

          <button
            className={styles.viewInARButton}
            style={{ position: "unset" }}
            onClick={() => setOpenQr(true)}
          >
            View in AR
          </button>
        </div>

        <div className={styles.details} style={{ width: "40%" }}>
          {/* <div className={styles.similarDesigns}>
          <h3>Similar designs</h3>
          <div className={styles.similarImagesContainer}>
            {similarDesigns.map((design, index) => (
              <div key={index} className={styles.similarImageWrapper}>
                <img
                  src={design.image}
                  alt={design.title}
                  className={styles.similarImage}
                />
                <p>{design.title}</p>
              </div>
            ))}
          </div>
        </div> */}
          <div className={styles.propertyDescription}>
            <h1 style={{ fontWeight: "700", textDecoration: "underline" }}>
              Royal hotel
            </h1>
            <p style={{ lineHeight: "24px" }}>
              Discover a world of timeless elegance and refined luxury at The
              Royal Hotel, where every detail is crafted to provide an
              unforgettable experience.
            </p>
            <ul className={styles.propertyDetailsList}>
              <li>
                <MdOutlineBedroomChild style={{ marginRight: "10px" }} />
                12 Bedroom
              </li>
              <li>
                <GiSaloon style={{ marginRight: "10px" }} />5 Salon
              </li>
              <li>
                <FaKitchenSet style={{ marginRight: "10px" }} />3 Kitchens
              </li>
              <li>
                <LuSofa style={{ marginRight: "10px" }} />9 Living Rooms
              </li>
              <li>
                <FaBath style={{ marginRight: "10px" }} />6 Bathrooms
              </li>
            </ul>
          </div>
        </div>
      </div>
      {open && (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#80808080",
            position: "absolute",
            top: "0",
          }}
          onClick={() => setOpen(false)}
        >
          <div
            style={{
              width: "80%",
              top: "5rem",
              position: "absolute",
              left: "0px",
              right: "0px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "5rem",
              marginBottom: "20rem",
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <Carousel data-bs-theme="dark" style={{ height: "29rem" }}>
              {model.map((image, index) => (
                <Carousel.Item style={{ height: "30rem" }}>
                  <img
                    className={`d-block  w-100`}
                    key={index}
                    src={image}
                    alt="First slide"
                    style={{ height: "30rem" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      )}
      {openQr && (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#80808080",
            position: "absolute",
            top: "0",
          }}
          onClick={() => setOpenQr(false)}
        >
          <img
            className={`d-block  ${styles.qrCode}`}
            src={id === 1 ? Image83 : id === 2 ? Image85 : Image96}
            alt="First slide"
            style={{ height: "30rem", marginTop: "10rem" }}
          />
        </div>
      )}
    </>
  );
};

export default PropertyDetail;
