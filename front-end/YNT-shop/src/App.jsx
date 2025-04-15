import "./App.css";
import DashboardPage from "./component/Dashboard";
import Login from "./component/Login";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from "./utils/PrivateRoute";
import VerticalTabs from "./component/NavBar";
import Register from "./component/Pages/Register";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/cart" element={<DashboardPage/>} />
        <Route path="/orders" element={<DashboardPage/>} />
        <Route path="/profile" element={<DashboardPage/>} />
        <Route path="/help-center" element={<DashboardPage/>} />
        <Route path="/logout" element={<DashboardPage/>} />
        {/* <Route path="/dashboard" element={<PrivateRoute><DashboardPage/></PrivateRoute>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
