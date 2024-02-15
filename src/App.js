import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import ContactUs from "./components/ContactUs/ContactUs";
import Profile from "./components/Profile/Profile";
import Favouriate from "./components/Favouriate/Favouriate";
import Interior from "./components/InteriorDesign/Interior";
import Exterior from "./components/ExteriorDesign/Exterior";
import Test from "./components/test1/Test";
import Info from "./pages/Info/Info";
import InfoExterior from "./components/InfoExterior/InfoExterior";
import InfoInterior from "./components/InfoInterior/InfoInterior";
function App() {
  // const action = useNavigationType();
  // const location = useLocation();
  // const pathname = location.pathname;
  

  
  // useEffect(() => {
  //   if (action !== "POP") {
  //     window.scrollTo(0, 0);
  //   }
  // }, [action, pathname]);

  // useEffect(() => {
  //   let title = "";
  //   let metaDescription = "";

  //   switch (pathname) {
  //     case "/":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //   }

  //   if (title) {
  //     document.title = title;
  //   }

  //   if (metaDescription) {
  //     const metaDescriptionTag = document.querySelector(
  //       'head > meta[name="description"]'
  //     );
  //     if (metaDescriptionTag) {
  //       metaDescriptionTag.content = metaDescription;
  //     }
  //   }
  // }, [pathname]);
  const details = [
    { image: 'image1.jpg', title: 'Title 1', desc: 'Description 1' },
    { image: 'image2.jpg', title: 'Title 2', desc: 'Description 2' },
    // Add more details as needed
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register  />} />
        <Route path="/contact" element={<ContactUs  />} />
        <Route path="/profile" element={<Profile  />} />
        <Route path="/favouriate" element={<Favouriate url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"} />} />
        <Route path="/interior" element={<Interior />} />
        <Route path="/exterior" element={<Exterior />} />
        <Route path="/test" element={<Test />} />
        <Route path="/info" element={<Info />} />
        <Route path="/infoExterior" element={<InfoExterior />} />
        <Route path="/infoInterior" element={<InfoInterior />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;
