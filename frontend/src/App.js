import AddEmployees from "./pages/addEmployees/AddEmployees";
import ViewEmployees from "./pages/viewEmployees/ViewEmployees";
import Salary  from "./pages/salary/Salary";
import SalaryReport from "./pages/salaryReport/SalaryReport";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateEmployees from "./pages/updateForm/updateForm";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/employees/addEmployees">
            <Route index element={<AddEmployees />} />
          </Route>
          <Route path="/employees/viewEmployees">
            <Route index element={<ViewEmployees />} />
          </Route>
          <Route path="/employees/salary">
            <Route index element={<Salary />} />
          </Route>
          <Route path="/employees/salaryReport">
            <Route index element={<SalaryReport />} />
          </Route>
          <Route path="/employees/updateEmployees/:id">
            <Route index element={<UpdateEmployees />} />
          </Route>
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;