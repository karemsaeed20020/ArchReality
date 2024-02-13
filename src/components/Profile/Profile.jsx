// import React, { useContext, useEffect, useState } from 'react';
// import './Profile.css';
// import Header from '../Header/Header';
// import Profile1 from '../../assets/Ellipse 1132.png';
// import Profile2 from '../../assets/Ellipse 1134.png';
// import Subtract from '../../assets/Subtract.png';
// import Frame from '../../assets/material-symbols_favorite-outline.png';
// import { userContext } from '../../context/UserContext';
// import { Link, useNavigate } from 'react-router-dom';


// const Profile = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [oldPassword, setOldPassword] = useState('');
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState('');
//   const [cPassword, setCPassword] = useState('');
//   const [profileImage, setProfileImage] = useState(null);
//   const [passwordError, setPasswordError] = useState('');
//   const {token,userName}=useContext(userContext);
//   const navigate=useNavigate();
//   useEffect(()=>{
//     if(!token){
//       navigate("/login");
//     }
//   },[]);
//   // const handleChoosePhoto = async () => {
//   //   if (password !== cPassword) {
//   //     setPasswordError('Passwords do not match');
//   //     return;
//   //   }

//   //   // Clear any previous password error
//   //   setPasswordError('');
//   //   try {
//   //     const fileInput = document.createElement('input');
//   //     fileInput.type = 'file';
//   //     fileInput.accept = 'image/*';
//   //     fileInput.addEventListener('change', async (event) => {
//   //       const file = event.target.files[0];
//   //       const reader = new FileReader();
//   //       reader.onload = () => {
//   //         setProfileImage(reader.result);
//   //       };
//   //       reader.readAsDataURL(file);
//   //     });
//   //     fileInput.click();
//   //   } catch (error) {
//   //     console.log('ImagePicker Error: ', error);
//   //   }
//   // }
    
//     const handleSaveProfile = () => {
//       // Perform validation if needed
  
//       // Set up headers and data
//       const headers = {
//         'Authorization': 'graduation '+ token,
//       };
  
//       const formData = new FormData();
//       formData.append('firstName', firstName);
//       formData.append('lastName', lastName);
//       formData.append('oldPassword', oldPassword);
//       formData.append('password', password);
//       formData.append('cPassword', cPassword);
  
//       // if (profileImage) {
//       //   const uri = profileImage.path;
//       //   const type = profileImage.mime;
//       //   const name = uri.split('/').pop();
  
//       //   formData.append('profile', {
//       //     uri,
//       //     type,
//       //     name,
//       //   });
//       // }
  
//       // Make a fetch request with headers and data
//       fetch('https://arch-reality.onrender.com/api/client/update', {
//         method: 'PUT',
//         headers: headers,
//         body: formData,
//       })
//         .then(response => response.json())
//         .then(data => {
//           // Handle the response data
//           console.log('Response:', data);
  
//           // Example: Check for success message
//           if (data.message === 'user has been Updated successfully') {
//             alert('Profile Updated Successfully');
//             // You can navigate the user to another page or perform other actions
//           } else {
//             alert('Error updating profile', data.message);
//           }
//         })
//         .catch(error => {
//           // Handle errors
//           console.error('Error:', error);
//         });
//     };
  
//   return (
//     <>
//     <Header />
//     <div className='profile'>
//         <div className='wrap'>
//             <div className='row'>
//                 <div className='col-3'>
//                     <div className='left'>
//                         <img src={Subtract} className='img3' alt="" />
//                         {/* <div className='d-flex align-items-center' >
//                             <span><img src={Frame} className='img4' alt="" /></span>
//                             <h3>user info</h3>
//                         </div> */}
//                         <h3 className='text1 px-auto py-auto text-white'>User Profile</h3>
//                     </div>
//                     <div className=''>
//                         <img src={Frame} className='img4' />
//                         <Link to={'/favouriate'}>
//                           <span className='fav text-white'>favorites</span>
//                         </Link>

