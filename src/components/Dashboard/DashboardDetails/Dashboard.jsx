import React from 'react';
import styles from './dashboard.module.css';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import TopBox from '../topBox/TopBox';
import BarChartBox from '../barChartBox/BarChartBox';
import { barChartBoxRevenue, barChartBoxVisit, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../../data/data';
import PieChartBox from '../pieChartBox/PieChartBox';
import BigChartBox from '../bigChartBox/BigChartBox';
import ChartBox from '../chartBox/ChartBox';
import Home5 from '../../../assets/home 5.png'
import Home6 from '../../../assets/home 6.png'
import Home7 from '../../../assets/Group 889.png'
const Dashboard = () => {
  return (
    <>
    <Navbar />
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />

      </div>
      <div className={styles.content}>
        {/* <Setting /> */}
        <div className={styles.home}>
          <div className={`${styles.box} ${styles.box1}`}>
            <TopBox />
          </div>
          <div className={`${styles.box} ${styles.box2}`}>
            <ChartBox {...chartBoxUser} />
          {/* <div className={styles.projectCard}>
            <div className={styles.all}>
            <h2>Projects</h2>
      <p>36</p>
            </div>
      
      <div className={styles.projectTypes}>
        <div>
          <h3>Exterior</h3>
          <p>12</p>
        </div>
        <div>
          <h3>Interior</h3>
          <p>16</p>
        </div>
        <div>
          <h3 style={{textWrap: "nowrap"}}>AR models</h3>
          <p>8</p>
        </div>
      </div>
    </div> */}
          </div>
          <div className={`${styles.box} ${styles.box3}`}><ChartBox {...chartBoxProduct} /></div>
          <div className={`${styles.box} ${styles.box4}`}>
            <PieChartBox />
          </div>
          <div className={`${styles.box} ${styles.box5}`}>
            <div className={styles.card}>
              <div className={styles.all1}>
                <h2>Projects</h2>
                <p className='mt-2'>36</p>
              </div>
              <div className={styles.projects}>
                <div className={styles.projects1}>
                  <img src={Home5} style={{width: "50px", height: "50px"}} alt="" />
                  <h6 className='mt-3'>Exterior</h6>
                  <p>12</p>
                </div>
                <div className={styles.projects1}>
                  <img src={Home5} style={{width: "50px", height: "50px"}} alt="" />
                  <h6 className='mt-3'>Interior</h6>
                  <p>16</p>
                </div>
                <div className={styles.projects1}>
                  <img src={Home7} style={{width: "50px", height: "50px"}} alt="" />
                  <h6 className='mt-3'>AR Models</h6>
                  <p>8</p>
                </div>

              </div>
            </div>
          </div>
          <div className={`${styles.box} ${styles.box6}`}><ChartBox {...chartBoxRevenue} /></div>
          <div className={`${styles.box} ${styles.box7}`}>
            <BigChartBox />
          </div>
          <div className={`${styles.box} ${styles.box8}`}>
          <BarChartBox {...barChartBoxVisit} />
          </div>
          <div className={`${styles.box} ${styles.box9}`}>
          <BarChartBox {...barChartBoxRevenue} />
          </div>

        </div>

      </div>
    </div>
    </>
  )
}

export default Dashboard
