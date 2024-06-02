// import styles from "./sidebar.module.css";
// import {
//   MdDashboard,
//   MdSupervisedUserCircle,
//   MdShoppingBag,
//   MdAttachMoney,
//   MdWork,
//   MdAnalytics,
//   MdPeople,
//   MdOutlineSettings,
//   MdHelpCenter,
//   MdLogout,
// } from "react-icons/md";

// const menuItems = [
//   {
//     title: "Pages",
//     list: [
//       {
//         title: "Dashboard",
//         path: "/dashboard",
//         icon: <MdDashboard />,
//       },
//       {
//         title: "Users",
//         path: "/dashboard/users",
//         icon: <MdSupervisedUserCircle />,
//       },
//       {
//         title: "Products",
//         path: "/dashboard/products",
//         icon: <MdShoppingBag />,
//       },
//       {
//         title: "Transactions",
//         path: "/dashboard/transactions",
//         icon: <MdAttachMoney />,
//       },
//     ],
//   },
//   {
//     title: "Analytics",
//     list: [
//       {
//         title: "Revenue",
//         path: "/dashboard/revenue",
//         icon: <MdWork />,
//       },
//       {
//         title: "Reports",
//         path: "/dashboard/reports",
//         icon: <MdAnalytics />,
//       },
//       {
//         title: "Teams",
//         path: "/dashboard/teams",
//         icon: <MdPeople />,
//       },
//     ],
//   },
//   {
//     title: "User",
//     list: [
//       {
//         title: "Settings",
//         path: "/dashboard/settings",
//         icon: <MdOutlineSettings />,
//       },
//       {
//         title: "Help",
//         path: "/dashboard/help",
//         icon: <MdHelpCenter />,
//       },
//     ],
//   },
// ];

// const Sidebar = async () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.user}>
//         <img
//           className={styles.userImage}
//           alt=""
//           width="50"
//           height="50"
//         />
//         <div className={styles.userDetail}>
//           <span className={styles.username}>Ali</span>
//           <span className={styles.userTitle}>Administrator</span>
//         </div>
//       </div>
//       <ul className={styles.list}>
//         {menuItems.map((cat) => (
//           <li key={cat.title}>
//             <span className={styles.cat}>{cat.title}</span>
            
//           </li>
//         ))}
//       </ul>
//       <form
        
//       >
//         <button className={styles.logout}>
//           <MdLogout />
//           Logout
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from 'react';
import styles from './sidebar.module.css';
import {
    FaTh,
    FaUserAlt,
    FaCog,
    FaTools,
    FaHome,
    FaChevronDown,
    FaChair,
    FaTree
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const toggleServices = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    const menuItem = [
       
        {
            path: "/dashboard",
            name: "Dashboard",
            icon:<FaHome />
        },
        {
            path: "/account",
            name: "Account",
            icon: <FaUserAlt />
        },
        {
            name: "Services",
            icon: <FaTools />,
            subItems: [
                {
                    path: "/services/interior",
                    name: "Interior",
                    icon: <FaChair />
                },
                {
                    path: "/services/exterior",
                    name: "Exterior",
                    icon: <FaTree />
                }
            ]
        },
        {
            path: "/setting",
            name: "Setting",
            icon: <FaCog />
        }
    ];

    return (
        <div className={styles.container10}>
            <div className={styles.sidebar}>
                {menuItem.map((item, index) => (
                    <div key={index}>
                        {item.subItems ? (
                            <div>
                                <div className={styles.link} onClick={toggleServices}>
                                    <div className="icon">{item.icon}</div>
                                    <div className={styles.linkText}>{item.name}</div>
                                    <div className="icon"><FaChevronDown /></div>
                                </div>
                                {isServicesOpen && item.subItems.map((subItem, subIndex) => (
                                    <NavLink
                                        to={subItem.path}
                                        key={subIndex}
                                        className={styles.link}
                                        activeClassName={styles.activeLink}
                                    >
                                        <div className="icon">{subItem.icon}</div>
                                        <div className={styles.subLinkText}>{subItem.name}</div>
                                    </NavLink>
                                ))}
                            </div>
                        ) : (
                            <NavLink
                                to={item.path}
                                className={styles.link}
                                activeClassName={styles.activeLink}
                            >
                                <div className="icon">{item.icon}</div>
                                <div className={styles.linkText}>{item.name}</div>
                            </NavLink>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;