//                     </div>
//                 </div>
//                 <div className='col-9'>
//                     <div class="ellipse-1135">
//                         {profileImage && <img src={{uri: profileImage.path}} className='img5' alt="" />}
//                     </div>
//                     <div className='right mb-5' >
//                         <img  src={profileImage} style={{boxShadow: "-20px -20px 50px rgba(168, 198, 234, 0.8), 20px 20px 50px rgba(168, 198, 234, 0.8)", backgroundColor: 'transparent', borderRadius: "50%"}} alt="" className='image2' />
//                         <p className='name'>{userName}</p>
//                         <span className='use'>user</span>
//                     </div>    
                    
                    
//                     <form className="row g-3" style={{marginTop: "120px", marginLeft: "50px"}}>
//                       <div className="col-md-4">
//                         <label for="inputText" className="form-label">First name</label>
//                         <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control" placeholder={userName?.split(" ")[0]} id="inputText" style={{width: "320px", position: 'absolute', top: "440px", backgroundColor:"#E3E3E3"}} />
//                       </div>
//                       <div className="col-md-6">
//                         <label for="inputText1" className="form-label">Last name</label>
//                         <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" placeholder={userName?.split(" ")[1]} id="inputText1" style={{width: "320px", position: 'absolute', top: "440px", backgroundColor:"#E3E3E3"}} />
//                       </div>
//                       <div className="col-12">
//                         <label for="inputAddress" className="form-label" style={{position:"relative", bottom:"-22px"}}>Email</label>
//                         <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="inputAddress" placeholder="sara_ali77@gmail.com" style={{position: "relative", top:"18px", width: "710px", backgroundColor:"#E3E3E3"}} />
//                       </div>
//                       <div className="col-12">
//                         <label for="inputAddress2" className="form-label" style={{position: "relative", bottom: "-8px"}}>Old Password</label>
//                         <input value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} type="password" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" style={{position: 'relative', top: "4px", width: "317px", backgroundColor:"#E3E3E3"}}  />
//                       </div>
//                       <div class="col-md-4">
//                         <label for="inputPassword" className="form-label">New Password</label>
//                         <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="inputPassword" style={{width: "320px", position: 'absolute', top: "660px", backgroundColor:"#E3E3E3"}} />
//                       </div>
//                       <div class="col-md-6">
//                         <label for="inputPassword1" className="form-label">Confirm Password</label>
//                         <input value={cPassword} onChange={(e) => setCPassword(e.target.value)} type="password" className="form-control" id="inputPassword1" style={{width: "320px", position: 'absolute', top: "660px", backgroundColor:"#E3E3E3"}} />
//                       </div>
  
//                     <div className="col-12">
//                       {passwordError ? <p>{passwordError}</p> : null} 
//                       <button onClick={handleSaveProfile} type="button" className="btn1">Show Changes</button>
//                     </div>

//                   </form>                </div>
                


//             </div>

//         </div>

//     </div>

      
//     </>
//   )
// }

// export default Profile

// import React, { useContext, useEffect, useState } from "react";
// import "./Profile.css";
// import Header from "../Header/Header";
// import { userContext } from "../../context/UserContext";
// import { Link, useNavigate } from "react-router-dom";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import Subtract from "../../assets/Subtract.png";
// import Frame from "../../assets/material-symbols_favorite-outline.png";
// import Profile1 from "../../assets/Ellipse 1132.png";
// import Profile2 from "../../assets/Ellipse 1134.png";

// const Profile = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [oldPassword, setOldPassword] = useState('');
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState('');
//   const [cPassword, setCPassword] = useState('');
//   const [profileImage, setProfileImage] = useState(null);
//   const [passwordError, setPasswordError] = useState('');
//   const {token,userName}=useContext(userContext);
//   const navigate=useNavigate();
//   useEffect(()=>{
//     if(!token){
//       navigate("/login");
//     }
//   },[]);

//       const handleSaveProfile = () => {
//       // Perform validation if needed
  
//       // Set up headers and data
//       const headers = {
//         'Authorization': 'graduation '+ token,
//       };
  
//       const formData = new FormData();
//       formData.append('firstName', firstName);
//       formData.append('lastName', lastName);
//       formData.append('oldPassword', oldPassword);
//       formData.append('password', password);
//       formData.append('cPassword', cPassword);
//           //   // Make a fetch request with headers and data
//       fetch('https://arch-reality.onrender.com/api/client/update', {
//         method: 'PUT',
//         headers: headers,
//         body: formData,
//       })
//         .then(response => response.json())
//         .then(data => {
//           // Handle the response data
//           console.log('Response:', data);
  
