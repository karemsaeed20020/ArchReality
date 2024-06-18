import React from 'react';
import styles from './setting.module.css';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Image from '../../../assets/Ellipse 1132.png';

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
            
        <img src={Image} style={{width:"130px", height: "130px", borderRadius: "50%"}} className={styles.cz} alt="" />
        <form action="">
            <div className='row'>
                <div className='col-6' style={{position: "relative"}}>
                    <div className={styles.x}>
                        <label htmlFor="" className={styles.l}>First Name</label>
                        <input type="text" className={styles.xx} value="Sara" />
                    </div>
                </div>
                <div className='col-6' style={{position: "relative"}}>
                    <div className={styles.x}>
                        <label htmlFor="" className={styles.l}>Second Name</label>
                        <input type="text" className={styles.xx} value="Ahmed"/>
                    </div>
                </div>

            </div>
            <div className='row'>
                <div className='col-6' style={{position: "relative", top: "-50px"}}>
                    <div className={styles.x}>
                        <label htmlFor="" className={styles.l}>Email</label>
                        <input type="email" className={styles.xx} value="saraali@gmail.com"/>
                    </div>
                </div>
                <div className='col-6' style={{position: "relative", top: "-50px"}}>
                    <div className={styles.x}>
                        <label htmlFor="" className={styles.l}>Password</label>
                        <input type="password" className={styles.xx} style={{color: "#DFEAF2"}} value="123456" />
                    </div>
                </div>

            </div>
        </form>
        <button className={styles.bbb} disabled>Save</button>
        </div>

    </div>
    </div>
    </>
  )
}

export default Setting