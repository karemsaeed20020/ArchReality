// import React, { useState } from "react";
// import Header from "../Header/Header";
// import "./Favouriate.css";
// import Footer from "../Footer/Footer";
// import { Card } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { details } from "../../data/data";
// import { details1 } from "../../data/data";
// import { motion } from "framer-motion";





// const Favouriate = () => {
//   const [showMoreInterior, setShowMoreInterior] = useState(false);
//   const [showMoreExterior, setShowMoreExterior] = useState(false);
//   const [showMore, setShowMore] = useState(false);

//   const allDetails = [...details];

//   const handleMoreInteriorClick = () => {
//     setShowMoreInterior(!showMoreInterior);
//   };

//   const handleMoreExteriorClick = () => {
//     setShowMoreExterior(!showMoreExterior);
//   };

  
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
//           <Link to={"/interior"} style={{textDecoration:  "none"}}>
//             <button className="btn2 me-5" style={{background: "#D8D8D8", color: "#283D4F"}}>
//               {/* {showMoreInterior ? 'less' : 'more'} */}
//               more
//             </button>
//           </Link>
//         </div>

//         <div className="row mx-3">
//           {/* Render details based on showMore state */}
//           {allDetails
//             .slice(0, showMore ? allDetails.length : 3)
//             .map((detail, i) => (
//               <div className="col-lg-4 col-md-6 mb-3" key={i}>
//                 <Card style={{ border: "none", background: "transparent" }}>
//                   <Card.Img
//                     variant="top"
//                     src={detail.image}
//                     className="cardImage"
//                     style={{borderRadius: "20px"}}
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

//       <div className="page1">
//         <div className="details d-flex align-items-center justify-content-between ms-5 mt-1">
//           <h3 className="design">Exterior Designs</h3>
//           <Link to={"/exterior"} style={{textDecoration:  "none"}}>
//             <button className="btn2 me-5" style={{background: "#D8D8D8", color: "#283D4F"}}>
//               {/* {showMoreExterior ? 'less' : 'more'} */}
//               more
//             </button>
//           </Link>
//         </div>

//         <div className="row mx-3">
//           {details1.slice(1, 4).map((detail1, i) => (
//             <div className="col-lg-4 col-md-6 mb-4" key={i}>
//               <Card style={{ border: "none", background: "transparent" }}>
//                 <Card.Img variant="top" src={detail1.image} style={{borderRadius: "20px"}} />
//                 <Card.Body>
//                   <Card.Title className="cardTitle">{detail1.title}</Card.Title>
//                   <Card.Text>{detail1.desc}</Card.Text>
//                 </Card.Body>
//               </Card>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Favouriate;

import React, { useState } from "react";
import Header from "../Header/Header";
import "./Favouriate.css";
import Footer from "../Footer/Footer";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { details, details1 } from "../../data/data";
import { motion } from "framer-motion";

const Favouriate = () => {
  const [showMoreInterior, setShowMoreInterior] = useState(false);
  const [showMoreExterior, setShowMoreExterior] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const allDetails = [...details];

  const handleMoreInteriorClick = () => {
    setShowMoreInterior(!showMoreInterior);
  };

  const handleMoreExteriorClick = () => {
    setShowMoreExterior(!showMoreExterior);
  };

  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="interior-exterior-toggle-wrapper mt-4 my-sm-5 w-sm-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="page"
      >
        <div className="details d-flex align-items-center justify-content-between ms-5 mt-2">
          <h3 className="design">Interior Designs</h3>
          <Link to={"/interior"} style={{ textDecoration: "none" }}>
            <motion.button
              className="btn2 me-5"
              style={{ background: "#D8D8D8", color: "#283D4F" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleMoreInteriorClick}
            >
              more
            </motion.button>
          </Link>
        </div>

        <div className="row mx-3">
          {allDetails.slice(0, showMore ? allDetails.length : 3).map((detail, i) => (
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
                  style={{ borderRadius: "20px" }}
                />
                <Card.Body>
                  <Card.Title className="cardTitle">{detail.title}</Card.Title>
                  <Card.Text className="cardDetalis">{detail.desc}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="page1"
      >
        <div className="details d-flex align-items-center justify-content-between ms-5 mt-1">
          <h3 className="design">Exterior Designs</h3>
          <Link to={"/exterior"} style={{ textDecoration: "none" }}>
            <motion.button
              className="btn2 me-5"
              style={{ background: "#D8D8D8", color: "#283D4F" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleMoreExteriorClick}
            >
              more
            </motion.button>
          </Link>
        </div>

        <div className="row mx-3">
          {details1.slice(1, 4).map((detail1, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="col-lg-4 col-md-6 mb-4"
            >
              <Card style={{ border: "none", background: "transparent" }}>
                <Card.Img variant="top" src={detail1.image} style={{ borderRadius: "20px" }} />
                <Card.Body>
                  <Card.Title className="cardTitle">{detail1.title}</Card.Title>
                  <Card.Text>{detail1.desc}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Favouriate;

