// import React, { useState } from 'react';
// import Test2 from '../../assets/architecture-1048092_1280.jpg';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
// import { Spinner } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';


// const OtpInput = () => {
//     const [emailSubmitted, setEmailSubmitted] = useState(false);
//     const navigate = useNavigate();
//     const [otp, setOtp] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('https://arch-reality.onrender.com/api/auth/resetPass', { otp })
//             .then(res => {
//                 // Handle the response from the OTP verification API
//                 console.log(res.data);
//                 if (res.status === 200) {
//                     setEmailSubmitted(true);
//                     navigate('/reset-password');
//                 }
//             }).catch(err => {
//                 console.log(err);
//                 // Handle errors
//             })
//     };

//     return (
//         <div className="containers pt-5">
//             <div className="row">
//                 <div className="fe col-lg-6 order-lg-2 order-1 pt-5">
//                     <h2 className="main-text mb-5 pt-5 mt-5">Reset <br /> Your Password</h2>
//                     {/* <p className="mb-5 mt-3 text-black">An OTP has been sent to your email</p> */}
//                     <form onSubmit={handleSubmit}>
//                         <input type="text" placeholder="Enter Your Email" className="form-control main-input mt-3" value={otp} onChange={(e) => setOtp(e.target.value)} />
//                         <input type="password" placeholder="Enter New Password" className="form-control main-input mt-3" value={otp} onChange={(e) => setOtp(e.target.value)} />
//                         <input type="password" placeholder="Enter A Confirm Password" className="form-control main-input mt-3" value={otp} onChange={(e) => setOtp(e.target.value)} />
//                         <button className="p-2 btn btn-sz-primary d-flex align-items-center" onClick={handleSubmit}>
//                                         Submit
//                                     </button>
//                     </form>
//                 </div>
//                 <div className="col-lg-6 order-lg-1 order-2 text-center">
//                     {/* Display image or visual */}
//                     <img src={Test2} alt="" className="img-fluid" style={{ height: "102vh" }} />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default OtpInput;

// import React, { useState } from 'react';
// import Test222 from '../../assets/All-over-color-for-an-affordable-home-office-interior-design.jpeg';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Spinner } from 'react-bootstrap';
// import { useDispatch } from 'react-redux';
// import './Test.module.css';

// const ResetPassword = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
//     const [emailSubmitted, setEmailSubmitted] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');
//         setLoading(true);
        
//         try {
//             const response = await axios.put('https://arch-reality.onrender.com/api/auth/resetPass', {
//                 email,
//                 password: password, // Assuming the API expects "password" field
//                 cPassword: confirmPassword // Change "confirmPassword" to "cPassword"
//             });
            
//             if (response.status === 200) {
//                 setLoading(false);
//                 setEmailSubmitted(true);
//                 navigate('/login'); // Navigate to success page
//             }
//         } catch (err) {
//             setLoading(false);
//             setError('An error occurred. Please try again.'); // Display error message
//         }
//     };

//     return (
//         <div className="containers pt-5">
//             <div className="row">
//                 <div className="fe col-lg-6 order-lg-2 order-1 pt-5">
//                     <h2 className="main-text mb-5 pt-5 mt-5">Reset Your Password</h2>
//                     {error && <p className="text-danger">{error}</p>}
//                     <form onSubmit={handleSubmit}>
//                         <input type="email" placeholder="Enter Your Email" className="ue form-control main-input mt-3" value={email} onChange={(e) => setEmail(e.target.value)} />
//                         <input type="password" placeholder="Enter New Password" className="cx form-control main-input mt-3" value={password} onChange={(e) => setPassword(e.target.value)} />
//                         <input type="password" placeholder="Enter Confirm Password" className="cz form-control main-input mt-3" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//                         <input type="password" placeholder="Enter Confirm Password" className="cz form-control main-input mt-3" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//                         <button type="submit" className="bn p-2 btn btn-sz-primary d-flex align-items-center">
//                             {loading ? (
//                                 <>
//                                     <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
//                                     <span className="ps-3">Loading...</span>
//                                 </>
//                             ) : (
//                                 'Submit'
//                             )}
//                         </button>
//                     </form>
//                 </div>
//                 <div className="col-lg-6 order-lg-1 order-2 text-center">
//                     {/* Display image or visual */}
//                     <img src={Test222} alt="" className="img-fluid" style={{ height: "102vh", objectFit: "cover" }} />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ResetPassword;


// import React from 'react';
// import './Test.module.css';

// const Test2 = () => {
//   return (
//     <div className='p-3 container-md mx-auto'>
//       <h1 className='fs-2 font-weight-bold text-center my-5'>Profile</h1>
//       <form action="" className='d-flex flex-column gap-4'>
//         <img src="https://allurausa.com/uploads/image/file/129/home-design_38.jpg" className='vb mt-1 mb-4 align-self-center object-fit-cover rounded-circle' alt="Profile" />
//         <input type="text" placeholder='First name' className='p-3 rounded' />
//         <input type="text" placeholder='First name' className='p-3 rounded' />
//         <input type="text" placeholder='First name' className='p-3 rounded' />
//       </form>
//     </div>
//   )
// }

// export default Test2
// import React, { useState } from 'react';
// import styles from './Test.module.css'; // Import CSS module for styling

// const Test2 = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [oldPassword, setOldPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSaveChanges = () => {
//     // Handle saving changes here
//     console.log('Saving changes...');
//   };

