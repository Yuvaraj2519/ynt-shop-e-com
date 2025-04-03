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
    <Grid container spacing={2}>
      <Grid size={4}>
        <NavBar />
      </Grid>
      <Grid size={8}>
        <Box
          sx={{
            height: "85vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
          }}
        ></Box>
      </Grid>
    </Grid>
  );
}

export default DashboardPage;
