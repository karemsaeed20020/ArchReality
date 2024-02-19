// import React, { useEffect, useState } from 'react';
// import { useRef } from 'react';
// import './login.css';
// import Frame1 from '../../assets/frame-13@2x.png';
// import Frame2 from '../../assets/frame-14@2x.png';
// import Vector1 from '../../assets/vector-328@2x.png';
// import Vector2 from '../../assets/vector-1@2x.png';
// import Vector3 from '../../assets/vector-2@2x.png';
// import Rectangle from '../../assets/rectangle-830@2x.png';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   // const emailRef = useRef(null);
//   // const passwordRef = useRef(null);
//   // const [formData, setFormData] = useState({});
//   // const handleChange = (e) => {
//   //   // Update formData state with the new values
//   //   setFormData({
//   //     ...formData,
//   //     [e.target.id]: e.target.value, // Use the input id as the key in formData
//   //   });
//   // };
//   // const [post, setPost] = useState({
//   //   email: '',
//   //   password: '',
//   // })

  

//   // const handleInput = (event) => {
//   //   setPost({...post, [event.target.name]: event.target.value})
//   // }

//   const handleSubmit =  () => {
//     // e.preventDefault();
//     // const email = emailRef.current.value;
//     // const password = passwordRef.current.value;

//     // // Perform actions with email and password values
//     // console.log('Email:', email);
//     // console.log('Password:', password);

//     // setEmail('');
//     // setPassword('');
    

//      // event.preventDefault();
//     // axios.post('https://arch-reality.onrender.com/api/auth/login', {post})
//     // .then(response => console.log(response))
//     // .catch(err => console.log(err))
    
//     // try {
//     //   const res = await axios.post('https://arch-reality.onrender.com/api/auth/login', formData);
//     //   console.log(res.data);
      
//     //   // Handle success
//     // } catch (error) {
//     //   console.error('Error:', error);
//     //   // Handle error
//     // }

//   //   fetch("https://arch-reality.onrender.com/api/auth/login", {
//   //     method: "POST",
//   //     headers: {
//   //       'Content-type': "application/json"
//   //     },
//   //     body: JSON.stringify({
//   //       name: "User"
//   //     })
//   //   }).then((res) => {
//   //     return res.json();
//   //   })
//   //  .then((data) => console.log(data))
//   //  .catch((error) => console.log(error));
  

//   const requestData = {
//     email: email,
//     password: password,
//   };
//    fetch('https://arch-reality.onrender.com/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
        

        
//         body: JSON.stringify(requestData),
//       })
//         .then(response => response.json())
//         .then(data => {
//           // Handle the API response data
//           console.log(data);
//           if (data.Message==="User loged in") {
//            alert("logged in ")
//           } else {
//             // Handle unsuccessful login
//             alert("It seems like invalid credentials OR you didn't confirm your email");
//           }

//         })
//         .catch(error => {
//           // Handle errors
//           console.error('Error:', error);
//         });

    
//   };
  
  

//    return (
//     <div className='login-container'>
//       <div className="container">
//         <img className="container-child" alt="" src={Vector1} />
//         <img className="container-item" alt="" src={Rectangle} />
//         <div className="arcreality">ARCHREALITY</div>
//         <b className="log-in">Log in</b>
//         <form className="login-form">
//           {/* <div className="form-group">
//             <input placeholder='Email' type="email" id="email" name="email" className="email-input" ref={emailRef} value={email} onChange={(e) => setEmail(e.target.value)}  required />
//             <input placeholder='Email' type="email" id="email" name="email" className="email-input" ref={emailRef} value={email} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <input placeholder='Password' type="password" id="password" name="password" className="password-input" ref={passwordRef} value={password}  onChange={(e) => setPassword(e.target.value)} required />
//             <input placeholder='Password' type="password" id="password" name="password" className="password-input" ref={passwordRef} value={password}  onChange={handleChange} required />
//           </div> */}
//           <div className="mb-3">
//             <input type="email" className="fo form-control1" id="formGroupExampleInput" placeholder="Email"  onChange={(e) => setEmail(e.target.value)}   />
//           </div>
//           <div className="mb-3">
//             <input type="password" className="form-control1" id="formGroupExampleInput2" placeholder="Password"  onChange={(e) => setEmail(e.target.value)}    />
//           </div>
//           <div className="forget-password">Forget password ?</div>
//           <button onClick={handleSubmit}  type="submit" className="login-btn" style={{borderRadius: "15px"}} >LOG IN</button>
//         </form>
//         <div className="frame-parent">
//           <img className="frame-child" alt="" src={Frame1} />
//           <img className="frame-child" alt="" src={Frame2} />
//         </div>
//         <div className="log-in-with"> log in with</div>
//         <img className="desktop-20-inner" alt="" src={Vector2} />
//         <img className="vector-icon" alt="" src={Vector3} />
//         <div className="or-wrapper">
//           <div className="or">OR</div>
//         </div>
//         <div className="join-us-by">
//           join us by login to see our features and our designs
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Login;

import React, { useContext, useState } from 'react';
import './login.css';
import Frame1 from '../../assets/frame-13@2x.png';
import Frame2 from '../../assets/frame-14@2x.png';
import Vector1 from '../../assets/vector-328@2x.png';
import Vector2 from '../../assets/vector-1@2x.png';
import Vector3 from '../../assets/vector-2@2x.png';
import Rectangle from '../../assets/rectangle-830@2x.png';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../context/UserContext';

const Login = ({match}) => {
  // const {setToken,setUserName}=useContext(userContext);
  const {setToken,setFirstNamee, setLastNamee, firstNamee, lastNamee, setImage, image}=useContext(userContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  

  const handleSubmit = () => {
    const requestData = {
      email: email,
      password: password,
    };
    
    fetch('https://arch-reality.onrender.com/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
    .then(response => {
      if(response.status===200){
        return response.json();
      }
    })
    .then(data => {
        console.log(data);
        setToken(data.userToken);
        // setUserName(data.userName);
        setFirstNamee(data.firstName);
        setLastNamee(data.lastName);
        setImage(data.picture)

        navigate("/");
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };
  
  return (
    <div className='login-container'>
      <div className="container">
        <img className="container-child" alt="" src={Vector1} />
        <img className="container-item" alt="" src={Rectangle} />
        <div className="arcreality">ARCHREALITY</div>
        <b className="log-in">Log in</b>
        <form className="login-form">
          <div className="mb-3">
            <input type="email" className="fo form-control1" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="forget-password">Forget password ?</div>
          <button onClick={handleSubmit} type="button" className="login-btn" style={{ borderRadius: "15px" }}>LOG IN</button>
        </form>
        <div className="frame-parent">
          <img className="frame-child" alt="" src={Frame1} />
          <img className="frame-child" alt="" src={Frame2} />
        </div>
        <div className="log-in-with"> log in with</div>
        <img className="desktop-20-inner" alt="" src={Vector2} />
        <img className="vector-icon" alt="" src={Vector3} />
        <div className="or-wrapper">
          <div className="or">OR</div>
        </div>
        <div className="join-us-by">
          join us by login to see our features and our designs
        </div>
      </div>
    </div>
  )
}

export default Login;
