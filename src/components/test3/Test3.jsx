// import React from 'react';
// import styles from './N.module.css';

// const Test3 = () => {
//   return (
//     <>
//     <section className={styles.content}>
//         <div className={styles.content}>
//             <h2 className={styles.caq}>Contact Us</h2>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minus saepe minima optio illo. Laudantium pariatur enim ipsum eligendi est libero iusto magnam vel maiores?</p>
//         </div>
//         <div className={styles.container}>
//             <div className={styles.contentInfo}>
//                 <div className={styles.box}>
//                     <div className={styles.icon}>
//                     <i className='fa fa-map-marker' aria-hidden="true"></i>
//                     </div>
//                     <div className={styles.text}>
//                         <h3>Address</h3>
//                         <p>4671 Sugar Camp Road, <br />Owatonna, Minnesota, <br />55060</p>
//                     </div>
//                 </div>
//                 <div className={styles.box}>
//                     <div className={styles.icon}>
//                         <i className='fa fa-phone' aria-hidden="true"></i>
//                     </div>
//                     <div className={styles.text}>
//                         <h3>Phone</h3>
//                         <p>507-475-6094</p>
//                     </div>
//                 </div>
//                 <div className={styles.box}>
//                     <div className={styles.icon}>
//                     <i className='fa fa-envelope' aria-hidden="true"></i>
//                     </div>
//                     <div className={styles.text}>
//                         <h3>Email</h3>
//                         <p>Ahmed12@gmail.com</p>
//                     </div>
//                 </div>
//             </div>
//             <div className={styles.contactForm}>
//                 <form action="">
//                     <h2>Send Message</h2>
//                     <div className={styles.inputBox}>
//                         <input type="text" />
//                         <span>Full Name</span>

//                     </div>
//                 </form>
                
//             </div>

//         </div>

//     </section>
      
//     </>
//   )
// }

// export default Test3

import React from 'react';
import { motion } from 'framer-motion';
import './n.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';


