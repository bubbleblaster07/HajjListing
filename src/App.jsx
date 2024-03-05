import React from "react";
import "./App.css";
import ResponsiveAppBar from "./component/navbar/navBar";
import { Outlet } from "react-router-dom";
import Footer from "./component/footer/footer";
import Navbar from "./component/navbar/navBar";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Form /> */}

      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
