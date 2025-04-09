import { Box, Paper, Typography } from "@mui/material";

function TopBar() {
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
            sx={{ flexGrow: 1 , textAlign: "left"}}
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
        </Paper>
      </Box>
    </div>
  );
}

export default TopBar;