//           // Example: Check for success message
//           if (data.message === 'user has been Updated successfully') {
//             alert('Profile Updated Successfully');
//             // You can navigate the user to another page or perform other actions
//           } else {
//             alert('Error updating profile', data.message);
//           }
//         })
//         .catch(error => {
//           // Handle errors
//           console.error('Error:', error);
//         });
//     };
//   return (
//     <>
//       <Header />
//       <div className="test">
//         <div className="row">
//           <div className="appear col-lg-3">
//             <p className="user2 text-white text-center fs-2 text-capitalize" style={{marginBottom: "15rem"}}>
//               User Profile
//             </p>
//             {/* <div className=''>
//               <img className='sub' src={Subtract} alt="" />
//               <span className='text-white fs-3' style={{position: "absolute", left: "300px", zIndex: "1", top: "90px"}}>user Info</span>
//             </div>  */}
//             {/* <div className=''>
//               <div className="curve"></div>
//               <span className='text-white fs-3' style={{position: "absolute", left: "300px", zIndex: "1", top: "90px"}}>user Info</span>
//             </div>  */}
           

//             <span className="favouriate d-flex align-items-center justify-content-center " style={{}}>
//               <img className="frame12" src={Frame} alt=""style={{marginBottom: "-3px", marginLeft: "-5px"}} />
//               <span style={{marginRight: "20px",fontSize: "30px", color: "#fff"}}>favorites</span>
//             </span>
//           <div>
//             </div>
//           </div>
//           <div className=" col-lg-9">
//             <div className="imgs d-flex align-items-center g-lg-5">
//               <img className="prof" src={Profile1} alt="" style={{boxShadow: "-20px -20px 50px rgba(168, 198, 234, 0.8), 20px 20px 50px rgba(168, 198, 234, 0.8)", backgroundColor: 'transparent', borderRadius: "50%"}} />
//               <div className="info1 d-flex flex-column align-items-center ">
//                 <span className="name">{userName}</span>
//                 <span className="info2">user</span>
//               </div>
//                 <div className="ellipse-1135"></div>
//             </div>
//             <Form className="form11" >
//               <Row >
//                 <Col sm={12} md={6}>
//                   <Form.Group>
//                     <Form.Label
//                       style={{
//                         position: "relative",
//                         top: "-20px",
//                         left: "100px",
//                       }}
//                       className="mb-3"
//                       defaultValue={firstName}
//                       onChange={(e) => setFirstName(e.target.value)}
//                     >
//                       First name
//                     </Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder={userName?.split(" ")[0]}
//                       className="formControl1 "
//                       style={{
//                         backgroundColor: "#E3E3E3",
//                         width: "370px",
//                         height: "45px",
//                         borderRadius: "15px",
//                         position: "relative",
//                         left: "100px",
//                       }}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col sm={12} md={6}>
//                   <Form.Group >
//                     <Form.Label
//                       style={{
//                         position: "relative",
//                         top: "-20px",
//                         left: "-90px",
//                       }}
//                       className="last mb-3"
//                       defaultValue={lastName}
//                       onChange={(e) => setLastName(e.target.value)}
//                     >
//                       Last name
//                     </Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder={userName?.split(" ")[1]}
//                       className="lastName"
//                       style={{
//                         backgroundColor: "#E3E3E3",
//                         width: "370px",
//                         height: "45px",
//                         borderRadius: "15px",
//                         position: "relative",
//                         right: "90px",
//                       }}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col sm={12} md={12}>
//                   <Form.Group>
//                     <Form.Label
                      
