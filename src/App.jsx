import "./App.css";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

function App() {

  return (
    <>
     {/* <Login></Login> */}
     {/* <EmployeeDashboard/> */}
     <AdminDashboard></AdminDashboard>
    </>
  );
}

export default App;
