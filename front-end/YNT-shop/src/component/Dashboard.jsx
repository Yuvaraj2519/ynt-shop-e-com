import TopBar from "./TopBar";
import AxiosInstance from "../utils/AxiosInstance";
import NavBar from "./NavBar";
import {Grid } from '@mui/material'
import BottomBar from "./BottomBar";
function DashboardPage() {
  const axiosInstance = AxiosInstance();

  const fetchDashboardData = async () => {
    const res = await axiosInstance.get("/user/all-users");
    console.log(res.data);
  };

  return (
    <>
      <TopBar />
      <NavBar />
      <BottomBar/>
    </>
  );
}

export default DashboardPage;
