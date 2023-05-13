import React from "react";
import Sidebar from "../../components/siebar_employees/Sidebar_employees";
import Navbar from "../../components/navbar_employees/Navbar_employees";
import Path from "../../components/path_employees/Path_employees_addEmployees";
import Menu from "../../components/menu_employees/Menu_employees";
import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Path />
        <h1 className="title">EMPLOYEE MANAGEMENT</h1>
        <Menu />
        home container
      </div>
    </div>
  );
};

export default Home;


