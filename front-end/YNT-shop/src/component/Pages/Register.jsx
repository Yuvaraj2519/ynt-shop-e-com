import {
  Box,
  Button,
  Container,
  CssBaseline,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { SnackbarProvider, useSnackbar } from "notistack";
import { useState } from "react";
import { useNavigate } from "react-router";

import appGif from "../../assets/YNTSHOP.gif";
import RegisterService from "../../actions/RegisterService";

function RegisterApp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleRegister = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError(true);
      enqueueSnackbar("Passwords do not match", { variant: "error" });
      return;
    }
    setError(false);
    const response = await RegisterService(
      firstName,
      lastName,
      email,
      password
    );
    if (response.status === 200) {
      enqueueSnackbar("Registration successful", { variant: "success" });
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 1000);
    } else {
      enqueueSnackbar(response.data.message, { variant: "error" });
    }
  };

  return (
    <Box
      sx={{
        height: "85vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <Paper
        elevation={0}
        height="100%"
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <img src={appGif} />
      </Paper>
      <Container
        component="main"
        maxWidth="md"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <CssBaseline />
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            marginTop: "10vh",
          }}
        >
          <Typography variant="h4" align="center" sx={{ mb: 3 }}>
            Register
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              required
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              required
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </Box>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            fullWidth
            type="password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            disabled={
              !firstName || !lastName || !email || !password || !confirmPassword
            }
            onClick={handleRegister}
          >
            Register
          </Button>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Already have an account?{" "}
            <Button
              variant="text"
              color="primary"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default function Register() {
  return (
    <SnackbarProvider maxSnack={3}>
      <RegisterApp />
    </SnackbarProvider>
  );
}
