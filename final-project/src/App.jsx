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
import AllFurniture from "./Components/AdminPanelComponents/AllFurniture";
import AllFurnitureCategory from "./Components/AdminPanelComponents/AllFurnitureCategory";
import FurnitureCategoryUpdate from "./Pages/FurnitureCategoryUpdate";
import CreateFurnitureCategory from "./Pages/CreateFurnitureCategory";
import CategoryPage from "./Pages/CategoryPage";
import Blog from "./Pages/BlogPage";
import WishList from "./Pages/WishListPage";




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
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/project-details" element={<ProjectDetails/>}/>
        <Route path="/furniturebycategory/:id" element={<CategoryPage />} />
        <Route path="/wishlist" element={<WishList />}/>

        
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
            <Route path="/AdminPanel/Furniture" element={<AllFurniture />} />
            <Route
              path="/AdminPanel/FurnitureCategories"
              element={<AllFurnitureCategory />}
            />
              <Route
              path="/AdminPanel/FurnitureCategories/Update/:id"
              element={<FurnitureCategoryUpdate />}
            />
            <Route
              path="/AdminPanel/FurnitureCategories/CreateCategory"
              element={<CreateFurnitureCategory />}
            />
            </Route>



      </Routes>
  );
}

export default App;
