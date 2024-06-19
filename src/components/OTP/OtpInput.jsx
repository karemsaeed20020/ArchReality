import React, { useState } from 'react';
import Test2 from '../../assets/architecture-1048092_1280.jpg';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import './OtpInput.css';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';


const OtpInput = () => {
    const location = useLocation(); // Get the location prop
    const { email } = location.state; // Access email from location.state
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const navigate = useNavigate();
    const [otp, setOtp] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://arch-reality.onrender.com/api/auth/checkOTP', { email, otp })
            .then(res => {
                // Handle the response from the OTP verification API
                console.log(res.data);
                if (res.status === 200) {
                    setEmailSubmitted(true);
                    navigate('/reset-password');
                }
            }).catch(err => {
                console.log(err);
                // Handle errors
            })
    };

    return (
        <div className="containers ">
            <div className="row">
                <div className="fe col-lg-6 order-lg-2 order-1 pt-5">
                    <h2 className="main-text pt-5 mt-5">Verify <br /> Your OTP</h2>
                    <p className="mb-5 mt-3 text-black">An OTP has been sent to your email: {email}</p>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter OTP" className="form-control main-input mt-3" value={otp} onChange={(e) => setOtp(e.target.value)} />
                        <button className="pq p-2 btn btn-sz-primary d-flex align-items-center" onClick={handleSubmit}>
                                        Submit
                                    </button>
                    </form>
                </div>
                <div className="col-lg-6 order-lg-1 order-2 text-center">
                    {/* Display image or visual */}
                    <img src={Test2} alt="" className="img-fluid" style={{ height: "102vh" }} />
                </div>
            </div>
        </div>
    );
}

export default OtpInput;
