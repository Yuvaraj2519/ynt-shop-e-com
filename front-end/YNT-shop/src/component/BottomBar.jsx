import { Margin } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";

function BottomBar() {
  return (
    <div className="bottom-bar">
        <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          position: "fixed",
          bottom: 0,
        }}
        className="bg-white"
        style={{
          width: "100vw",
          height: "9vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginLeft: "-0.5vw",
        }}
      >
        <Paper
          elevation={1}
          className="bg-white"
          style={{
            width: "100vw",
            height: "9vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "#3f50b5",
          }}
        >
          <Typography
            component="div"
            sx={{ flexGrow: 1 , textAlign: "left"}}
            className="text-center"
            style={{
              color: "#fff",
              fontFamily: "Poppins",
              fontWeight: "600",
              marginLeft: "4vw",
            }}
          >
            © 2025 YNT shopping org . All rights reserved.
          </Typography>
          <Typography
            component="div"
            sx={{ flexGrow: 1 , textAlign: "right"}}
            className="text-center"
            style={{
              color: "#fff",
              fontFamily: "Poppins",
              fontWeight: "600",
              marginRight: "4vw",
            }}
          >
            Privacy Policy | Terms of Service
          </Typography>
        </Paper>
      </Box>
    </div>
  );
}

export default BottomBar;