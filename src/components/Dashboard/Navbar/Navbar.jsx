import React from 'react';
import a from '../../../assets/Rectangle 273.png';
import b from '../../../assets/Group 3.png';
import './navbar.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css'

const Navbar = () => {
    
    const profilePage1 = useSelector(state => state.user.profilePage);

  return (
    <div>
      <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid  px-5">
    <img src={a}  alt="" className={`${styles.address} mx-1 address`} style={{width: "64px", height: "65px"}} />
    <Link to={'/dashboard'} className="navbar-brand" style={{fontSize: "28px", fontWeight: "700", lineHeight: "28px"}}>Archreality</Link>
    <button class={`${styles.n} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto gap-3">
        <img src={b} style={{width: "50px", height: "50px"}} alt="" />
        <Link to={'/setting'} style={{textDecoration: "none"}}><img src={profilePage1} style={{width: "50px", height :"50px", borderRadius: "50%"}} alt="" /></Link>
        
        <div style={{display: "flex" ,flexDirection: "column"}}>
            <span style={{color: "#000", fontSize: "22px", fontWeight: "700"}}>Sara Ahmed</span>
            <span style={{color: "#808080"}}>Admin</span>
        </div>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
