import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import LoginService from "../routers/LoginService";
import AxiosInstance from "../utils/AxiosInstance";

const handleLogin = async (event) => {
    event.preventDefault();
    const axios = AxiosInstance();
    const res = await axios.get('/auth/health')
    const data = res.data;
    console.log("Login button clicked", data);
}

function Login() {

  return (
    <Box 
      sx={{
        height: '100vh',
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
    </Box>
  );
}

export default Login;