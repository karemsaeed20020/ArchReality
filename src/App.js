import {
  Routes,
  Route,
  
  BrowserRouter,
} from "react-router-dom";
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
import ProfileFavouriate from "./components/ProfileFavouriate/ProfileFavouriate";
function App() {
  
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
        <Route path="/profileFavouriate" element={<ProfileFavouriate />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;
