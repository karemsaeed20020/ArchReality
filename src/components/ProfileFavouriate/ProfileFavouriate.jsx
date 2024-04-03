import React, { useContext, useEffect, useState } from 'react';
import './ProfileFavouriate.css';
import Header from '../Header/Header';
import Profile1 from '../../assets/Ellipse 1132.png';
import Profile2 from '../../assets/Ellipse 1134.png';
import Subtract from '../../assets/Subtract.png';
import Frame from '../../assets/material-symbols_favorite-outline.png';
import { userContext } from '../../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { Card, Col, Form, Row, Spinner } from 'react-bootstrap';

import 'react-toastify/dist/ReactToastify.css';
import { updateStart, updateSuccess, updateFailure, updateProfilePage, updateFullName } from '../../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { details, details1 } from '../../data/data';





const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [passwordError, setPasswordError] = useState('');
  const [avatar,setAvatar]=useState(null);
  const [imgUrl,setImgUrl]=useState("");
  const [loading, setLoading] = useState(false);
  // const {token,userName,setUserName}=useContext(userContext);
  const {token,fullName, firstNamee, setFirstNamee, lastNamee, setLastNamee, image, setImage}=useContext(userContext);
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const [showMoreInterior, setShowMoreInterior] = useState(false);
  const [showMoreExterior, setShowMoreExterior] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const allDetails = [...details];
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
      setLoading(true); 
      dispatch(updateStart());
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
      formData.append('profile',avatar);
  
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
          setLoading(false);
  
          // Example: Check for success message
          if (data.message === 'user has been Updated successfully') {
            dispatch(updateSuccess(data.rest));
            dispatch(updateProfilePage(data.profilePic)); // Dispatch action to update profile page
            dispatch(updateFullName(data.rest.firstName));
            // alert('Profile Updated Successfully');
            // toast.success('Profile Updated Successfully');
            // setImgUrl(data.rest.profilePic.secure_url);
            // setUserName(data.rest.firstName+" "+data.rest.lastName);
            setFirstName(data.rest.firstName);
            setLastName(data.lastNamee);
            setImage(data.profilePic)
            
            // You can navigate the user to another page or perform other actions
          } else {
            // alert('Error updating profile', data.message);
            dispatch(updateFailure(data.message));
            // toast.error('Error updating profile', data.message);
          }
        })
        .catch(error => {
          // Handle errors
          setLoading(false);
          console.error('Error:', error);
          dispatch(updateFailure('Error updating profile'));
          // toast.error('Error updating profile'); 
        });
    };
    const handleProfileClick = () => {
      // Trigger the file input click event
      document.getElementById("fileInput").click();
    };
  
    const handleImageChange = (e) => {
      setAvatar(e.target.files[0]);
     
    };
  
  return (
        <>
      <Header />
      <div className="test">
        
      
        <div className="row">
          <div className="appear col-lg-3">
            <p className="user2 text-white text-center fs-2 text-capitalize" style={{position: "relative", left: "-10px", zIndex: "1", top: "10px", color: "#283D4F"}}>
              User Profile
            </p>
            {/* <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="300.000000pt" height="470.000000pt" viewBox="0 0 300.000000 570.000000" preserveAspectRatio="xMidYMid meet" style={{position: "relative", left: "55px", top: "-100px", right: "20px"}}>

<g style={{background: "#fff"}} transform="translate(0.000000,570.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
<path style={{background: "#fff"}}  d="M2970 5693 c0 -5 0 -264 0 -576 0 -395 -3 -574 -11 -588 -16 -31 -102 -66 -204 -84 -88 -16 -374 -47 -545 -60 -82 -6 -378 -39 -450 -50 -437 -68 -653 -208 -653 -425 0 -84 32 -149 104 -214 153 -138 436 -205 1049 -251 41 -3 104 -8 140 -10 36 -3 76 -7 90 -10 14 -2 59 -7 100 -10 89 -7 260 -41 306 -60 18 -7 42 -23 53 -34 l21 -21 0 -1252 c0 -689 0 -1432 0 -1650 0 -259 4 -398 10 -398 7 0 10 563 10 1668 0 1577 -1 1670 -17 1684 -72 63 -211 88 -748 133 -339 28 -398 36 -579 71 -272 53 -425 135 -482 259 -47 99 -21 210 69 292 139 128 447 200 1057 248 253 20 424 41 530 67 94 23 115 31 148 61 l22 20 0 599 c0 392 -3 598 -10 598 -5 0 -10 -3 -10 -7z"/>

</g>

</svg> */}
<svg version="1.0"  xmlns="http://www.w3.org/2000/svg" width="300.000000pt" height="570.000000pt" viewBox="0 0 300.000000 570.000000" preserveAspectRatio="xMidYMid meet" style={{position: "relative", top: "-100px", left: "-100px", color: "#283D4F"}}>
<metadata>
Created by potrace 1.10, written by Peter Selinger 2001-2011
</metadata>
<g style={{color: "#283D4F"}} transform="translate(0.000000,570.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
{/* <path d="M2970 5693 c0 -5 0 -264 0 -576 0 -395 -3 -574 -11 -588 -16 -31 -102 -66 -204 -84 -88 -16 -374 -47 -545 -60 -82 -6 -378 -39 -450 -50 -437 -68 -653 -208 -653 -425 0 -84 32 -149 104 -214 153 -138 436 -205 1049 -251 41 -3 104 -8 140 -10 36 -3 76 -7 90 -10 14 -2 59 -7 100 -10 89 -7 260 -41 306 -60 18 -7 42 -23 53 -34 l21 -21 0 -1252 c0 -689 0 -1432 0 -1650 0 -259 4 -398 10 -398 7 0 10 563 10 1668 0 1577 -1 1670 -17 1684 -72 63 -211 88 -748 133 -339 28 -398 36 -579 71 -272 53 -425 135 -482 259 -47 99 -21 210 69 292 139 128 447 200 1057 248 253 20 424 41 530 67 94 23 115 31 148 61 l22 20 0 599 c0 392 -3 598 -10 598 -5 0 -10 -3 -10 -7z" style={{color: "#283D4F"}}/> */}

<path d="M2650 4041 c-5 -11 -10 -31 -10 -45 0 -14 -4 -26 -10 -26 -5 0 -10 -7 -10 -15 0 -8 5 -15 10 -15 6 0 10 -20 10 -45 0 -39 3 -45 21 -45 18 0 20 5 17 42 -2 34 1 43 15 46 23 5 22 32 -1 32 -15 0 -18 6 -14 30 3 21 10 30 23 30 11 0 19 7 19 15 0 23 -57 20 -70 -4z"/>
<path d="M1547 4012 c-19 -21 -22 -73 -6 -89 9 -9 4 -19 -20 -39 -22 -18 -29 -30 -22 -37 7 -7 18 -2 35 16 35 38 96 38 125 1 11 -14 25 -23 31 -19 15 9 -5 42 -30 50 -19 6 -19 8 -5 28 20 29 19 49 -6 81 -25 32 -77 36 -102 8z m82 -16 c7 -8 11 -27 9 -43 -2 -22 -9 -29 -31 -31 -51 -6 -74 33 -40 70 19 22 46 23 62 4z"/>
<path d="M2407 4024 c-14 -14 -7 -35 11 -32 9 2 17 10 17 17 0 16 -18 25 -28 15z"/>
<path d="M1790 3923 c0 -27 4 -53 8 -59 4 -7 30 -11 59 -11 l51 1 1 58 c0 50 -3 58 -19 58 -15 0 -19 -9 -22 -42 -2 -31 -8 -44 -20 -46 -15 -3 -18 4 -18 42 0 39 -3 46 -20 46 -17 0 -20 -7 -20 -47z"/>
<path d="M1950 3955 c-16 -19 -6 -45 20 -52 11 -3 20 -12 20 -20 0 -11 -4 -11 -21 -3 -24 13 -34 8 -26 -15 8 -18 58 -20 75 -3 22 22 13 48 -20 63 -25 10 -29 15 -17 20 9 3 22 5 29 3 7 -2 15 3 17 10 7 18 -62 16 -77 -3z"/>
<path d="M2066 3948 c-21 -30 -20 -54 4 -78 19 -19 69 -27 83 -13 12 11 -13 31 -33 26 -11 -3 -20 -1 -20 5 0 5 16 13 35 16 43 8 52 22 29 47 -24 27 -78 25 -98 -3z m69 -7 c3 -6 -3 -15 -14 -20 -26 -14 -31 -14 -31 3 0 21 34 34 45 17z"/>
<path d="M2204 3910 c-1 -52 1 -60 17 -60 14 0 19 7 19 29 0 29 22 61 41 61 5 0 9 7 9 15 0 18 -21 20 -38 3 -9 -9 -12 -9 -12 0 0 7 -8 12 -17 12 -15 0 -18 -10 -19 -60z"/>
<path d="M2400 3911 c0 -53 2 -61 19 -61 17 0 19 7 16 58 -1 44 -6 58 -19 60 -13 3 -16 -6 -16 -57z"/>
<path d="M2470 3909 c0 -52 2 -59 19 -59 16 0 20 8 23 43 2 34 7 42 23 42 17 0 20 -6 17 -42 -3 -38 -1 -43 18 -43 19 0 21 5 18 58 l-3 57 -57 1 -58 1 0 -58z"/>
<path d="M2746 3954 c-22 -21 -20 -67 2 -87 54 -49 137 18 98 78 -19 29 -75 34 -100 9z m69 -44 c0 -18 -6 -26 -21 -28 -23 -3 -37 18 -27 44 10 25 48 13 48 -16z"/>

</g>
</svg>
<svg version="1.0"  xmlns="http://www.w3.org/2000/svg" width="300.000000pt" height="570.000000pt" viewBox="0 0 300.000000 570.000000" preserveAspectRatio="xMidYMid meet" style={{position: "relative", top: "-750px", left: "20px", color: "#283D4F" }}>
<metadata>
Created by potrace 1.10, written by Peter Selinger 2001-2011
</metadata>
<g style={{color: "#283D4F"}} transform="translate(0.000000,570.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
<path d="M2970 5693 c0 -5 0 -264 0 -576 0 -395 -3 -574 -11 -588 -16 -31 -102 -66 -204 -84 -88 -16 -374 -47 -545 -60 -82 -6 -378 -39 -450 -50 -437 -68 -653 -208 -653 -425 0 -84 32 -149 104 -214 153 -138 436 -205 1049 -251 41 -3 104 -8 140 -10 36 -3 76 -7 90 -10 14 -2 59 -7 100 -10 89 -7 260 -41 306 -60 18 -7 42 -23 53 -34 l21 -21 0 -1252 c0 -689 0 -1432 0 -1650 0 -259 4 -398 10 -398 7 0 10 563 10 1668 0 1577 -1 1670 -17 1684 -72 63 -211 88 -748 133 -339 28 -398 36 -579 71 -272 53 -425 135 -482 259 -47 99 -21 210 69 292 139 128 447 200 1057 248 253 20 424 41 530 67 94 23 115 31 148 61 l22 20 0 599 c0 392 -3 598 -10 598 -5 0 -10 -3 -10 -7z" style={{color: "#283D4F"}}/>
</g>
</svg>


            
          <div>
            </div>
          </div>
          <div className=" col-lg-9">
            <div className="imgs d-flex align-items-center g-lg-5 fadeInUp" onClick={handleProfileClick}>
              {/* <img className="prof" src={imgUrl} alt="" style={{boxShadow: "-20px -20px 50px rgba(168, 198, 234, 0.8), 20px 20px 50px rgba(168, 198, 234, 0.8)", backgroundColor: 'transparent', borderRadius: "50%"}} /> */}
              {image ? (
                <img className="prof1" src={image} alt="" style={{boxShadow: "-20px -20px 50px rgba(168, 198, 234, 0.8), 20px 20px 50px rgba(168, 198, 234, 0.8)", backgroundColor: 'transparent', borderRadius: "50%", objectFit: "cover"}} />
              ) : (
                <img className="prof1" src={Profile1} alt="" style={{boxShadow: "-20px -20px 50px rgba(168, 198, 234, 0.8), 20px 20px 50px rgba(168, 198, 234, 0.8)", backgroundColor: 'transparent', borderRadius: "50%"}} />
              )}
              <div className="inf d-flex flex-column align-items-center ">
               <input type="file" id="fileInput" style={{ display: "none" }} onChange={handleImageChange} />
                <span className="fullName">{fullName}</span>
                <span className="inf1" style={{position: "relative", right: "65px"}}>user</span>
              </div>
                <div className="ellipse-1135" style={{transform: "translate(50%)"}}></div>
            </div>
            <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pagee1"
      >
        <div className="details d-flex align-items-center justify-content-between ms-5 mt-2">
          <h3 className="design" style={{fontSize: "34px", marginTop: "10px"}}>Interior Designs</h3>
          <Link to={"/interior"} style={{ textDecoration: "none" }}>
            <motion.button
              className="btn2 me-5"
              style={{ background: "#A8C6EA", color: "#fff" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              
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
              <Card style={{ border: "none", background: "transparent", width:"24rem" }}>
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
        className="pagee2"
      >
        <div className="details d-flex align-items-center justify-content-between ms-5 mt-1">
          <h3 className="design" style={{fontSize: "34px", marginTop: "10px"}}>Exterior Designs</h3>
          <Link to={"/exterior"} style={{ textDecoration: "none" }}>
            <motion.button
              className="btn2 me-5"
              style={{ background: "#A8C6EA", color: "#fff" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              
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
              <Card style={{ border: "none", background: "transparent", width: "24rem" }}>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