//                       style={{
//                         position: "relative",
//                         top: "-20px",
//                         left: "100px",
//                       }}
//                       className="mb-3"
//                       defaultValue={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     >
//                       Email
//                     </Form.Label>
//                     <Form.Control
//                       type="email"
//                       placeholder="sara_ali77@gmail.com"
//                       className="lastName"
//                       style={{
//                         backgroundColor: "#E3E3E3",
//                         width: "821px",
//                         height: "45px",
//                         borderRadius: "15px",
//                         position: "relative",
//                         right: "-100px",
//                       }}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col sm={12} md={12}>
//                   <Form.Group>
//                     <Form.Label
//                       style={{
//                         position: "relative",
//                         top: "-20px",
//                         left: "100px",
//                       }}
//                       className="mb-3"
//                       defaultValue={oldPassword}
//                       onChange={(e) => setOldPassword(e.target.value)}
//                     >
//                       Old Password
//                     </Form.Label>
//                     <Form.Control
//                       type="password"
//                       placeholder=""
//                       className="formControl1 "
//                       style={{
//                         backgroundColor: "#E3E3E3",
//                         width: "370px",
//                         height: "45px",
//                         borderRadius: "15px",
//                         position: "relative",
//                         left: "100px",
//                       }}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col sm={12} md={6}>
//                   <Form.Group>
//                     <Form.Label
//                       style={{
//                         position: "relative",
//                         top: "-20px",
//                         left: "100px",
//                       }}
//                       className="mb-3"
//                     >
//                       New Password
//                     </Form.Label>
//                     <Form.Control
//                       type="password"
//                       placeholder=""
//                       className="formControl1 "
//                       style={{
//                         backgroundColor: "#E3E3E3",
//                         width: "370px",
//                         height: "45px",
//                         borderRadius: "15px",
//                         position: "relative",
//                         left: "100px",
//                       }}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col sm={12} md={6}>
//                   <Form.Group>
//                     <Form.Label
//                       style={{
//                         position: "relative",
//                         top: "-20px",
//                         left: "-90px",
//                       }}
//                       className="mb-3"
//                       defaultValue={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     >
//                       Confirm Password
//                     </Form.Label>
//                     <Form.Control
//                       type="password"                    
//                       placeholder=""
//                       className="lastName"
//                       style={{
//                         backgroundColor: "#E3E3E3",
//                         width: "370px",
//                         height: "45px",
//                         borderRadius: "15px",
//                         position: "relative",
//                         right: "90px",
//                       }}
//                       defaultValue={cPassword}
//                       onChange={(e) => setCPassword(e.target.value)}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col lg={12} sm={6} md={6}>
//                   <div className="button d-flex align-items-center justify-content-center" style={{position: "relative", right: "150px"}}>
//                     <button onClick={handleSaveProfile} type="button" className="text-center" style={{width: "317px", height: "56px", borderRadius:"30px"}}>Save changes</button>
//                   </div>  
//                 </Col>
//               </Row>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;


// import React, { useContext, useEffect, useState } from "react";
// import "./Profile.css";
// import Header from "../Header/Header";
// import { userContext } from "../../context/UserContext";
// import { Link, useNavigate } from "react-router-dom";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import Subtract from "../../assets/Subtract.png";
// import Frame from "../../assets/material-symbols_favorite-outline.png";
// import Profile1 from "../../assets/Ellipse 1132.png";
// import Profile2 from "../../assets/Ellipse 1134.png";

// const Profile = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [oldPassword, setOldPassword] = useState('');
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState('');
//   const [cPassword, setCPassword] = useState('');
//   const [profileImage, setProfileImage] = useState(null);
//   const [passwordError, setPasswordError] = useState('');
//   const {token,userName}=useContext(userContext);
//   const navigate=useNavigate();
//   useEffect(()=>{
//     if(!token){
//       navigate("/login");
//     }
//   },[]);
//         const handleSaveProfile = () => {
//       // Perform validation if needed
  
//       // Set up headers and data
//       const headers = {
//         'Authorization': 'graduation '+ token,
//       };
  
//       const formData = new FormData();
//       formData.append('firstName', firstName);
//       formData.append('lastName', lastName);
//       formData.append('oldPassword', oldPassword);
//       formData.append('password', password);
//       formData.append('cPassword', cPassword);
//           //   // Make a fetch request with headers and data
//       fetch('https://arch-reality.onrender.com/api/client/update', {
//         method: 'PUT',
//         headers: headers,
//         body: formData,
//       })
//         .then(response => response.json())
//         .then(data => {
//           // Handle the response data
//           console.log('Response:', data);
  
//           // Example: Check for success message
//           if (data.message === 'user has been Updated successfully') {
//             alert('Profile Updated Successfully');
//             // You can navigate the user to another page or perform other actions
//           } else {
//             alert('Error updating profile', data.message);
//           }
//         })
//         .catch(error => {
//           // Handle errors
//           console.error('Error:', error);
//         });
//     };
//   return (
//     <>
//       <Header />
//       <div className="test">
//         <div className="row">
//           <div className="appear col-lg-3">
//             <p className="user2 text-white text-center fs-2 text-capitalize" style={{marginBottom: "15rem"}}>
//               User Profile
//             </p>
//             {/* <div className=''>
//               <img className='sub' src={Subtract} alt="" />
//               <span className='text-white fs-3' style={{position: "absolute", left: "300px", zIndex: "1", top: "90px"}}>user Info</span>
//             </div>  */}
//             {/* <div className=''>
//               <div className="curve"></div>
//               <span className='text-white fs-3' style={{position: "absolute", left: "300px", zIndex: "1", top: "90px"}}>user Info</span>
//             </div>  */}
           

