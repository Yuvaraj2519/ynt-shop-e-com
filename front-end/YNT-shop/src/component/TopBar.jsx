import { Avatar, Box, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import ProfileService from "../actions/ProfileService";
import { setProfile } from "../store/profile/ProfileSlice";

function TopBar() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const profileData = useSelector((state) => state.profile.user);
  const [profile, setProfileData] = useState(profileData);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await ProfileService();
        if (response.status === 200) {
          dispatch(setProfile(response));
          setProfileData(response);
        } else {
          console.error("Failed to fetch profile:", response);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [profile, dispatch]);

  return (
    <div className="top-bar">
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          position: "fixed",
          top: 0,
        }}
        className="bg-white"
        style={{
          width: "100vw",
          height: "12vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginLeft: "-0.5vw",
        }}
      >
        <Paper
          elevation={3}
          className="bg-white"
          style={{
            width: "100vw",
            height: "12vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "#3f50b5",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, textAlign: "left" }}
            className="text-center"
            style={{
              color: "#fff",
              fontFamily: "Poppins",
              fontWeight: "600",
              marginLeft: "4vw",
            }}
          >
            YNT Shoping App
          </Typography>
          <Avatar
            style={{
              marginLeft: "auto",
              marginRight: "3vw",
            }}
            onClick={() => {navigate("/profile")}}
            sx={{
              '&:hover': {
                cursor: 'pointer',
                backgroundColor: '#ff5722',
              },
            }}
          >
            {profile ? profile.firstName.charAt(0).toUpperCase() : "U"}
            {profile ? profile.lastName.charAt(0).toUpperCase() : "U"}
          </Avatar>
        </Paper>
      </Box>
    </div>
  );
}

export default TopBar;
