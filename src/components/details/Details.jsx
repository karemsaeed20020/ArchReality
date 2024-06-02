// import React from 'react'
// import styles from './details.module.css';
// import Logo from '../../assets/Dummy Logo.png'
// const Details = () => {
//   return (
//     <div className={styles.content}>
//     <div className={styles.header}>
//       <img src={Logo} alt="Logo" className={styles.logo} />
//       <h1>Royal Hotel</h1>
//       <button className={styles.favoriteButton}>Favourite</button>
//     </div>
//     <div className={styles.info}>
//       <h2>Discover a world of timeless elegance and refined luxury</h2>
//       <p>
//         at The Royal Hotel, where every detail is crafted to provide an
//         unforgettable experience.
//       </p>
//       <div className={styles.amenities}>
//         <div className={styles.amenity}>
//           <h4>12 Bedroom</h4>
//         </div>
//         <div className={styles.amenity}>
//           <h4>5 Salon</h4>
//         </div>
//         <div className={styles.amenity}>
//           <h4>3 Kitchens</h4>
//         </div>
//         <div className={styles.amenity}>
//           <h4>9 Livingroom</h4>
//         </div>
//         <div className={styles.amenity}>
//           <h4>6 Bathroom</h4>
//         </div>
//       </div>
//       <div className={styles.viewAR}>
//         <button>View in AR</button>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Details

import React, { useState } from 'react'
import styles from './details.module.css';
import a from '../../assets/Dummy Logo.png'

const Details = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
        photo: null,
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const handlePhotoChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          photo: e.target.files[0],
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
      };
  return (
    <div className={styles.container}>
        <h2 className='text-center mt-5'>User Profile</h2>
        <img src={a} className={styles.ca} alt="" />
        <input type="file" hidden />

    </div>
    )
}

export default Details

