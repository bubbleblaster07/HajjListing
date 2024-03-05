import React from "react";

import Navbar from "./component/navbar/navBar";
import { Outlet } from "react-router-dom";
import Footer from "./component/footer/footer";

const layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default layout;
