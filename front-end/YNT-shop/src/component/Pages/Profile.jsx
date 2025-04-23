import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { useState } from "react";

function ProfilePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    firstname: "John",
    lastname: "Doe",
    email: "j@test.com",
  });

  return (
    <Box sx={{ width: "800", padding: 2, borderRadius: 2, boxShadow: 3 }}>
      <Typography
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          color: "#555d5b",
        }}
      >
        Your Profile
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <TextField
          label="First Name"
          value={user.firstname}
          onChange={(e) => setUser({ ...user, firstname: e.target.value })}
          variant="outlined"
          margin="normal"
          fullWidth
          disabled={!isEditing}
        />
        <TextField
          label="Last Name"
          value={user.lastname}
          onChange={(e) => setUser({ ...user, lastname: e.target.value })}
          variant="outlined"
          margin="normal"
          fullWidth
          disabled={!isEditing}
        />
      </Box>
        <TextField
          label="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          variant="outlined"
          margin="normal"
          fullWidth
          disabled
        />
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <TextField
            label="Phone Number"
            variant="outlined"
            margin="normal"
            fullWidth
            disabled={!isEditing}
          />
          <TextField
            label="Date of Birth"
            variant="outlined"
            margin="normal"
            fullWidth
            disabled={!isEditing}
          />
        </Box>
      <Paper
        variant="outlined"
        sx={{ padding: 2, marginTop: 2, borderRadius: 2 }}
      >
        <Typography
          variant="subtitle1"
          gutterBottom
          style={{ alignItems: "right" }}
        >
          Address
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <TextField
            label="Street Address"
            variant="outlined"
            margin="normal"
            fullWidth
            disabled={!isEditing}
          />
          <TextField
            label="City"
            variant="outlined"
            margin="normal"
            fullWidth
            disabled={!isEditing}
          />
          <TextField
            label="State"
            variant="outlined"
            margin="normal"
            fullWidth
            disabled={!isEditing}
          />
          <TextField
            label="Zip Code"
            variant="outlined"
            margin="normal"
            fullWidth
            disabled={!isEditing}
          />
          <TextField
            label="Country"
            variant="outlined"
            margin="normal"
            fullWidth
            disabled={!isEditing}
          />
        </Box>
      </Paper>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsEditing(!isEditing)}
        sx={{ mt: 2 }}
      >
        {isEditing ? "Save" : "Edit"}
      </Button>
    </Box>
  );
}

export default function Profile() {
  return (
    <SnackbarProvider maxSnack={3}>
      <ProfilePage />
    </SnackbarProvider>
  );
}