const Test3 = () => {
  return (
    <>
      <header className="header">
        <Header />
        <motion.div
          className="section__container header__container"
          id="home"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="mt-5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Make Your Interior More Minimalistic & Modern
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Turn your room with panto into a lot more minimalistic and modern with ease and speed
          </motion.p>
          <motion.a
            href="#choose"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <i className="ri-arrow-down-double-line"></i>
          </motion.a>
        </motion.div>
      </header>

      <motion.section
        className="section__container choose__container"
        id="choose"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img className="choose__bg" src="https://github.com/WebDesignMastery/NovusHaus_16-09-23/blob/main/assets/dot-bg.png?raw=true" alt="bg" />
        <motion.div
          className="choose__content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="section__header">Why Choose Us</h2>
          <p className="section__subheader">
            Experience Unmatched Creativity and Expertise in Interior Design. Discover Why We're the Right Choice for Your Dream Space
          </p>
          <div className="choose__grid">
            {/* Cards can be animated similarly */}
            <motion.div
              className="choose__card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span><i className="ri-truck-line"></i></span>
              <h4>Fast & Free Shipping</h4>
              <p>Elevate your interior design with our Fast & Free Shipping service without delay</p>
            </motion.div>
            <motion.div
              className="choose__card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span><i className="ri-shopping-bag-3-line"></i></span>
              <h4>Easy to Shop</h4>
              <p>Discover Effortless Elegance: Explore Our Easy-to-Shop Interior Design Solutions</p>
            </motion.div>
            <motion.div
              className="choose__card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span><i className="ri-customer-service-2-line"></i></span>
              <h4>24/7 Support</h4>
              <p>Experience peace of mind knowing that our dedicated team is available round the clock</p>
            </motion.div>
            <motion.div
              className="choose__card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span><i className="ri-loop-right-line"></i></span>
              <h4>Hassle Free Returns</h4>
              <p>We believe in the perfect match, and if it doesn't quite fit, we make returning items a breeze</p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="choose__image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img src="https://github.com/WebDesignMastery/NovusHaus_16-09-23/blob/main/assets/choose.jpg?raw=true" alt="choose" />
        </motion.div>
      </motion.section>

      {/* Repeat similar animation wrapping for other sections */}

      <motion.section
        className="offer__container"
        id="offer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="offer__grid__top">
          <img src="https://github.com/WebDesignMastery/NovusHaus_16-09-23/blob/main/assets/offer-1.jpg?raw=true" alt="offer" />
          <img src="https://github.com/WebDesignMastery/NovusHaus_16-09-23/blob/main/assets/offer-2.jpg?raw=true" alt="offer" />
          <img src="https://github.com/WebDesignMastery/NovusHaus_16-09-23/blob/main/assets/offer-3.jpg?raw=true" alt="offer" />
          <div className="offer__content">
            <h2 className="section__header">Smart Offers</h2>
            <p className="section__subheader">Explore exclusive deals to transform your interior with style</p>
            <motion.button
              className="btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Explore Now
            </motion.button>
          </div>
        </div>
        <div className="offer__grid__bottom">
          <img src="https://github.com/WebDesignMastery/NovusHaus_16-09-23/blob/main/assets/offer-4.jpg?raw=true" alt="offer" />
          <img src="https://github.com/WebDesignMastery/NovusHaus_16-09-23/blob/main/assets/offer-5.jpg?raw=true" alt="offer" />
          <img src="https://github.com/WebDesignMastery/NovusHaus_16-09-23/blob/main/assets/offer-6.jpg?raw=true" alt="offer" />
          <img src="https://github.com/WebDesignMastery/NovusHaus_16-09-23/blob/main/assets/offer-7.jpg?raw=true" alt="offer" />
        </div>
      </motion.section>

      {/* Modern Interior Design Section */}
      <motion.section
        className="section__container modern__container"
        id="modern"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="modern__image">
          <img src="https://github.com/WebDesignMastery/NovusHaus_16-09-23/blob/main/assets/modern-1.jpg?raw=true" alt="modern" className="modern__img-1" />
          <img src="https://github.com/WebDesignMastery/NovusHaus_16-09-23/blob/main/assets/modern-2.jpg?raw=true" alt="modern" className="modern__img-2" />
          <img src="https://github.com/WebDesignMastery/NovusHaus_16-09-23/blob/main/assets/modern-3.jpg?raw=true" alt="modern" className="modern__img-3" />
        </div>
        <div className="modern__content">
          <h2 className="section__header">
            We help you design modern interior design
          </h2>
          <p className="section__subheader">
            Transform Your Space with Our Contemporary Interior Design Expertise: Let us guide you in crafting sleek and stylish interiors that reflect your unique taste and lifestyle
          </p>
          <div className="modern__grid">
            <div className="modern__card">
              <span><i className="ri-checkbox-blank-circle-line"></i></span>
              <p>Our team specializes in creating customized interior designs that embrace modern aesthetics.</p>
            </div>
            <div className="modern__card">
              <span><i className="ri-checkbox-blank-circle-line"></i></span>
              <p>We stay at the forefront of design trends, ensuring your space is stylish and innovative.</p>
            </div>
            <div className="modern__card">
              <span><i className="ri-checkbox-blank-circle-line"></i></span>
              <p>Modern interior design isn't just about aesthetics; it's about functionality and comfort too.</p>
            </div>
            <div className="modern__card">
              <span><i className="ri-checkbox-blank-circle-line"></i></span>
              <p>We take care of all aspects of the design process, from concept to procurement and installation.</p>
            </div>
          </div>
          <Link to={'infoInterior'}>
            <motion.button
              className="btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Show All
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* Modern Exterior Design Section */}
      <motion.section
        className="section__container modern__container"
        id="modern"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="modern__image">
          <img src="https://media.istockphoto.com/id/1516938158/photo/3d-render-of-forest-house-with-large-windows-at-night.jpg?s=612x612&w=0&k=20&c=C-peb5w4MRU4rcl0M45-zX6NMUXPwtmIDPWRbuJ4Quw=" alt="exterior" className="modern__img-1" />
          <img src="https://media.istockphoto.com/id/1516936022/photo/digitally-generated-image-of-beautiful-modern-house-in-the-forest.jpg?s=612x612&w=0&k=20&c=pbP2BlJBh7WpuiFNLGp35nPEXWesAb8Mwlp6or6tmEY=" alt="exterior" className="modern__img-2" />
          <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE1fHxleHRlcmlvciUyMGRlc2lnbnxlbnwwfHx8fDE2ODYxOTcxMjk&ixlib=rb-1.2.1&q=80&w=400" alt="exterior" className="modern__img-3" />
        </div>
        <div className="modern__content">
          <h2 className="section__header">
            We help you design modern exterior spaces
          </h2>
          <p className="section__subheader">
            Enhance Your Outdoor Living with Our Expert Exterior Design Solutions: Let us assist you in creating beautiful and functional exterior spaces that enhance your home's curb appeal and suit your lifestyle.
          </p>
          <div className="modern__grid">
            <div className="modern__card">
              <span><i className="ri-checkbox-blank-circle-line"></i></span>
              <p>Our team excels in crafting bespoke exterior designs that reflect modern styles and meet your outdoor needs.</p>
            </div>
            <div className="modern__card">
              <span><i className="ri-checkbox-blank-circle-line"></i></span>
              <p>We keep up with the latest trends in exterior design, ensuring your outdoor spaces are both contemporary and inviting.</p>
            </div>
            <div className="modern__card">
              <span><i className="ri-checkbox-blank-circle-line"></i></span>
              <p>Modern exterior design integrates aesthetics with practicality, creating spaces that are beautiful and functional.</p>
            </div>
            <div className="modern__card">
              <span><i className="ri-checkbox-blank-circle-line"></i></span>
              <p>From initial concept to final installation, we manage all aspects of the exterior design process to bring your vision to life.</p>
            </div>
          </div>
          <Link to={'infoExterior'}>
            <motion.button
              className="btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Show All
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <motion.section
        className="section__container testimonial__container"
        id="testimonial"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="section__header">Testimonials</h2>
        <div className="swiper">
          <div className="swiper-wrapper">
            <motion.div
              className="swiper-slide"
              whileHover={{ scale: 1.05 }}
            >
              <div className="testimonial__card">
                <p>
                  Working with them was an absolute pleasure! Their modern design
                  expertise completely transformed my home into a contemporary
                  haven. I now have a space that not only looks stunning but also
                  feels incredibly comfortable. I couldn't be happier with the
                  results
                </p>
                <img src="https://github.com/WebDesignMastery/NovusHaus_16-09-23/blob/main/assets/profile-pic-1.jpg?raw=true" alt="testimonial" />
                <h4>Sam William</h4>
                <h5>CEO, Co-Founder</h5>
              </div>
            </motion.div>
            <motion.div
              className="swiper-slide"
              whileHover={{ scale: 1.05 }}
            >
              <div className="testimonial__card">
                <p>
                  I hired them to revamp our office space, and the results
                  exceeded my expectations. Their innovative design concepts
                  breathed new life into our workplace, making it both functional
                  and stylish. The team's attention to detail and commitment to
                  quality are truly commendable.
                </p>
                <img src="assets/profile-pic-2.jpg" alt="testimonial" />
                <h4>Michelle Anna</h4>
                <h5>Office Renovator</h5>
              </div>
            </motion.div>
            <motion.div
              className="swiper-slide"
              whileHover={{ scale: 1.05 }}
            >
              <div className="testimonial__card">
                <p>
                  I had a vision of a minimalist-inspired home, and they brought
                  it to life flawlessly. Their designers understood my aesthetic
                  and incorporated sleek, clean lines, and a neutral color palette
                  to create a serene oasis. I'm in love with my modern,
                  clutter-free space!
                </p>
                <img src="assets/profile-pic-3.jpg" alt="testimonial" />
                <h4>John D'souza</h4>
                <h5>Banker</h5>
              </div>
            </motion.div>
            <motion.div
              className="swiper-slide"
              whileHover={{ scale: 1.05 }}
            >
              <div className="testimonial__card">
                <p>
                  What sets them apart is their professionalism and efficiency.
                  They made the entire design process hassle-free, from the
                  initial consultation to the final installation. Their team
                  handled everything, leaving me with a beautifully designed
                  modern interior
                </p>
                <img src="assets/profile-pic-4.jpg" alt="testimonial" />
                <h4>David Laid</h4>
                <h5>Businessman</h5>
              </div>
            </motion.div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </motion.section>

      {/* Blog Section */}
      <motion.section
        className="section__container blog_container"
        id="blog"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="section__header">Recent Blog</h2>
        <div className="blog__grid">
          <motion.div
            className="blog__card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="https://github.com/WebDesignMastery/NovusHaus_16-09-23/blob/main/assets/blog-1.jpg?raw=true" alt="blog" />
            <h4>Mastering Modern Minimalism</h4>
            <p><span>by</span> DesignSavvySoul <span>on</span> Apr 18th, 2022</p>
          </motion.div>
          <motion.div
            className="blog__card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="https://github.com/WebDesignMastery/NovusHaus_16-09-23/blob/main/assets/blog-2.jpg?raw=true" alt="blog" />
            <h4>The Fusion of Tech and Design</h4>
            <p><span>by</span> ChicNestInteriors <span>on</span> Nov 10th, 2022</p>
          </motion.div>
          <motion.div
            className="blog__card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="https://github.com/WebDesignMastery/NovusHaus_16-09-23/blob/main/assets/blog-3.jpg?raw=true" alt="blog" />
            <h4>Eco-Friendly Modern Interiors</h4>
            <p><span>by</span> HomeStyleHarmony <span>on</span> Feb 25th, 2023</p>
          </motion.div>
        </div>
      </motion.section>
      
      <Footer />
    </>
  );
}

export default Test3;
