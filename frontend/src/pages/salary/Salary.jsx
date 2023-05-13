import React from "react";
import Sidebar from "../../components/sidebar_employees/Sidebar_employees";
import Navbar from "../../components/navbar_employees/Navbar_employees";
import Path from "../../components/path_employees/Path_employees_salary";
import Menu from "../../components/menu_employees/Menu_employees";
import "./salary.scss";
import SalaryForm from "../../components/SalaryForm";



const Salary = () => {
 
  
  return (
   
    <div className="salary">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">EMPLOYEE MANAGEMENT</h1>
        <Menu />
         <SalaryForm/>
        
      </div>
    </div>
    
  );
};

export default Salary;