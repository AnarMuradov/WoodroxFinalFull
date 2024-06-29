import React from "react";
import "./style.scss";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const AdminPanel = () => {
  return (
   <>
   <Helmet>
    <title>
      AdminPanel
    </title>
   </Helmet>
   <section className="adminPanel">
      <div className="adminPanel_container">
        <div className="adminPanel_container_content">
          <Link to={"/AdminPanel"}>
            <div className="adminPanel_container_content_title">
              Admin Panel
            </div>
          </Link>
          <div className="adminPanel_container_content_items">
            <ul className="adminPanel_container_content_items_list">
              <NavLink
                to="/AdminPanel/Users"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <li>Users</li>
              </NavLink>
              <NavLink
                to="/AdminPanel/Furniture"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <li>Furnitures</li>
              </NavLink>
              <NavLink
                to="/AdminPanel/FurnitureCategories"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <li>Furniture categories</li>
              </NavLink>
           
            </ul>
          </div>
          <Outlet />
        </div>
      </div>
    </section>
   </>
  );
};

export default AdminPanel;
