import React, { useState } from 'react';
import Test3 from '../../assets/brutalism-7880446_1280.jpg';
import { Link, useNavigate } from 'react-router-dom';
import OtpInput from '../OTP/OtpInput';
import axios from 'axios';
import './ForgetPassword.css'
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { forgetPasswordStart, forgetPasswordSuccess, forgetPasswordFailure } from '../../redux/user/userSlice';

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.user.loading);
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(forgetPasswordStart());
        axios.post('https://arch-reality.onrender.com/api/auth/forget', { email })
            .then(res => {
                if (res.status === 200) {
                    setEmailSubmitted(true);
                    dispatch(forgetPasswordSuccess());
                    navigate('/otp', { state: { email } }); // Pass email as state
                } else {
                    dispatch(forgetPasswordFailure('Email / Server Error.'));
                    alert('Email / Server Error.');
                }
            }).catch(err => {
                console.log(err);
                dispatch(forgetPasswordFailure('Email / Server Error.'));
            });
    };

    return (
        <>
            {!emailSubmitted ? (
                <div className="container-fluid  pt-5">
                    <div className="row fa ">
                        <div className="col-lg-6 ">
                            <img src={Test3} alt="Main IMG" className="img-fluid  d-none d-lg-block" />
                        </div>
                        <div className="za col-lg-6 col-sm-6 pt-5">
                            <h2 className="ma main-text pt-5 mt-5">Forgot <br /> Your Password</h2>
                            <input type="email" placeholder="Enter Your E-mail" className="form-control ld main-input mt-5" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <div className="row gs mt-3">
                                <div className="col-md-6 ps-5 ">
                                    <button className="pq p-2 btn btn-sz-primary d-flex align-items-center" onClick={handleSubmit}>
                                        {loading ? (
                                            <>
                                                <Spinner
                                                    as="span"
                                                    animation="border"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                />
                                                <span className="ps-3">Loading...</span>
                                            </>
                                        ) : (
                                            "Submit"
                                        )}
                                    </button>
                                </div>
                                {/* <div className="col-md-6 pt-2">
                                    <Link to={'/login'} className="back-to-login">Back To Login</Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <OtpInput email={email} />
            )}
        </>
    );
}

export default ForgetPassword;
