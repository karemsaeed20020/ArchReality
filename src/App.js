import {
  Routes,
  Route,
  
  BrowserRouter,
} from "react-router-dom";
import './App.css';
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./pages/Home/Home";
import ContactUs from "./components/ContactUs/ContactUs";
import Profile from "./components/Profile/Profile";
import Favouriate from "./components/Favouriate/Favouriate";
import Interior from "./components/InteriorDesign/Interior";
import Exterior from "./components/ExteriorDesign/Exterior";
import Test from "./components/test1/Test";
import Info from "./pages/Info/Info";
import InfoExterior from "./components/InfoExterior/InfoExterior";
import InfoInterior from "./components/InfoInterior/InfoInterior";
import { useEffect, useState } from "react";
import PuffLoader
from "react-spinners/PuffLoader";
import OtpInput from "./components/OTP/OtpInput";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import QRCode from "./pages/QRCode/QRCode";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // Simulate data fetching or other loading tasks
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    
    
    <BrowserRouter>
    <div className="app-container">
      {isLoading ? (
        <div className="loading-container">
          <PuffLoader
          color={"#283D4F"} isLoading={isLoading} size={80} />
          <span>Loading...</span>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favouriate" element={<Favouriate url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />} />
          <Route path="/interior" element={<Interior />} />
          <Route path="/exterior" element={<Exterior />} />
          <Route path="/test" element={<Test />} />
          <Route path="/info" element={<Info />} />
          <Route path="/infoExterior" element={<InfoExterior />} />
          <Route path="/infoInterior" element={<InfoInterior />} />
          <Route path="/otp" element={<OtpInput />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/qr-code" element={<QRCode />} />
        </Routes>
      )}
    </div>
  </BrowserRouter>
  );
}
export default App;
