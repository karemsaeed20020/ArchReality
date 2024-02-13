// import React from 'react';
// import './Footer.css';
// import Logo from '../../assets/Dummy Logo.png'

// const Footer = () => {
//   return (
//     <>
//       <footer className="modern-3-column-dark">
//             <div className="modern-3-column-light">
//               <div className="rectangle" />
//               <div className="modern-column-frame">
//                 <img
//                   className="tagline-container-icon"
//                   loading="eager"
//                   alt=""
//                   src={Logo}
//                   style={{width: "43px", height: "64px"}}
//                 />
//                 <div className="modern-column-frame-light">
//                   <div className="tagline">
//                     A company of designing architecture with AR
//                   </div>
//                 </div>
//               </div>
//               <div className="modern-3-column-light-inner">
//                 <div className="title-parent">
//                   <div className="title">Services</div>
//                   <div className="list">
//                     <p className="design-plans">Design plans</p>
//                     <p className="interior-design">Interior design</p>
//                     <p className="exterior-design">Exterior design</p>
//                     <p className="ar-models">AR models</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="show-all-button-wrapper">
//                 <div className="show-all-button">
//                   <div className="title1">Follow us</div>
//                   <div className="list1">
//                     <p className="facebook">Facebook</p>
//                     <p className="twitter">Twitter</p>
//                     <p className="instagram">Instagram</p>
//                     <p className="linkedin">Linkedin</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="modern-column-dark-frame1">
//                 <div className="title-group">
//                   <div className="title2">Contact us</div>
//                   <div className="list2">arcreality@gmail.com</div>
//                 </div>
//               </div>
//               </div>
//           </footer>
//     </>
//   )
// }

// export default Footer
import React from 'react';
import './Footer.css';
import Logo from '../../assets/Dummy Logo.png';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer-content'>
        <img src={Logo} alt="" style={{width: "43px", height: "64px"}} />
        <p>A company of designing <br /> architecture with AR</p>
      </div>
      <div className='footer-content'>
        <h4>Services</h4>
        <ul>
          <li><a href="#">Design plans</a></li>
          <li><a href="#">Interior design</a></li>
          <li><a href="#">Exterior design</a></li>
          <li><a href="#">AR models</a></li>
        </ul>
      </div>
      <div className='footer-content'>
        <h4>Follow us</h4>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Linkedin</a></li>
        </ul>
      </div>
      <div className='footer-content'>
        <h4>Contact us</h4>
        <ul>
          <li><a href="#">arcreality@gmail.com</a></li>
        </ul>
      </div>


    </section>
  );
}

export default Footer;
