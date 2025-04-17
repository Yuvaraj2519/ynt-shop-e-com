import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LoginService from "../actions/LoginService";
import { useState } from "react";
import { SnackbarProvider, useSnackbar } from "notistack";
import { useNavigate } from "react-router";
import appGif from "../assets/YNTSHOP.gif";

function LoginApp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await LoginService(email, password);
    console.log(response);
    if (response.status === 200) {
      enqueueSnackbar(
        "Login successful",
        { variant: "success" },
        { autoHideDuation: 3000 }
      );
      setTimeout(() => {
        navigate("/dashboard", { replace: true });
      }, 1000);
    } else enqueueSnackbar(response.data.errors.errorMessage, { variant: "error" });
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
      <Container maxWidth="xs">
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
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
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
          >
            Log In
          </Button>
        </Paper>
        <Paper
          elevation={0}
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            marginTop: 5,
          }} >
          <Typography variant="body2" align="center">
            Don't have an account?{" "}
            <Button
              variant="text"
              color="primary"
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </Typography>
          </Paper>
      </Container>
    </Box>
  );
}

export default function Login() {
  return (
    <SnackbarProvider maxSnack={3}>
      <LoginApp />
    </SnackbarProvider>
  );
}
