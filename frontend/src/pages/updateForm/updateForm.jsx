import React from "react";
import Sidebar from "../../components/sidebar_employees/Sidebar_employees";
import Navbar from "../../components/navbar_employees/Navbar_employees";
import Path from "../../components/path_employees/Path_employees_addEmployees";
import Menu from "../../components/menu_employees/Menu_employees";
import UpdateEmployees from "../../components/updateEmployees/updateEmployees";
import "./updateForm.scss"
const UpdateForm = () => {
 
 return (
   
    <div className="updateForm">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">EMPLOYEE MANAGEMENT</h1>
        <Menu />
        <UpdateEmployees/>
        
      </div>
    </div>
    
  );
};

export default  UpdateForm;
