import React from "react";
import Sidebar from "../../components/sidebar_employees/Sidebar_employees";
import Navbar from "../../components/navbar_employees/Navbar_employees";
import Path from "../../components/path_employees/Path_employees_addEmployees";
import Menu from "../../components/menu_employees/Menu_employees";
import "./addEmployees.scss";
import AddEmployeesForm from "../../components/AddEmployeesFrom";



const AddEmployees = () => {
 
  
  return (
   
    <div className="addEmployees">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">EMPLOYEE MANAGEMENT</h1>
        <Menu />
         <AddEmployeesForm/>
        
      </div>
    </div>
    
  );
};

export default AddEmployees;
