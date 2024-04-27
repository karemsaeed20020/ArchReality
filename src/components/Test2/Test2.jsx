import React, { useEffect, useRef, useState } from "react";
import styles from "./Test.module.css"; // Import CSS module
import Header from "../../components/Header/Header";
import Contact from "../../assets/Rectangle 17.png";
import Frame1 from "../../assets/Frame 3879.png";
import Frame2 from "../../assets/noun_Phone_3612570 1.png";
import Frame3 from "../../assets/noun_Email_247564 1.png";
import { motion } from "framer-motion";

const Test2 = () => {
 
  return (
    <>
      <Header />
      <div className={styles.container}>
            
        <div className={styles.details}>
            <div className={styles.contact}>
            <img src={Contact} alt="" />
            <h1>Contact</h1>
            </div>

        </div>

      </div>

    </>
  );
};

export default Test2;
