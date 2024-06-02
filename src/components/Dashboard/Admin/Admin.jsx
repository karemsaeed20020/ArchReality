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

// import Test223 from '../../../assets/pexels-marketingtuig-87223.jpg';
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Spinner } from 'react-bootstrap';
// import './Admin.module.css';
// import { useSelector } from 'react-redux';

// const Admin = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
//     const loading = useSelector((state) => state.user.loading);
//     const [emailSubmitted, setEmailSubmitted] = useState(false);

//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     setError('');
//     //     setLoading(true);
        
//     //     try {
//     //         const response = await axios.post('https://arch-reality.onrender.com/api/dashboard/login', {
//     //             email,
//     //             password
//     //         });

//     //         if (response.status === 200) {
//     //             setLoading(false);
//     //             navigate('/dashboard'); // Navigate to the dashboard on successful login
//     //         }
//     //     } catch (err) {
//     //         setLoading(false);
//     //         if (err.response && err.response.data) {
//     //             // Use the error message from the server if available
//     //             setError(err.response.data.message);
//     //         } else {
//     //             setError('An error occurred. Please try again.'); // Display a generic error message
//     //         }
//     //     }
//     // };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('https://arch-reality.onrender.com/api/dashboard/login', { email, password })
//             .then(res => {
//                 if (res.status === 200) {
//                     setEmailSubmitted(true);
//                     navigate('/dashboard', { state: { email, password } }); // Pass email as state
//                 } else {
//                     alert('Email / Server Error.');
//                 }
//             }).catch(err => {
//                 console.log(err);
//             });
//     };


//     return (
//         <div className="containers pt-5">
//             <div className="row">
//                 <div className="fe col-lg-6 order-lg-2 order-1 pt-5">
//                     <h2 className="main-text mb-5 pt-5 mt-5">Admin Login</h2>
//                     {error && <p className="text-danger">{error}</p>}
//                     <form onSubmit={handleSubmit}>
//                         <input
//                             type="email"
//                             placeholder="Enter Your Email"
//                             className="ue form-control main-input mt-3"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                         <input
//                             type="password"
//                             placeholder="Enter Your Password"
//                             className="cx form-control main-input mt-3"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
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
//                     <img src={Test223} alt="" className="img-fluid" style={{ height: "102vh", objectFit: "cover" }} />
//                 </div>
//             </div>
//         </div>    );
// }

// export default Admin;

import Test223 from '../../../assets/pexels-marketingtuig-87223.jpg';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'; // Import useSelector
import './Admin.module.css';

const Admin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');
      const profilePage = useSelector(state => state.user.profilePage);

    // Access loading state from the Redux store
    const loading = useSelector((state) => state.user.loading);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        try {
            const response = await axios.post('https://arch-reality.onrender.com/api/dashboard/login', {
                email,
                password
            });

            if (response.status === 200) {
                navigate('/dashboard'); // Navigate to the dashboard on successful login
                
            }
        } catch (err) {
            if (err.response && err.response.data) {
                // Use the error message from the server if available
                setError(err.response.data.message);
            } else {
                setError('An error occurred. Please try again.'); // Display a generic error message
            }
        }
    };

    return (
        <div className="containers pt-5">
            <div className="row">
                <div className="fe col-lg-6 order-lg-2 order-1 pt-5">
                    <h2 className="main-text mb-5 pt-5 mt-5">Admin Login</h2>
                    {/* Display loading spinner if loading state is true */}
                    {loading && <Spinner animation="border" role="status" />}
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="ue form-control main-input mt-3"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            className="cx form-control main-input mt-3"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className="bn p-2 btn btn-sz-primary d-flex align-items-center">
                            {!loading ? 'Submit' : null}
                        </button>
                    </form>
                </div>
                <div className="col-lg-6 order-lg-1 order-2 text-center">
                    {/* Display image or visual */}
                    <img src={Test223} alt="" className="img-fluid" style={{ height: "102vh", objectFit: "cover" }} />
                </div>
            </div>
        </div>
    );
}

export default Admin;
