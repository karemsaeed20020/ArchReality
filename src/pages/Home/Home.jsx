import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Hero from '../../assets/Pexels Photo by Expect Best.png';
import Frame from '../../assets/Ellipse 129.png';
import Footer from '../../components/Footer/Footer';


const Home = () => {
  return (
    <>
          <Header />  
          <div className='hero'>
            <h1 className='contact1 text-white'>The best design for you</h1>
            <p className='txt'>
            Welcome to the future of architectural innovation, where precision meets imagination, and efficiency intertwines seamlessly with creativity
            </p>
            <img src={Hero} alt="" className='img' />
            <img src={Frame} alt="" className='img1' />
            <Footer />
          </div>          
    </>
  )
}

export default Home
