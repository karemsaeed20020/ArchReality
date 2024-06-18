import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./account.module.css";
import { FaTrashAlt } from "react-icons/fa";

const initialUsers = [
  {
    id: 1,
    name: "George Fields",
    email: "george.fields@gmail.com",
    role: "User",
    time: "10 Minutes ago",
    image: "path/to/image1.jpg",
  },
  {
    id: 2,
    name: "George Fields",
    email: "george.fields@gmail.com",
    role: "User",
    time: "14 Minutes ago",
    image: "path/to/image2.jpg",
  },
  {
    id: 3,
    name: "Ahmeed Nader",
    email: "nader@gmail.com",
    role: "Engineer",
    time: "20 Minutes ago",
    image: "path/to/image2.jpg",
  },
];

const Accounts = () => {
  const [userType, setUserType] = useState("");
  const [users, setUsers] = useState(initialUsers);
  const [selectedUsers, setSelectedUsers] = useState([]);
//   const [openAddUser, setOpenAddUser] = useState(false);
const addUser = () => {
    const newUser = {
      id: users.length + 1,
      name: `New User ${users.length + 1}`,
      email: `new.user${users.length + 1}@gmail.com`,
      role: users.length % 2 === 0 ? "User" : "Engineer",
      time: "Just now",
      image: `path/to/image${users.length + 1}.jpg`,
    };
    setUsers([...users, newUser]);
  };
  const handleAddUser = () => {
    // Implement the logic to add a new user here
    console.log("Add User button clicked");
    // setOpenAddUser(!openAddUser)
    addUser();
  };

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
    setUsers((prevUsers) =>
      prevUsers.filter((user) => !selectedUsers.includes(user.id))
    );
    setSelectedUsers([]);
  };
const filteredUsers = userType 
    ? users.filter(user => user.role.toLowerCase() === userType.toLowerCase())
    : users;

  console.log('users',users);
  console.log('filteredUsers',filteredUsers);
  console.log('userType',userType);
  return (
    <>
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
                  value="User"
                  checked={userType === "User"}
                  onChange={() => {
                    setUserType("User");
                  }}
                />
                Users
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  value="Engineer"
                  checked={userType === "Engineer"}
                  onChange={() => {
                    setUserType("Engineer");
                  }}
                />
                Engineers
              </label>
              <button
                className={styles.resetButton}
                onClick={() => {
                  setUserType("");
                }}
              >
                reset
              </button>
            </div>
            <button className={styles.addButton} onClick={handleAddUser}>
              Add Account
            </button>
          </div>
          <h1>Accounts</h1>
          <div className={styles.account}>
            <div className={styles.userList}>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        style={{
                          position: "relative",
                          top: "-1px",
                          left: "10px",
                        }}
                        checked={selectedUsers.length === users.length}
                        onChange={handleSelectAll}
                      />
                      <label
                        htmlFor=""
                        style={{
                          position: "relative",
                          left: "20px",
                          color: "#334D6E",
                        }}
                      >
                        {selectedUsers.length} Selected
                      </label>
                    </td>
                    <td colSpan={4} style={{ textAlign: "right" }}>
                      <FaTrashAlt
                        style={{
                          cursor: "pointer",
                          color: selectedUsers.length ? "red" : "gray",
                        }}
                        onClick={handleDelete}
                        title="Delete Selected"
                      />
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id}>
                      <td style={{ display: "flex", gap: "30px" }}>
                        <input
                          type="checkbox"
                          className={styles.styledCheckbox}
                          style={{
                            position: "relative",
                            left: "10px",
                            top: "5px",
                          }}
                          checked={selectedUsers.includes(user.id)}
                          onChange={() => handleCheckboxChange(user.id)}
                        />
                        <div className={styles.userInfo}>
                          {/* <img src={profilePage} alt={user.name} className={styles.userImage} /> */}
                          <span style={{ color: "#283D4F" }}>{user.name}</span>
                        </div>
                      </td>
                      <td style={{ color: "#707683" }}>{user.email}</td>
                      <td style={{ color: "#707683" }}>{user.role}</td>
                      <td style={{ color: "#707683" }}>{user.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Accounts;
