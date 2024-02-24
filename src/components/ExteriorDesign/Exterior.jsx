// import { Card } from "react-bootstrap";
// import Header from "../Header/Header";
// import "./Exterior.css";
// import { details1 } from "../../data/data";
// import { useState } from "react";
// import Footer from "../Footer/Footer";

// const Exterior = () => {
//   const [showMore, setShowMore] = useState(false);

//   const handleMoreExteriorClick = () => {
//     setShowMore(!showMore);
//   };
//   const allDetails = [...details1];

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

//       <div className="page1">
//         <div className="details d-flex align-items-center justify-content-between ms-5 mt-1">
//           <h3 className="design">Exterior Designs</h3>
//         </div>

//         <div className="row mx-3">
//           {allDetails
//             .slice(0, showMore ? allDetails.length : 6)
//             .map((detail1, i) => (
//               <div className="col-lg-4 col-md-6 mb-3" key={i}>
//                 <Card style={{ border: "none", background: "transparent" }}>
//                   <Card.Img
//                     variant="top"
//                     src={detail1.image}
//                     className="cardImage"
//                     style={{ borderRadius: "20px" }}
//                   />
//                   <Card.Body>
//                     <Card.Title className="cardTitle">
//                       {detail1.title}
//                     </Card.Title>
//                     <Card.Text className="cardDetalis">
//                       {detail1.desc}
//                     </Card.Text>
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
//           onClick={handleMoreExteriorClick}
//         >
//           {showMore ? "Show less" : "Show more"}
//         </button>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Exterior;

import { Card } from "react-bootstrap";
import Header from "../Header/Header";
import "./Exterior.css";
import { details1 } from "../../data/data";
import { useState } from "react";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

const Exterior = () => {
  const [showMore, setShowMore] = useState(false);

  const handleMoreExteriorClick = () => {
    setShowMore(!showMore);
  };
  const allDetails = [...details1];

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

      <div className="page1">
        <div className="details d-flex align-items-center justify-content-between ms-5 mt-1">
          <h3 className="design">Exterior Designs</h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="row mx-3"
        >
          {allDetails
            .slice(0, showMore ? allDetails.length : 6)
            .map((detail1, i) => (
              <div className="col-lg-4 col-md-6 mb-3" key={i}>
                <Card style={{ border: "none", background: "transparent" }}>
                  <Card.Img
                    variant="top"
                    src={detail1.image}
                    className="cardImage"
                    style={{ borderRadius: "20px" }}
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
              </div>
            ))}
        </motion.div>
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
          onClick={handleMoreExteriorClick}
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

export default Exterior;