//             <span className="favouriate d-flex align-items-center justify-content-center " style={{}}>
//               <img className="frame12" src={Frame} alt=""style={{marginBottom: "-3px", marginLeft: "-5px"}} />
//               <span style={{marginRight: "20px",fontSize: "30px", color: "#fff"}}>favorites</span>
//             </span>
//           <div>
//             </div>
//           </div>
//           <div className=" col-lg-9">
//             <div className="imgs d-flex align-items-center g-lg-5">
//               <img className="prof" src={Profile1} alt="" style={{boxShadow: "-20px -20px 50px rgba(168, 198, 234, 0.8), 20px 20px 50px rgba(168, 198, 234, 0.8)", backgroundColor: 'transparent', borderRadius: "50%"}} />
//               <div className="info1 d-flex flex-column align-items-center ">
//                 <span className="name">{userName}</span>
//                 <span className="info2">user</span>
//               </div>
//                 <div className="ellipse-1135"></div>
//             </div>
//             <Form className="form11" >
//               <Row >
//                 <Col xs={10}  sm={12} md={6} className="g-md-3 ">
//                   <Form.Group>
//                     <Form.Label
//                       style={{
//                         position: "relative",
//                         top: "-20px",
//                         left: "100px",
//                       }}
//                       className="mb-3"
//                     >
//                       First name
//                     </Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder={userName?.split(" ")[0]}
//                       className="formControl1 "
//                       value={firstName}
//                       onChange={(e) => setFirstName(e.target.value)}
//                       style={{
//                         backgroundColor: "#E3E3E3",
//                         width: "370px",
//                         height: "45px",
//                         borderRadius: "15px",
//                         position: "relative",
//                         left: "100px",
//                       }}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col xs={10} sm={12} md={6} className="lastName1 g-lg-3">
//                   <Form.Group >
//                     <Form.Label
//                       style={{
//                         position: "relative",
//                         top: "-20px",
//                         left: "-90px",
//                       }}
//                       className="last mb-3"
//                     >
//                       Last name
//                     </Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder={userName?.split(" ")[1]}
//                       className="lastName"
//                       value={lastName}
//                       onChange={(e) => setLastName(e.target.value)}
//                       style={{
//                         backgroundColor: "#E3E3E3",
//                         width: "370px",
//                         height: "45px",
//                         borderRadius: "15px",
//                         position: "relative",
//                         right: "90px",
//                       }}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col xs={10} md={12} className="email1 mx-md-5">
//                   <Form.Group>
//                     <Form.Label
                      
