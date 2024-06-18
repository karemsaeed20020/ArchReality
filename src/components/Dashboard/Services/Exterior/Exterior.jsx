import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import styles from "./account.module.css";
import { FaTrashAlt } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { exterior, interior, ar } from "../../../../data/data";
import Card from "react-bootstrap/Card";
import Image20 from "../../../../assets/video 1 1 (13).png";
import Image4 from "../../../../assets/video 1 1 (4).png";
import Image18 from "../../../../assets/video 1 1 (5).png";
import Image19 from "../../../../assets/video 1 1 (12).png";
import Image58 from "../../../../assets/industrial-interior-design-style.jpg";
import Image59 from "../../../../assets/contemporary-interior-design-style.jpg";
import "./AddProjectForm.css";

const ServicesExterior = ({ isExterior, ARmodel }) => {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addServices = () => {
    const getImage = () => {
      if (isExterior) {
        return services.length % 2 === 0 ? Image20 : Image4;
      }
      if (!isExterior && ARmodel) {
        return services.length % 2 === 0 ? Image18 : Image19;
      } else {
        return services.length % 2 === 0 ? Image58 : Image59;
      }
    };
    const selectedImage = getImage();
    const newServices = {
      id: services.length + 1,
      title: `${title}`,
      desc: `${desc}`,
      image: selectedImage,
    };
    setServices([...services, newServices]);
    setOpen(false);
  };
  const handleAddServices = () => {
    // console.log("Add Services button clicked");
    // setOpenAddUser(!openAddUser)
    setOpen(true);
    // addServices();
  };

  const handleCheckboxChange = (id) => {
    setSelectedUsers((prevSelectedUsers) =>
      prevSelectedUsers.includes(id)
        ? prevSelectedUsers.filter((userId) => userId !== id)
        : [...prevSelectedUsers, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === services.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(services.map((user) => user.id));
    }
  };

  const handleDelete = () => {
    setServices((prevUsers) =>
      prevUsers.filter((user) => !selectedUsers.includes(user.id))
    );
    setSelectedUsers([]);
  };

  useEffect(() => {
    setServices(isExterior ? exterior : !isExterior && ARmodel ? ar : interior);
  }, [isExterior, ARmodel]);

  //   console.log("services", services);
  const componentRef = useRef(null);
  const [componentHeight, setComponentHeight] = useState(0);

  //   console.log("componentHeight", componentHeight);
  useEffect(() => {
    setComponentHeight(componentRef.current.clientHeight);
    // console.log("clientHeight", componentRef.current.clientHeight);
  }, [open]);

  //   const fileInputRef = useRef(null);

  const handleTitleChange = (e) => {
    const serviceTitle = e.target.value;
    // console.log(serviceTitle);
    setTitle(serviceTitle);
  };
  const handleDesChange = (e) => {
    const serviceDesc = e.target.value;
    // console.log(serviceDesc);
    setDesc(serviceDesc);
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // console.log("Selected file:", file);
    // Handle the selected file (e.g., upload it, display a preview, etc.)
  };
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(
  //           "https://arch-reality.onrender.com/api/dashboard/listProj?propType=interior",
  //           {
  //             method: "GET",
  //             headers: {
  //               Authorization:
  //                 "graduation eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhcmFhbGlAZ21haWwuY29tIiwiaWF0IjoxNzE3MDE5MzEzLCJleHAiOjE3MjU2NTkzMTN9.gvJnmNdibcVnIpXFGt26lJ7I1TEFpdJljugNjLzQ1ZU",
  //             },
  //           }
  //         );

  //         if (!response.ok) {
  //           throw new Error("Network response was not ok " + response.statusText);
  //         }

  //         const data = await response.json();
  //         console.log("data", data);
  //       } catch (error) {
  //         console.error(
  //           "There has been a problem with your fetch operation:",
  //           error
  //         );
  //       }
  //     };

  //     fetchData();
  //   }, []);
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.menu}>
          <Sidebar />
        </div>
        <div ref={componentRef} className={styles.content}>
          <div className={styles.type}>
            <div className={styles.radioGroup}>
              <h1>
                {isExterior
                  ? "Exterior"
                  : !isExterior && ARmodel
                  ? "ARmodel"
                  : "Interior"}{" "}
                Designs
              </h1>
            </div>
            <button className={styles.addButton} onClick={handleAddServices}>
              Add New Project
            </button>
          </div>
          {/* <h1>Exterior Designs</h1> */}
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
                        checked={selectedUsers.length === services.length}
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
                <tbody style={{ display: "flex", flexFlow: "wrap" }}>
                  {services.map((service) => (
                    <tr key={service.id} style={{ width: "33%" }}>
                      <input
                        type="checkbox"
                        className={styles.styledCheckbox}
                        style={{
                          position: "relative",
                          left: "10px",
                          top: "5px",
                        }}
                        checked={selectedUsers.includes(service.id)}
                        onChange={() => handleCheckboxChange(service.id)}
                      />
                      <Card style={{ width: "95%" }}>
                        <Card.Img variant="top" src={service.image} />
                        <Card.Body
                          style={{ height: "12rem", overflow: "hidden" }}
                        >
                          <Card.Title>{service.title}</Card.Title>
                          <Card.Text>{service.desc}</Card.Text>
                        </Card.Body>
                      </Card>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div
          style={{
            width: "100%",
            backgroundColor: "#80808080",
            height: `${componentHeight}px`,
            position: "absolute",
            left: "0px",
            right: "0px",
            marginLeft: "auto",
            marginRight: "auto",
            top: "0",
          }}
          onClick={() => setOpen(false)}
        >
          <div
            className={styles.content}
            style={{
              position: "relative",
              left: "0",
              right: "0",
              marginLeft: "auto",
              marginRight: "auto",
              top: "15rem",
              width: "45%",
              backgroundColor: "unset",
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="form-container">
              <h1 className="form-title">Add New Project</h1>
              <div className="form-group">
                <label className="form-label">Project Photos</label>
                <div className="photo-upload">
                  <input
                    style={{ top: "0" }}
                    type="file"
                    onChange={handleFileChange}
                    size="lg"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Project Title</label>
                <input
                  type="text"
                  className="form-input"
                  style={{ top: "0" }}
                  onChange={handleTitleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Project Description</label>
                <textarea
                  className="form-textarea"
                  style={{ top: "0" }}
                  onChange={handleDesChange}
                ></textarea>
              </div>
              <button
                className="form-button"
                style={{ top: "0", left: "0" }}
                onClick={() => addServices()}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServicesExterior;
