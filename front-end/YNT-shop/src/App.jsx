import "./App.css";
import DashboardPage from "./component/Dashboard";
import Login from "./component/Login";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from "./utils/PrivateRoute";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardPage/>} />
        {/* <Route path="/dashboard" element={<PrivateRoute><DashboardPage/></PrivateRoute>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
