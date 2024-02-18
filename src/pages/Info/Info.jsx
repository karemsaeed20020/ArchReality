    import React, { useState } from "react";
    import "./Info.css";
    import Header from "../../components/Header/Header";
    import Carousel from "react-bootstrap/Carousel";
    import Project from "../../assets/video 1 1 (9).png";
    import Project1 from "../../assets/video 1 1 (10).png";
    import Project2 from "../../assets/video 1 1 (11).png";
    import { Card, Col, Row } from "react-bootstrap";
    import { ar, details, details1 } from "../../data/data";
    import { Link } from "react-router-dom";
    import Footer from "../../components/Footer/Footer";

    const Info = () => {
        const [showMore, setShowMore] = useState(false);

    const allDetails = [...details];
    const allDetails1 = [...ar];
    return (
        <>
        <Header />
            <div className="shape1"></div>
            
                    <Carousel controls={false} data-bs-theme="white" style={{marginTop: "20px", borderRadius: "100%"}}>
                        <Carousel.Item>
                        <img className="d-block w-100 slider" src={Project} alt="First slide" />
                        <Carousel.Caption className="caption">
                            <h2 className="text6 text-white">Our projects</h2>
                            <p className="line6 text-white">Take a look at many of the projects that our <br /> company has completed recently</p>
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
                            <p className="line7 text-white">Celebrating the Artistry of Exterior Design: Where Nature  Meets Innovation, and Architectural Marvels Redefine Outdoor Spaces with Timeless Elegance and Contemporary Grandeur</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                            className="d-block w-100 slider"
                            src={Project2}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h2 className="text8 text-white">Interior Designs</h2>
                            <p className="line8 text-white">
                            Unveiling Interior Elegance: A Symphony of Design Harmonizing Spaces, Where Every Detail Speaks of Comfort, Style, and Timeless Sophistication
                            </p>
                        </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
            
        <div className=""style={{marginTop: "-10px"}}>
            <div className="details d-flex align-items-center justify-content-between ms-5 mt-1">
            <h3 className="design2">Exterior Designs</h3>
            <Link to={"/infoExterior"} style={{textDecoration:  "none"}}>
                <button className="btn3 me-5">
                {/* {showMoreExterior ? 'less' : 'more'} */}
                more
                </button>
            </Link>
            </div>

            <div className="row mx-3">
            {details1.slice(1, 4).map((detail1, i) => (
                <div className="col-lg-4 col-md-6 mb-4" key={i}>
                <Card style={{ border: "none", background: "transparent"}}>
                    <Card.Img variant="top" src={detail1.image} style={{borderRadius: "25px"}} />
                    <Card.Body>
                    <Card.Title className="cardTitle">{detail1.title}</Card.Title>
                    <Card.Text>{detail1.desc}</Card.Text>
                    </Card.Body>
                </Card>
                </div>
            ))}
            </div>
        </div>
        <div className="" style={{marginTop: "-50px"}}>
            <div className="details d-flex align-items-center justify-content-between ms-5 mt-2">
            <h3 className="design2">Interior Designs</h3>
            <Link to={"/infoInterior"} style={{textDecoration:  "none"}}>
                <button className="btn3 me-5">
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
        <div className="" style={{marginTop: "-50px"}}>
            <div className="details d-flex align-items-center justify-content-between ms-5  mt-2">
            <h3 className="design2">Designs with AR</h3>
            <Link to={"/interior"} style={{textDecoration:  "none", position: "relative", right: "45px"}}>
                <button className="btn3 me-3">
                {/* {showMoreInterior ? 'less' : 'more'} */}
                more
                </button>
            </Link>
            </div>

            <div className="row mx-3">
            {/* Render details based on showMore state */}
            {allDetails1
                .slice(0, showMore ? allDetails.length : 3)
                .map((detail, i) => (
                <div className="col-lg-4 col-md-6 mb-3" key={i}>
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
                </div>
                ))}
            {/* <SliderComponent data={allDetails} /> */}
            </div>
        </div>
        <Footer />
        </>
    );
    };

    export default Info;
