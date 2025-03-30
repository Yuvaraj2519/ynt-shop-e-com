import { Box, Button, Container, Paper, Snackbar, TextField, Typography } from "@mui/material";
import LoginService from "../routers/LoginService";
import AxiosInstance from "../utils/AxiosInstance";
import { useState } from "react";



function Login() {

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleLogin = async (event) => {
    setShowAlert(true);
    event.preventDefault();
    const axios = AxiosInstance();
    try {
      await axios.post("/auth/login", {
        params: {
          username: "testuser",
          password: "testpassword",
        },
        validateStatus: (status) => {
          return status < 500; // default
        },
      }).then((res) => {
      if (res.status !== 200) {
        setAlertMessage(res.data.message);
        setShowAlert(true);
        console.error("Login failed:", res.data.message);
      }
    });
    } catch (error) {
      // console.error("Login failed:", error);
    }
    console.log("Login button clicked");
  };

  return (
    <Box 
      sx={{
        height: '85vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography variant="h4" align="center" sx={{ mb: 3 }}>
            Login
          </Typography>

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            required
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
            Log In
          </Button>
        </Paper>
      </Container>
      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={() => setShowAlert(false)}
        message={alertMessage} 
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        action={
          <Button color="inherit" onClick={() => setShowAlert(false)}>
            Close
          </Button>
        }
      />
    </Box>
  );
}

export default Login;