import React from "react";
import Sidebar from "../../components/sidebar_employees/Sidebar_employees";
import Navbar from "../../components/navbar_employees/Navbar_employees";
import Path from "../../components/path_employees/Path_employees_salaryReport";
import Menu from "../../components/menu_employees/Menu_employees";
import "./salaryReport.scss";
import SalaryDatatable from "../../components/SalaryDatatable/SalaryDatatable";

const SalaryReport = () => {
  return (
    <div className="salaryReport">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Path />
        <h1 className="title">EMPLOYEE MANAGEMENT</h1>
        <Menu />
        <SalaryDatatable/>
      </div>
    </div>
  );
};

export default SalaryReport;