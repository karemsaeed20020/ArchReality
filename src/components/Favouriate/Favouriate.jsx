import React, { useState } from "react";
import Header from "../Header/Header";
import "./Favouriate.css";
import Footer from "../Footer/Footer";
import Image1 from "../../assets/video 1 1.png";
import Image2 from "../../assets/video 1 1 (1).png";
import Image3 from "../../assets/video 1 1 (2).png";
import Image4 from "../../assets/video 1 1 (5).png";
import Image5 from "../../assets/video 1 1 (4).png";
import Image6 from "../../assets/video 1 1 (3).png";
import Image7 from "../../assets/Rectangle 829.png";
import { Card, Button } from "react-bootstrap";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { details } from "../../data/data";
import { details1 } from "../../data/data";
import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "react-id-swiper";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === allDetails.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? allDetails.length - 1 : slide - 1);
  };
  // const Carousel = ({ data }) => {
  //   const [slide, setSlide] = useState(0);

  //   const nextSlide = () => {
  //     setSlide(slide === data.length - 1 ? 0 : slide + 1);
  //   };

  //   const prevSlide = () => {
  //     setSlide(slide === 0 ? data.length - 1 : slide - 1);
  //   };

  //   return (
  //     <div className="carousel">
  //       <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
  //       {data.map((item, idx) => {
  //         return (
  //           <img
  //             src={item.image}
  //             alt={item.title}
  //             key={idx}
  //             className={slide === idx ? "slide" : "slide slide-hidden"}
  //           />
  //         );
  //       })}
  //       <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
  //       <span className="indicators">
  //         {data.map((_, idx) => {
  //           return (
  //             <button
  //               key={idx}
  //               className={
  //                 slide === idx ? "indicator" : "indicator indicator-inactive"
  //               }
  //               onClick={() => setSlide(idx)}
  //             ></button>
  //           );
  //         })}
  //       </span>
  //     </div>
  //   );
  // };

  // const SliderComponent = ({ data }) => {
  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //   };

  //   return (
  //     <Slider {...settings}>
  //       {data.map((item, idx) => (
  //         <div key={idx}>
  //           <Card style={{ border: "none", background: "transparent" }}>
  //             <Card.Img variant="top" src={item.image} className="cardImage" />
  //             <Card.Body>
  //               <Card.Title className="cardTitle">{item.title}</Card.Title>
  //               <Card.Text className="cardDetails">{item.desc}</Card.Text>
  //             </Card.Body>
  //           </Card>
  //         </div>
  //       ))}
  //     </Slider>
  //   );
  // };

  // const swiperParams = {
  //   slidesPerView: 3,
  //   spaceBetween: 30,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  // };
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <Header />
      <div className="interior-exterior-toggle-wrapper mt-4 my-sm-5 w-sm-10">
        <div className="interior-exterior-toggle w-sm-0" style={{ zIndex: -1 }}>
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
        </div>
      </div>
      {/* <div className='page' style={{height: "71vh", width: "100%"}}>

          <div className='details d-flex align-items-center justify-content-between '>
            
            <h3 className='design ms-5 mt-3'>Interior Designs</h3>
            <button className='btn2 me-5'>more</button>


          </div>
          <div className='d-flex align-items-center justify-content-center mx-3'>

            {details.map((detail, i) => (
              <div className="card" style={{width: "50rem", background: "none", border: "none"}}>
                <img src={detail.image} className="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 className="card-title">{detail.title}</h5>
                  <p className="card-text">{detail.desc}</p>
                
                </div>
              </div>
              
            ))};
          </div>
        </div>
        <div className='page1' style={{ height: "71vh", width: "100%", position:"absolute", top: "1000px"}}>

          <div className='details d-flex align-items-center justify-content-between '>
            
            <h3 className='design ms-5 mt-1'>Exterior Designs</h3>
            <button className='btn2 me-5'>more</button>


          </div>
          <div className='d-flex align-items-center justify-content-center mx-3'>

            {details1.map((detail1, i) => (
              <div className="card" style={{width: "50rem", background: "none", border: "none"}}>
                <img src={detail1.image} className="card-img-top" alt="..." />
                <div class="card-body"> 
                  <h5 className="card-title">{detail1.title}</h5>
                  <p className="card-text">{detail1.desc}</p>
                
                </div>
              </div>
            ))};
          </div>
        </div> */}
      <div className="page">
        <div className="details d-flex align-items-center justify-content-between ms-5 mt-2">
          <h3 className="design">Interior Designs</h3>
          <Link to={"/interior"} style={{textDecoration:  "none"}}>
            <button className="btn2 me-5" style={{background: "#D8D8D8", color: "#283D4F"}}>
              {/* {showMoreInterior ? 'less' : 'more'} */}
              more
            </button>
          </Link>
        </div>

        <div className="row mx-3">
          {/* Render details based on showMore state */}
          {allDetails
            .slice(0, showMore ? allDetails.length : 3)
            .map((detail, i) => (
              <div className="col-lg-4 col-md-6 mb-3" key={i}>
                <Card style={{ border: "none", background: "transparent" }}>
                  <Card.Img
                    variant="top"
                    src={detail.image}
                    className="cardImage"
                    style={{borderRadius: "20px"}}
                  />
                  <Card.Body>
                    <Card.Title className="cardTitle">
                      {detail.title}
                    </Card.Title>
                    <Card.Text className="cardDetalis">{detail.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          {/* <SliderComponent data={allDetails} /> */}
        </div>
      </div>

      <div className="page1">
        <div className="details d-flex align-items-center justify-content-between ms-5 mt-1">
          <h3 className="design">Exterior Designs</h3>
          <Link to={"/exterior"} style={{textDecoration:  "none"}}>
            <button className="btn2 me-5" style={{background: "#D8D8D8", color: "#283D4F"}}>
              {/* {showMoreExterior ? 'less' : 'more'} */}
              more
            </button>
          </Link>
        </div>

        <div className="row mx-3">
          {details1.slice(1, 4).map((detail1, i) => (
            <div className="col-lg-4 col-md-6 mb-4" key={i}>
              <Card style={{ border: "none", background: "transparent" }}>
                <Card.Img variant="top" src={detail1.image} style={{borderRadius: "20px"}} />
                <Card.Body>
                  <Card.Title className="cardTitle">{detail1.title}</Card.Title>
                  <Card.Text>{detail1.desc}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favouriate;
