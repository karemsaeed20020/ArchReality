// import React, { useState } from "react";
// import "./Interior.css";
// import Header from "../Header/Header";
// import { Card } from "react-bootstrap";
// import { details } from "../../data/data";
// import Footer from "../Footer/Footer";

// const Interior = () => {
//   const [showMore, setShowMore] = useState(false);

//   const handleMoreInteriorClick = () => {
//     setShowMore(!showMore);
//   };
//   const allDetails = [...details];

//   return (
//     <>
//       <Header />
//       <div className="interior-exterior-toggle-wrapper mt-4 my-sm-5 w-sm-10">
//         <div className="interior-exterior-toggle w-sm-0" style={{ zIndex: -1 }}>
//           <div className="favourites-label" />
//           <div className="redefined-text">
//             <div className="redefined-text-child" />
//             <h1 className="favouriates">Favouriates</h1>
//             <div className="elegance-redefined-showcasing-wrapper">
//               <div className="elegance-redefined-showcasing">
//                 Elegance Redefined: Showcasing Favorite Designs, Where Every
//                 Line, Color, and Detail Weaves Together a Tale of Timeless
//                 Beauty and Personal Expression
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="page">
//         <div className="details d-flex align-items-center justify-content-between ms-5 mt-2">
//           <h3 className="design">Interior Designs</h3>
//         </div>
//         <div className="row mx-3">
//           {/* Render details based on showMore state */}
//           {allDetails
//             .slice(0, showMore ? allDetails.length : 6)
//             .map((detail, i) => (
//               <div className="col-lg-4 col-md-6 mb-3" key={i}>
//                 <Card style={{ border: "none", background: "transparent" }}>
//                   <Card.Img
//                     variant="top"
//                     src={detail.image}
//                     className="cardImage"
//                   />
//                   <Card.Body>
//                     <Card.Title className="cardTitle">
//                       {detail.title}
//                     </Card.Title>
//                     <Card.Text className="cardDetalis">{detail.desc}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               </div>
//             ))}
//         </div>
//       </div>
//       <div
//         className="more d-flex justify-content-center mt-3"
//         style={{ borderRadius: "24px" }}
//       >
//         <button
//           style={{ borderRadius: "24px", width: "286px", height: "45px" }}
//           onClick={handleMoreInteriorClick}
//         >
//           {showMore ? "Show less" : "Show more"}
//         </button>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Interior;

import React, { useState } from "react";
import "./Interior.css";
import Header from "../Header/Header";
import { Card } from "react-bootstrap";
import { details } from "../../data/data";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

const Interior = () => {
  const [showMore, setShowMore] = useState(false);

  const handleMoreInteriorClick = () => {
    setShowMore(!showMore);
  };
  const allDetails = [...details];

  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="interior-exterior-toggle-wrapper mt-4 my-sm-5 w-sm-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="interior-exterior-toggle w-sm-0"
          style={{ zIndex: -1 }}
        >
          <div className="favourites-label" />
          <div className="redefined-text">
            <div className="redefined-text-child" />
            <h1 className="favouriates">Favouriates</h1>
            <div className="elegance-redefined-showcasing-wrapper">
              <div className="elegance-redefined-showcasing">
                Elegance Redefined: Showcasing Favorite Designs, Where Every
                Line, Color, and Detail Weaves Together a Tale of Timeless
                Beauty and Personal Expression
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className="page">
        <div className="details d-flex align-items-center justify-content-between ms-5 mt-2">
          <h3 className="design">Interior Designs</h3>
        </div>
        <div className="row mx-3">
          {/* Render details based on showMore state */}
          {allDetails
            .slice(0, showMore ? allDetails.length : 6)
            .map((detail, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="col-lg-4 col-md-6 mb-3"
              >
                <Card style={{ border: "none", background: "transparent" }}>
                  <Card.Img
                    variant="top"
                    src={detail.image}
                    className="cardImage"
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1 }}
        className="more d-flex justify-content-center mt-3"
        style={{ borderRadius: "24px" }}
      >
        <motion.button
          style={{ borderRadius: "24px", width: "286px", height: "45px" }}
          onClick={handleMoreInteriorClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showMore ? "Show less" : "Show more"}
        </motion.button>
      </motion.div>
      <Footer />
    </>
  );
};

export default Interior;
