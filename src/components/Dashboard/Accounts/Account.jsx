import React, { useState } from 'react';
import styles from './account.module.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';

const Account = () => {
  const initialUsers = [
    { id: 1, name: 'George Fields', email: 'george.fields@gmail.com', role: 'User', time: '10 Minutes ago', image: 'path/to/image1.jpg' },
    { id: 2, name: 'George Fields', email: 'george.fields@gmail.com', role: 'User', time: '14 Minutes ago', image: 'path/to/image2.jpg' },
    // ... (other users)
  ];

  const profilePage = useSelector(state => state.user.profilePage);
  const [users, setUsers] = useState(initialUsers);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [userType, setUserType] = useState('Engineer');

  const handleCheckboxChange = (id) => {
    setSelectedUsers((prevSelectedUsers) =>
      prevSelectedUsers.includes(id)
        ? prevSelectedUsers.filter((userId) => userId !== id)
        : [...prevSelectedUsers, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === users.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(users.map((user) => user.id));
    }
  };

  const handleDelete = () => {
    setUsers((prevUsers) => prevUsers.filter((user) => !selectedUsers.includes(user.id)));
    setSelectedUsers([]);
  };

  const handleAddUser = () => {
    // Implement the logic to add a new user here
    console.log('Add User button clicked');
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.menu}>
          <Sidebar />
        </div>
        
        <div className={styles.content}>
          <div className={styles.type}>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  value="Users"
                  checked={userType === 'Users'}
                  onChange={() => setUserType('Users')}
                />
                Users
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  value="Engineers"
                  checked={userType === 'Engineers'}
                  onChange={() => setUserType('Engineers')}
                />
                Engineers
              </label>
            </div>
            <button className={styles.addButton} onClick={handleAddUser}>
              Add Account
            </button>
          </div>
          <div className={styles.account}>
            <div className={styles.userList}>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        style={{ position: "relative", top: "-1px", left: "10px" }}
                        checked={selectedUsers.length === users.length}
                        onChange={handleSelectAll}
                      />
                      <label
                        htmlFor=""
                        style={{ position: "relative", left: "20px", color: "#334D6E" }}
                      >
                        {selectedUsers.length} Selected
                      </label>
                    </td>
                    <td colSpan={4} style={{ textAlign: 'right' }}>
                      <FaTrashAlt
                        style={{ cursor: 'pointer', color: selectedUsers.length ? 'red' : 'gray' }}
                        onClick={handleDelete}
                        title="Delete Selected"
                      />
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td style={{display: "flex", gap: "30px"}}>
                        <input
                          type="checkbox"
                          className={styles.styledCheckbox}
                          style={{ position: "relative", left: "10px", top: "5px" }}
                          checked={selectedUsers.includes(user.id)}
                          onChange={() => handleCheckboxChange(user.id)}
                        />
                        <div className={styles.userInfo}>
                          <img src={profilePage} alt={user.name} className={styles.userImage} />
                          <span style={{color: "#283D4F"}}>{user.name}</span>
                        </div>
                      </td>
                      {/* <td style={{color: "#707683"}}>
                        <div className={styles.userInfo}>
                          <img src={profilePage} alt={user.name} className={styles.userImage} />
                          <span>{user.name}</span>
                        </div>
                      </td> */}
                      <td style={{color: "#707683"}}>{user.email}</td>
                      <td style={{color: "#707683"}}>{user.role}</td>
                      <td style={{color: "#707683"}}>{user.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;

// import React, { useState } from 'react';
// import styles from './account.module.css';
// import Navbar from '../Navbar/Navbar';
// import Sidebar from '../Sidebar/Sidebar';
// import { useSelector } from 'react-redux';
// import { FaTrashAlt } from 'react-icons/fa';

// const Account = () => {
//   const initialUsers = [
//     { id: 1, name: 'George Fields', email: 'george.fields@gmail.com', role: 'User', time: '10 Minutes ago', image: 'path/to/image1.jpg' },
//     { id: 2, name: 'George Fields', email: 'george.fields@gmail.com', role: 'User', time: '14 Minutes ago', image: 'path/to/image2.jpg' },
//     // ... (other users)
//   ];

//   const profilePage = useSelector(state => state.user.profilePage);
//   const [users, setUsers] = useState(initialUsers);
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [userType, setUserType] = useState('Engineer');
//   const [showAddForm, setShowAddForm] = useState(false); // State to control the visibility of the add form
//   const [newUser, setNewUser] = useState({ name: '', email: '', password: '' }); // State to store the new user data

//   const handleCheckboxChange = (id) => {
//     setSelectedUsers((prevSelectedUsers) =>
//       prevSelectedUsers.includes(id)
//         ? prevSelectedUsers.filter((userId) => userId !== id)
//         : [...prevSelectedUsers, id]
//     );
//   };

//   const handleSelectAll = () => {
//     if (selectedUsers.length === users.length) {
//       setSelectedUsers([]);
//     } else {
//       setSelectedUsers(users.map((user) => user.id));
//     }
//   };

//   const handleDelete = () => {
//     setUsers((prevUsers) => prevUsers.filter((user) => !selectedUsers.includes(user.id)));
//     setSelectedUsers([]);
//   };

//   const handleAddUser = () => {
//     setShowAddForm(true); // Display the add form
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const id = users.length + 1; // Generate a unique ID for the new user
//     const newUserWithId = { ...newUser, id, time: 'Just now', role: userType }; // Add time, role, and id to the new user
//     setUsers((prevUsers) => [...prevUsers, newUserWithId]); // Add the new user to the users array
//     setShowAddForm(false); // Hide the add form
//     setNewUser({ name: '', email: '', password: '' }); // Reset the new user state
//   };

//   const handleRadioChange = (value) => {
//     setUserType(value);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className={styles.container} style={{ backgroundColor: showAddForm ? 'transparent' : '#fff' }}>
//         <Sidebar />
//         <div className={styles.content}>
//           <div className={styles.type}>
//             <div className={styles.radioGroup}>
//               <label className={styles.radioLabel}>
//                 <input
//                   type="radio"
//                   value="Users"
//                   checked={userType === 'Users'}
//                   onChange={() => handleRadioChange('Users')}
//                 />
//                 Users
//               </label>
//               <label className={styles.radioLabel}>
//                 <input
//                   type="radio"
//                   value="Engineers"
//                   checked={userType === 'Engineers'}
//                   onChange={() => handleRadioChange('Engineers')}
//                 />
//                 Engineers
//               </label>
//             </div>
//             <button className={styles.addButton} onClick={handleAddUser}>
//               Add Account
//             </button>
//           </div>
//           {showAddForm && (
//             <div className={styles.account}>
//               <form className={styles.addForm} onSubmit={handleSubmit}>
//                 <input type="text" name="name" placeholder="Name" value={newUser.name} onChange={handleInputChange} />
//                 <input type="email" name="email" placeholder="Email" value={newUser.email} onChange={handleInputChange} />
//                 <input type="password" name="password" placeholder="Password" value={newUser.password} onChange={handleInputChange} />
//                 <button type="submit">Add</button>
//               </form>
//             </div>
//           )}
//           {!showAddForm && (
//             <div className={styles.account}>
//               <div className={styles.userList}>
//                 <table className="table table-striped">
//                   <thead>
//                     <tr>
//                       <td>
//                         <input
//                           type="checkbox"
//                           style={{ position: "relative", top: "-1px", left: "10px" }}
//                           checked={selectedUsers.length === users.length}
//                           onChange={handleSelectAll}
//                         />
//                         <label
//                           htmlFor=""
//                           style={{ position: "relative", left: "20px", color: "#334D6E" }}
//                         >
//                           {selectedUsers.length} Selected
//                         </label>
//                       </td>
//                       <td colSpan={4} style={{ textAlign: 'right' }}>
//                         <FaTrashAlt
//                           style={{ cursor: 'pointer', color: selectedUsers.length ? 'red' : 'gray' }}
//                           onClick={handleDelete}
//                           title="Delete Selected"
//                         />
//                       </td>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {users.map((user) => (
//                       <tr key={user.id}>
//                         <td style={{display: "flex", gap: "30px"}}>
//                           <input
//                             type="checkbox"
//                             className={styles.styledCheckbox}
//                             style={{ position: "relative", left: "10px", top: "5px" }}
//                             checked={selectedUsers.includes(user.id)}
//                             onChange={() => handleCheckboxChange(user.id)}
//                           />
//                           <div className={styles.userInfo}>
//                             <img src={profilePage} alt={user.name} className={styles.userImage} />
//                             <span style={{color: "#283D4F"}}>{user.name}</span>
//                           </div>
//                         </td>
//                         <td style={{color: "#707683"}}>{user.email}</td>
//                         <td style={{color: "#707683"}}>{user.role}</td>
//                         <td style={{color: "#707683"}}>{user.time}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Account;


// import React from 'react';
// import styles from './account.module.css';
// import Sidebar from '../Sidebar/Sidebar';
// import Navbar from '../Navbar/Navbar';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// const Account = () => {
//    const profilePage = useSelector(state => state.user.profilePage);

//   return (
//     <>
//     <Navbar />
//     <div className={styles.container}>
//       <div className={styles.menu}>
//         <Sidebar />
//       </div>
//       <div className={styles.content}>
//         <div className={styles.home}>

//         <div className={styles.top}>
        

//         </div>
//         <table className={styles.table}>
//           <thead>
//             <tr>
//               <td>Name</td>
//               <td>Email</td>
//               <td>Role</td>
//               <td>Status</td>
//               <td>Action</td>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>
//                 <div className={styles.user}>
//                   <img src={profilePage} style={{width: "40px", height: "40px", borderRadius :"50%"}} className={styles.userImage} alt="" />
//                     Jonh Dee
//                 </div>
//               </td>
//               <td>a@gmail.com</td>
//               <td>df555</td>
//               <td>Admin</td>
//               <td>Actibe</td>
//               <td>
//                 <div className={styles.buttonss}>
//                   <Link >
//                     <button className={`${styles.buttonn} ${styles.view}`}>
//                       View
//                     </button>
//                   </Link>
//                   <form >
//                     <input type="hidden" name="id" />
//                     <button className={`${styles.button} ${styles.delete}`}>
//                       Delete
//                     </button>
//                   </form>
//                 </div>
//               </td>
//             </tr>
//           </tbody>


//         </table>
//         </div>
//       </div>
      
//     </div>
//     </>
//   )
// }

// export default Account
