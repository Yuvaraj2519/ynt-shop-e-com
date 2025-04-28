import {
  Box,
  Button,
  ButtonGroup,
  Chip,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { SnackbarProvider } from "notistack";
import { useState } from "react";

function ProfilePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const addresses = [
    {
      id: "addr1",
      isDefault: true,
      details: {
        Name: "John Doe",
        Street: "123 Main Street",
        City: "Springfield",
        State: "IL",
        ZIP: "62704",
        Country: "USA",
      },
    },
    {
      id: "addr2",
      isDefault: false,
      details: {
        Name: "Jane Smith",
        Street: "456 Oak Avenue",
        City: "Shelbyville",
        State: "IL",
        ZIP: "62565",
        Country: "USA",
      },
    },
    {
      id: "addr3",
      isDefault: false,
      details: {
        Name: "Jane Smith",
        Street: "456 Oak Avenue",
        City: "Shelbyville",
        State: "IL",
        ZIP: "62565",
        Country: "USA",
      },
    },
  ];

  const [selectedId, setSelectedId] = useState(
    addresses.find((a) => a.isDefault)?.id || ""
  );

  const [user, setUser] = useState({
    firstname: "John",
    lastname: "Doe",
    email: "j@test.com",
  });

  return (
    <Container
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "75vh",
      }}
    >
      <Box
        sx={{
          width: "800",
          padding: 2,
          borderRadius: 2,
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <Typography
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            color: "#555d5b",
          }}
        >
          Your Profile Details
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
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsEditing(!isEditing)}
            sx={{ mt: 2 }}
          >
            {isEditing ? "Save" : "Edit"}
          </Button>
          {isEditing && (
            <Button
              variant="outlined"
              color="primary"
              hidden={!isEditing}
              sx={{ mt: 2, ml: 2 }}
            >
              Cancel
            </Button>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          border: "1px solid",
          borderColor: "grey.400",
          borderRadius: 2,
          padding: 2,
          maxWidth: 600,
          overflowY: "auto",
          height: "65vh",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Your address details
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            name="address-selection"
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
          >
            <Grid container spacing={2}>
              {addresses.map((address) => (
                <Grid item xs={12} sm={6} key={address.id}>
                  <Box
                    key={address.id}
                    sx={{
                      border: "1px solid",
                      borderColor:
                        selectedId === address.id ? "primary.main" : "grey.400",
                      borderRadius: 2,
                      padding: 2,
                      maxWidth: 450,
                      height: 230,
                      justifyContent: "space-evenly",
                      display: "flex",
                      backgroundColor: "transparent",
                    }}
                  >
                    <FormControlLabel
                      value={address.id}
                      control={<Radio />}
                      label={
                        <Box>
                          {address.isDefault && (
                            <Chip
                              label="Default"
                              color="success"
                              size="small"
                            />
                          )}
                          
                          <Stack spacing={0.7}>
                            {Object.entries(address.details).map(
                              ([key, value]) => (
                                <Box key={key} sx={{ display: "flex" }}>
                                  <Typography
                                    sx={{ width: 80, fontWeight: "bold" }}
                                  >
                                    {key}:
                                  </Typography>
                                  <Typography>{value}</Typography>
                                </Box>
                              )
                            )}
                          </Stack>
                          <Stack spacing={0.7}
                            direction={"row"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            sx={{ width: "100%" }}
                            margin={1}
                            >
                            <DeleteRoundedIcon/>
                            <EditRoundedIcon/>
                          </Stack>
                        </Box>
                      }
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </RadioGroup>
        </FormControl>
      </Box>
    </Container>
  );
}

export default function Profile() {
  return (
    <SnackbarProvider maxSnack={3}>
      <ProfilePage />
    </SnackbarProvider>
  );
}
