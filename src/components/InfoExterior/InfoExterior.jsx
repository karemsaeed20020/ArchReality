import React, { useState } from 'react';
import './InfoExterior.css';
import Header from '../Header/Header';
import { Card, Carousel } from 'react-bootstrap';
import Vector from "../../assets/mdi_favourite-border.png";
import Project1 from "../../assets/video 1 1 (10).png";
import { details1 } from '../../data/data';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const InfoExterior = () => {
    const [showMore, setShowMore] = useState(false);

    const handleMoreExteriorClick = () => {
        setShowMore(!showMore);
      };
    const allDetails = [...details1];
    
  return (
    <>
      <Header />
      <div className="shape1"></div>
        
                <Carousel controls={false} data-bs-theme="white" style={{marginTop: "20px", borderRadius: "100%"}}>
                   
                    <Carousel.Item>
                    <img
                        className="d-block w-100 slider"
                        src={Project1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h2 className="text7 text-white">Exterior Designs</h2>
                        <p className="line7 text-white">Celebrating the Artistry of Exterior Design: Where Nature  Meets Innovation, and Architectural Marvels Redefine Outdoor Spaces with Timeless Elegance and Contemporary Grandeur</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className="">
        <div className="details d-flex align-items-center justify-content-between ms-5 mt-1">
            <div className='res'>
            <h3 className="design">Exterior Designs</h3>
            <p className='desc'>
              Celebrating the Artistry of Exterior Design: Where Nature Meets Innovation, and Architectural Marvels Redefine Outdoor Spaces with Timeless Elegance and Contemporary Grandeur
            </p>

            </div>
          
          <Link to={"/favouriate"} style={{textDecoration:  "none"}}>
            <button className="btn3 me-5" style={{background: "#A8C6EA", gap: "5px", color: "#fff"}}>
              {/* {showMoreExterior ? 'less' : 'more'} */}
              favourites
              <img src={Vector} alt="" style={{width: "26px", height: "24px"}} />
            </button>
          </Link>
            
        </div>
                <div className="row mx-3">
                        {allDetails.slice(0, showMore ? allDetails.length : 6).map((detail1, i) => (
                            <div className="col-lg-4 col-md-6 mb-3" key={i}>
                                <Card style={{ border: "none", background: "transparent" }}>
                                    <Card.Img variant="top" src={detail1.image} className='cardImage' style={{borderRadius: "25px"}} />
                                    <Card.Body>
                                        <Card.Title className='cardTitle'>{detail1.title}</Card.Title>
                                        <Card.Text className='cardDetalis'>{detail1.desc}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                      </div>
      <div className='more d-flex justify-content-center mt-3' style={{borderRadius: "24px"}}>
              
                  <button style={{borderRadius: "24px", width: "286px", height: "45px"}} onClick={handleMoreExteriorClick}>{showMore ? 'Show less' : 'Show more'}</button>

            </div>
            </div>
            <Footer />
    
      
    </>
  )
}

export default InfoExterior