//   return (
//     <div className={styles.profileForm}>
//       <div className={styles.backgroundImages}>
//         {/* Background images go here */}
//         <img src="https://media.istockphoto.com/id/1508453163/photo/two-modern-buildings-with-glass-windows-architecture-design-of-buildings-office-space-houses.jpg?s=612x612&w=0&k=20&c=RSJYaxThii5iK-zk_69h16UVthwufA1gbaxoZEKOUZg=" alt="" />
//       </div>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6">
//             <div className="mb-3">
//               <label htmlFor="firstName" className={`${styles.formLabel} form-label`}>First Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="firstName"
//                 placeholder="Enter first name"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="lastName" className={`${styles.formLabel} form-label`}>Last Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="lastName"
//                 placeholder="Enter last name"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className={`${styles.formLabel} form-label`}>Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="mb-3">
//               <label htmlFor="oldPassword" className={`${styles.formLabel} form-label`}>Old Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="oldPassword"
//                 placeholder="Enter old password"
//                 value={oldPassword}
//                 onChange={(e) => setOldPassword(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="newPassword" className={`${styles.formLabel} form-label`}>New Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="newPassword"
//                 placeholder="Enter new password"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="confirmPassword" className={`${styles.formLabel} form-label`}>Confirm Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="confirmPassword"
//                 placeholder="Confirm new password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>
//         <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>Save Changes</button>
//       </div>
//     </div>
//   );
// };

// export default Test2;


import React from 'react';
import styles from './Test.module.css';
import Header from '../Header/Header';
import Icon1 from '../../assets/carbon_plan.png'
import Icon2 from '../../assets/mingcute_pen-line.png'
import Icon3 from '../../assets/uil_home.png'
import Icon4 from '../../assets/Ellipse 386.png'
import Icon5 from '../../assets/Rectangle 35.png'
import Icon6 from '../../assets/Rectangle 821.png'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
const Test2 = () => {
  return (
    <>
    <Header />
    
    <div className={styles.container}>
      <h1 className={styles.heading}>The best desgin for you</h1>
      <p className={styles.paragrh}>Welcome to the future of architectural <br /> innovation, where precision meets <br /> imagination, and efficiency intertwines <br /> seamlessly with creativity</p>
      
    </div>
    <section className={`${styles.container1} py-5`}>
        <img src={Icon4} alt="" className="services-bg-image" style={{width: "1428.5px", height: "1023px", objectFit: "cover"}} />
        <div className={styles.vb}></div>
        
      <h1 className={`${styles.services__heading} text-center`}>Our Services</h1>
      <div className={`${styles.q} row row-cols-1 row-cols-md-3 g-4`}>
        <div className="col">
          <div className="card h-100 text-center border-0" style={{background: "none"}}>
            <div className="card-body d-flex flex-column justify-content-between align-items-center">
              <div className={`${styles.circle} circle mx-auto mb-3`}>
                <img src={Icon1} alt="Service Icon" />
              </div>
              <h2  className={styles.head}>Planning</h2>
              <p className={styles.pargrap}>
                We clearly outline the purpose and goals of the project. Understand the client's needs, budget, and any specific requirements or constraints.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 text-center border-0" style={{background: "none"}}>
            <div className="card-body d-flex flex-column justify-content-between align-items-center">
              <div className={`${styles.circle} circle mx-auto mb-3`}>
                <img src={Icon2} alt="Service Icon" />
              </div>
              <h2  className={styles.head}>Exterior</h2>
              <p className={styles.pargrap}>We provide a comprehensive solution for clients who want a seamless process from design conception to project completion.</p>

            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 text-center border-0" style={{background: "none"}}>
            <div className="card-body d-flex flex-column justify-content-between align-items-center">
              <div className={`${styles.circle} circle mx-auto mb-3`}>
                <img src={Icon3} alt="Service Icon" />
              </div>
              <h2 className={styles.head}>Interior</h2>
              <p className={styles.pargrap}>
              We work on projects such as residential decor, commercial spaces, hospitality, or retail environments.
              </p>
            </div>
          </div>
        </div>
        {/* Repeat the above structure for other services */}
      </div>
    </section>
    <section className={`${styles.interiorDesign}`}>
    <div >
      <div className="row">
        <div className={`${styles.g} col-md-6`}>
          <h2 className={styles.title}>Interior Designs</h2>
          <div className={styles.s}></div>
          
          <p className={styles.pragraph}>In a world where the aesthetics of our surroundings significantly impact our well-being, interior design services play a pivotal role in transforming spaces into harmonious and functional environments.</p>
          <Link to={'/infoInterior'} style={{textDecoration: "none"}}>
            <button className={`${styles.b}`}>Show all</button>
          </Link>
        </div>
        <div className="col-md-6">
          <img src={Icon5} className={`${styles.f} img-fluid`} alt="Interior Design" />
        </div>
      </div>
    </div>
    </section>
    <section className={`${styles.exteriorDesign}`}>
  <div className="row d-flex flex-col-reverse">  {/* Reverse row order */}
    <div className="col-md-6">
      <img src={Icon6} className={`${styles.f} img-fluid`} alt="Interior Design" />
    </div>
    <div className={`${styles.gg} col-md-6 d-flex flex-column justify-content-center`}>
      <h2 className={styles.title1}>Exterior Designs</h2>
      <div className={styles.s1}></div>
      <p className={styles.paragraph}>
      In a world where the aesthetics of our surroundings significantly impact our well-being, interior design services play a pivotal role in transforming spaces into harmonious and functional environments
      </p>
      <Link to={'/infoExterior'} style={{ textDecoration: "none" }}>
        <button className={`${styles.b1}`}>Show all</button>
      </Link>
    </div>
  </div>
</section>
<Footer />
    </>
  )
}

export default Test2
