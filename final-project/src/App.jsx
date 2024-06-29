import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Project from "./Pages/Project";
import ProjectDetails from "./Pages/ProjectDetails";
import LoginPage from "./Pages/LoginPage";
import LoginHelp from "./Pages/LoginHelpPage";
import Register from "./Pages/RegisterPage";
import UserUpdate from "./Pages/UserUpdatePage";
import CreateUser from "./Pages/CreateUserPage";
import AllUsers from "./Components/AdminPanelComponents/AllUsers";



import './App.scss'
import { library } from "@fortawesome/fontawesome-svg-core";

import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons";

import { faCouch } from "@fortawesome/free-solid-svg-icons";
import { faToiletPortable } from "@fortawesome/free-solid-svg-icons";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";

import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import AdminPanel from "./Pages/AdminPanel";




library.add(
  faFacebookF,
  faTwitter,
  faDribbble,
  faBehance,
  faBed,
  faComputer,
  faCouch,
  faToiletPortable,
  faKitchenSet,
  faAnchor,
  faUser,
  faNewspaper,
  faPhone,
  faRocket,
  faGem,
  faComment,
  faArrowRight,
  faBars,
  faStar,
  faHouse,
  faEnvelope
);

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/project-details" element={<ProjectDetails/>}/>
        
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/help" element={<LoginHelp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/AdminPanel" element={<AdminPanel />}>
            <Route path="/AdminPanel/Users" element={<AllUsers />} />
            <Route
              path="/AdminPanel/Users/Update/:id"
              element={<UserUpdate />}
            />
            <Route
              path="/AdminPanel/Users/CreateUser"
              element={<CreateUser />}
            />
            </Route>


      </Routes>
  );
}

export default App;
