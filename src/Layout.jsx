import React from "react";
import "./App.css";
import ResponsiveAppBar from "./component/navbar/navBar";
import { Outlet } from "react-router-dom";
import Footer from "./component/footer/footer";
import Navbar from "./component/navbar/navBar";
import SideNavBar from "./component/sidenavbar/sideNavBar";

const Layout = () => {
  return (
    <>
      <Navbar />

      <div>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
