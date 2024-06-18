import React, { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './v.css';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";

const Test4 = () => {
  // UseRefs for form inputs
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Get the values from the refs
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const message = messageRef.current.value;

    // Validate inputs (optional)
    if (!firstName || !lastName || !email || !message) {
      toast.error('Please fill in all the required fields!');
      return;
    }

    // Show toast notification
    toast.success('Message sent successfully!');

    // Clear the form fields
    firstNameRef.current.value = '';
    lastNameRef.current.value = '';
    emailRef.current.value = '';
    phoneRef.current.value = '';
    messageRef.current.value = '';
  };

  return (
    <>
      <Header />
      <section className="contact-section">
        <div className="contact-bg">
          <h3>Get in Touch with Us</h3>
          <h2>Contact Us</h2>
          <div className="line">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda iste facilis quos impedit fuga nobis modi debitis laboriosam velit reiciendis quisquam alias corporis, maxime enim, optio ab dolorum sequi qui.</p>
        </div>

        <div className="contact-body">
          <div className="contact-info">
            <div>
              <span className='qqqq'><i className="fas fa-mobile-alt"></i></span>
              <span>Phone No.</span>
              <span className="text">1-2392-23928-2</span>
            </div>
            <div>
              <span className='qqqq'><i className="fas fa-envelope-open"></i></span>
              <span>E-mail</span>
              <span className="text">mail@company.com</span>
            </div>
            <div>
              <span className='qqqq'><i className="fas fa-map-marker-alt"></i></span>
              <span>Address</span>
              <span className="text">2939 Patrick Street, Victoria TX, United States</span>
            </div>
            <div>
              <span className='qqqq'><i className="fas fa-clock"></i></span>
              <span>Opening Hours</span>
              <span className="text">Monday - Friday (9:00 AM to 5:00 PM)</span>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  ref={firstNameRef}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  ref={lastNameRef}
                />
              </div>
              <div>
                <input
                  type="email"
                  className="form-control axvvb"
                  placeholder="E-mail"
                  ref={emailRef}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  ref={phoneRef}
                />
              </div>
              <textarea
                rows="5"
                placeholder="Message"
                className="form-control"
                ref={messageRef}
              ></textarea>
              <button className='btn110' type='submit'>Send Message</button>
            </form>

            <div>
              <img src="https://github.com/prabinmagar/contact-us-page-/blob/master/image/contact-png.png?raw=true" alt="" />
            </div>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223700.1490386933!2d-97.11558670486288!3d28.829485511234168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864266db2e2dac3b%3A0xeee20d566f63267d!2sVictoria%2C%20TX%2C%20USA!5e0!3m2!1sen!2snp!4v1604921178092!5m2!1sen!2snp"
            width="100vw"
            height="450"
            frameBorder="0"
            style={{ width: "100%", height: "450px", border: "0" }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </section>
      <Footer />
      {/* ToastContainer with custom options */}
      <ToastContainer 
        position="bottom-right" 
        autoClose={5000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        toastStyle={{ whiteSpace: "nowrap" }} // Ensures the message is in a single line
      />
    </>
  );
}

export default Test4;
