import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Admin.module.css';
import Test223 from '../../../assets/pexels-marketingtuig-87223.jpg';

const Admin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const loading = useSelector((state) => state.user.loading);

    // Local loading state to control the spinner
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true); // Start showing the spinner

        try {
            const response = await axios.post('https://arch-reality.onrender.com/api/dashboard/login', {
                email,
                password
            });

            if (response.status === 200) {
                toast.success('Login successful!');
                navigate('/dashboard'); // Navigate to the dashboard on successful login
            } else {
                toast.error('Login failed. Please try again.');
            }
        } catch (err) {
            if (err.response && err.response.data) {
                setError(err.response.data.message);
                toast.error(err.response.data.message);
            } else {
                setError('An error occurred. Please try again.');
                toast.error('An error occurred. Please try again.');
            }
        } finally {
            setIsSubmitting(false); // Stop showing the spinner
        }
    };

    return (
        <div className="containers">
            <div className="row">
                <div className="fe col-lg-6 order-lg-2 order-1 pt-5">
                    <h2 className="main-text mb-5 pt-5 mt-5">Admin Login</h2>
                    {error && <p className="text-danger">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="ue form-control main-input mt-3"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isSubmitting} // Disable input during submission
                        />
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            className="cx form-control main-input mt-3"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isSubmitting} // Disable input during submission
                        />
                        <button type="submit" className="bn p-2 btn btn-sz-primary d-flex align-items-center" disabled={isSubmitting}>
                            {isSubmitting ? (
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
                    <img src={Test223} alt="" className="img-fluid" style={{ height: "102vh", objectFit: "cover" }} />
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                toastStyle={{ whiteSpace: "nowrap" }}
            />
        </div>
    );
}

export default Admin;
