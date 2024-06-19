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

import React, { useState } from 'react';
import Test222 from '../../assets/All-over-color-for-an-affordable-home-office-interior-design.jpeg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import './ResetPassword.css';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        
        try {
            const response = await axios.put('https://arch-reality.onrender.com/api/auth/resetPass', {
                email,
                password: password, // Assuming the API expects "password" field
                cPassword: confirmPassword // Change "confirmPassword" to "cPassword"
            });
            
            if (response.status === 200) {
                setLoading(false);
                setEmailSubmitted(true);
                navigate('/login'); // Navigate to success page
            }
        } catch (err) {
            setLoading(false);
            setError('An error occurred. Please try again.'); // Display error message
        }
    };

    return (
        <div className="containers">
            <div className="row">
                <div className="fe col-lg-6 order-lg-2 order-1 pt-5">
                    <h2 className="main-text mb-5 pt-5 mt-5">Reset Your Password</h2>
                    {error && <p className="text-danger">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Enter Your Email" className="ue form-control main-input mt-3" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Enter New Password" className="cx form-control main-input mt-3" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input type="password" placeholder="Enter Confirm Password" className="cz form-control main-input mt-3" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <button type="submit" className="bn p-2 btn btn-sz-primary d-flex align-items-center">
                            {loading ? (
                                <>
                                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                    <span className="ps-3">Loading...</span>
                                </>
                            ) : (
                                'Submit'
                            )}
                        </button>
                    </form>
                </div>
                <div className="col-lg-6 order-lg-1 order-2 text-center">
                    {/* Display image or visual */}
                    <img src={Test222} alt="" className="img-fluid" style={{ height: "102vh", objectFit: "cover" }} />
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
