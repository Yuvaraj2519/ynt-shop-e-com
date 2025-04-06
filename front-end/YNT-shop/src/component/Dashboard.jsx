import { Box } from "@mui/material";
import AxiosInstance from "../utils/AxiosInstance";
import NavBar from "./NavBar";
import {Grid } from '@mui/material'
function DashboardPage() {
  const axiosInstance = AxiosInstance();

  const fetchDashboardData = async () => {
    const res = await axiosInstance.get("/user/all-users");
    console.log(res.data);
  };

  return (
    <NavBar />
  );
}

export default DashboardPage;