//                       style={{
//                         position: "relative",
//                         top: "-20px",
//                         left: "100px",
//                       }}
//                       className="email mb-3"
//                     >
//                       Email
//                     </Form.Label>
//                     <Form.Control
//                       type="email"
//                       placeholder="sara_ali77@gmail.com"
//                       className="lastName"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       style={{
//                         backgroundColor: "#E3E3E3",
//                         width: "821px",
//                         height: "45px",
//                         borderRadius: "15px",
//                         position: "relative",
//                         right: "-100px",
//                       }}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col xs={10} sm={12} md={12}>
//                   <Form.Group>
//                     <Form.Label
//                       style={{
//                         position: "relative",
//                         top: "-20px",
//                         left: "100px",
//                       }}
//                       className="mb-3"
//                     >
//                       Old Password
//                     </Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder=""
//                       className="formControl1 "
//                       value={oldPassword}
//                       onChange={(e) => setOldPassword(e.target.value)}
//                       style={{
//                         backgroundColor: "#E3E3E3",
//                         width: "370px",
//                         height: "45px",
//                         borderRadius: "15px",
//                         position: "relative",
//                         left: "100px",
//                       }}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col xs={10} sm={12} md={6} className="g-md-3">
//                   <Form.Group>
//                     <Form.Label
//                       style={{
//                         position: "relative",
//                         top: "-20px",
//                         left: "100px",
//                       }}
//                       className="mb-3"
//                     >
//                       New Password
//                     </Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder=""
//                       className="formControl1 "
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       style={{
//                         backgroundColor: "#E3E3E3",
//                         width: "370px",
//                         height: "45px",
//                         borderRadius: "15px",
//                         position: "relative",
//                         left: "100px",
//                       }}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col xs={10} sm={12} md={6} className="g-lg-3">
//                   <Form.Group>
//                     <Form.Label
//                       style={{
//                         position: "relative",
//                         top: "-20px",
//                         left: "-90px",
//                       }}
//                       className="last1 mb-3"
//                     >
//                       Confirm Password
//                     </Form.Label>
//                     <Form.Control
//                       type="text"                    
//                       placeholder=""
//                       className="lastName"
//                       value={cPassword}
//                       onChange={(e) => setCPassword(e.target.value)}
//                       style={{
//                         backgroundColor: "#E3E3E3",
//                         width: "370px",
//                         height: "45px",
//                         borderRadius: "15px",
//                         position: "relative",
//                         right: "90px",
//                       }}
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col lg={12} sm={6} md={9}>
//                   <div className="button d-flex align-items-center justify-content-center" style={{position: "relative", right: "150px"}}>
//                     <button onClick={handleSaveProfile} className="text-center" style={{width: "317px", height: "56px", borderRadius:"30px"}}>Save changes</button>
//                   </div>  
//                 </Col>
//               </Row>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;



import React, { useContext, useEffect, useState } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import Profile1 from '../../assets/Ellipse 1132.png';
import Profile2 from '../../assets/Ellipse 1134.png';
import Subtract from '../../assets/Subtract.png';
import Frame from '../../assets/material-symbols_favorite-outline.png';
import { userContext } from '../../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Form, Row } from 'react-bootstrap';


const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [passwordError, setPasswordError] = useState('');
  const {token,userName}=useContext(userContext);
  const navigate=useNavigate();
  useEffect(()=>{
    if(!token){
      navigate("/login");
    }
  },[]);
  // const handleChoosePhoto = async () => {
  //   if (password !== cPassword) {
  //     setPasswordError('Passwords do not match');
  //     return;
  //   }

  //   // Clear any previous password error
  //   setPasswordError('');
  //   try {
  //     const fileInput = document.createElement('input');
  //     fileInput.type = 'file';
  //     fileInput.accept = 'image/*';
  //     fileInput.addEventListener('change', async (event) => {
  //       const file = event.target.files[0];
  //       const reader = new FileReader();
  //       reader.onload = () => {
  //         setProfileImage(reader.result);
  //       };
  //       reader.readAsDataURL(file);
  //     });
  //     fileInput.click();
  //   } catch (error) {
  //     console.log('ImagePicker Error: ', error);
  //   }
  // }
    
    const handleSaveProfile = () => {
      // Perform validation if needed
  
      // Set up headers and data
      const headers = {
        'Authorization': 'graduation '+ token,
      };
  
      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('oldPassword', oldPassword);
      formData.append('password', password);
      formData.append('cPassword', cPassword);
  
      // if (profileImage) {
      //   const uri = profileImage.path;
      //   const type = profileImage.mime;
      //   const name = uri.split('/').pop();
  
      //   formData.append('profile', {
      //     uri,
      //     type,
      //     name,
      //   });
      // }
  
      // Make a fetch request with headers and data
      fetch('https://arch-reality.onrender.com/api/client/update', {
        method: 'PUT',
        headers: headers,
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          // Handle the response data
          console.log('Response:', data);
  
          // Example: Check for success message
          if (data.message === 'user has been Updated successfully') {
            alert('Profile Updated Successfully');
            // You can navigate the user to another page or perform other actions
          } else {
            alert('Error updating profile', data.message);
          }
        })
        .catch(error => {
          // Handle errors
          console.error('Error:', error);
        });
    };
  
  return (
        <>
      <Header />
      <div className="test">
        <div className="row">
          <div className="appear col-lg-3">
            <p className="user2 text-white text-center fs-2 text-capitalize" style={{marginBottom: "15rem"}}>
              User Profile
            </p>
            {/* <div className=''>
              <img className='sub' src={Subtract} alt="" />
              <span className='text-white fs-3' style={{position: "absolute", left: "300px", zIndex: "1", top: "90px"}}>user Info</span>
            </div>  */}
            {/* <div className=''>
              <div className="curve"></div>
              <span className='text-white fs-3' style={{position: "absolute", left: "300px", zIndex: "1", top: "90px"}}>user Info</span>
            </div>  */}
           

            <span className="favouriate d-flex align-items-center justify-content-center " style={{}}>
              <img className="frame12" src={Frame} alt=""style={{marginBottom: "-3px", marginLeft: "-5px"}} />
              <span style={{marginRight: "20px",fontSize: "30px", color: "#fff"}}>favorites</span>
            </span>
          <div>
            </div>
          </div>
          <div className=" col-lg-9">
            <div className="imgs d-flex align-items-center g-lg-5">
              <img className="prof" src={Profile1} alt="" style={{boxShadow: "-20px -20px 50px rgba(168, 198, 234, 0.8), 20px 20px 50px rgba(168, 198, 234, 0.8)", backgroundColor: 'transparent', borderRadius: "50%"}} />
              <div className="info1 d-flex flex-column align-items-center ">
                <span className="name">{userName}</span>
                <span className="info2">user</span>
              </div>
                <div className="ellipse-1135"></div>
            </div>
            <Form className="form11" >
              <Row >
                <Col xs={10}  sm={12} md={6} className="g-md-3 ">
                  <Form.Group>
                    <Form.Label
                      style={{
                        position: "relative",
                        top: "-20px",
                        left: "100px",
                      }}
                      className="mb-3"
                    >
                      First name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={userName?.split(" ")[0]}
                      className="formControl1 "
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      style={{
                        backgroundColor: "#E3E3E3",
                        width: "370px",
                        height: "45px",
                        borderRadius: "15px",
                        position: "relative",
                        left: "100px",
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col xs={10} sm={12} md={6} className="lastName1 g-lg-3">
                  <Form.Group >
                    <Form.Label
                      style={{
                        position: "relative",
                        top: "-20px",
                        left: "-90px",
                      }}
                      className="last mb-3"
                    >
                      Last name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={userName?.split(" ")[1]}
                      className="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      style={{
                        backgroundColor: "#E3E3E3",
                        width: "370px",
                        height: "45px",
                        borderRadius: "15px",
                        position: "relative",
                        right: "90px",
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col xs={10} md={12} className="email1 mx-md-5">
                  <Form.Group>
                    <Form.Label
                      
                      style={{
                        position: "relative",
                        top: "-20px",
                        left: "100px",
                      }}
                      className="email mb-3"
                    >
                      Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="sara_ali77@gmail.com"
                      className="lastName"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        backgroundColor: "#E3E3E3",
                        width: "821px",
                        height: "45px",
                        borderRadius: "15px",
                        position: "relative",
                        right: "-100px",
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col xs={10} sm={12} md={12}>
                  <Form.Group>
                    <Form.Label
                      style={{
                        position: "relative",
                        top: "-20px",
                        left: "100px",
                      }}
                      className="mb-3"
                    >
                      Old Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder=""
                      className="formControl1 "
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      style={{
                        backgroundColor: "#E3E3E3",
                        width: "370px",
                        height: "45px",
                        borderRadius: "15px",
                        position: "relative",
                        left: "100px",
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col xs={10} sm={12} md={6} className="g-md-3">
                  <Form.Group>
                    <Form.Label
                      style={{
                        position: "relative",
                        top: "-20px",
                        left: "100px",
                      }}
                      className="mb-3"
                    >
                      New Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder=""
                      className="formControl1 "
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{
                        backgroundColor: "#E3E3E3",
                        width: "370px",
                        height: "45px",
                        borderRadius: "15px",
                        position: "relative",
                        left: "100px",
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col xs={10} sm={12} md={6} className="g-lg-3">
                  <Form.Group className='ms-sm-5'>
                    <Form.Label
                      style={{
                        position: "relative",
                        top: "-20px",
                        left: "-90px",
                      }}
                      className="last1 mb-3"
                    >
                      Confirm Password
                    </Form.Label>
                    <Form.Control
                      type="password"                    
                      placeholder=""
                      className="lastName"
                      value={cPassword}
                      onChange={(e) => setCPassword(e.target.value)}
                      style={{
                        backgroundColor: "#E3E3E3",
                        width: "370px",
                        height: "45px",
                        borderRadius: "15px",
                        position: "relative",
                        right: "90px",
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col lg={12} sm={6} md={9}>
                  <div className="button d-flex align-items-center justify-content-center" style={{position: "relative", right: "150px"}}>
                    <button onClick={handleSaveProfile} className="text-center" style={{width: "317px", height: "56px", borderRadius:"30px"}}>Save changes</button>
                  </div>  
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile