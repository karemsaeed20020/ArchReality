import React from 'react';
import styles from './setting.module.css';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Setting = () => {
    const profilePage = useSelector(state => state.user.profilePage);
  return (
    <>
    <Navbar />
    <div className={styles.container}>
        <div className={styles.menu}>

            <Sidebar />
        </div>
    <div className={styles.content}>

        <div className={styles.container11}>
            
        <img src={profilePage} style={{width:"130px", height: "130px", borderRadius: "50%"}} className={styles.cz} alt="" />
        <form action="">
            <div className='row'>
                <div className='col-6' style={{position: "relative", left: "60px"}}>
                    <div className={styles.x}>
                        <label htmlFor="" className={styles.l}>First Name</label>
                        <input type="text" className={styles.xx} />
                    </div>
                </div>
                <div className='col-6' style={{position: "relative", left: "-25px"}}>
                    <div className={styles.x}>
                        <label htmlFor="" className={styles.l}>Second Name</label>
                        <input type="text" className={styles.xx} />
                    </div>
                </div>

            </div>
            <div className='row'>
                <div className='col-6' style={{position: "relative", left: "50px", top: "-50px"}}>
                    <div className={styles.x}>
                        <label htmlFor="" className={styles.l}>Email</label>
                        <input type="email" className={styles.xx} />
                    </div>
                </div>
                <div className='col-6' style={{position: "relative", left: "-25px", top: "-50px"}}>
                    <div className={styles.x}>
                        <label htmlFor="" className={styles.l}>Password</label>
                        <input type="password" className={styles.xx} style={{color: "#DFEAF2"}} />
                    </div>
                </div>

            </div>
        </form>
        <button className={styles.bbb}>Save</button>
        </div>

    </div>
    </div>
    </>
  )
}

export default Setting
// import React from 'react';
// import styles from './setting.module.css';
// import Navbar from '../Navbar/Navbar';
// import Sidebar from '../Sidebar/Sidebar';
// import { useSelector } from 'react-redux';

// const Setting = () => {
//         const profilePage = useSelector(state => state.user.profilePage);

//   return (
//     <>
//     <Navbar />
//     <div className={styles.container}>
//         <div className={styles.menu}>

//             <Sidebar />
//         </div>
//         <div className={styles.content}>
//             <div className={styles.home}>
//                 <div className={styles.image}>
//                     <img src={profilePage} className={styles.images} alt="" />
//                 </div>
                
//             </div>

//         </div>

//     </div>
      
//     </>
//   )
// }

// export default Setting


// import React from 'react'
// import styles from './setting.module.css';
// import Sidebar from '../Sidebar/Sidebar';
// import Navbar from '../Navbar/Navbar';
// import { useSelector } from 'react-redux';
// const Setting = () => {
//     const profilePage = useSelector(state => state.user.profilePage);
//   return (
//     <>
//     <Navbar />
//     <div className={styles.container}>
//         <div className={styles.menu}>
//             <Sidebar />
//         </div>
//         <div className={styles.content}>
//             <div className={styles.infoContainer}>
//                 <div className={styles.imgContainer}>
//                     <img src={profilePage} className={styles.imgContainers}  alt="" fill />
//                 </div>
//                 Sara Ali
//             </div>
//             <div className={styles.formContainer}>
//                 <label className={styles.sx1} htmlFor="">First Name</label>
//                 <input className={styles.sx2}  type="text" name='username' placeholder='Sara ALi' />
//                 <label className={styles.sx1}  htmlFor="">Last Name</label>
//                 <input className={styles.sx2} type="text" name='username' placeholder='Sara ALi' />
//                 <label className={styles.sx1}  htmlFor="">Old Password</label>
//                 <input className={styles.sx2} type="password" name='username'  />
//                 <label className={styles.sx1}  htmlFor="">Password</label>
//                 <input className={styles.sx2} type="password" name='username' placeholder='******' />
//                 <label className={styles.sx1}  htmlFor="">Confirm Password</label>
//                 <input className={styles.sx2} type="password" name='username'  />

//             </div>
//         </div>
      
//     </div>
//     </>
//   )
// }

// export default Setting

