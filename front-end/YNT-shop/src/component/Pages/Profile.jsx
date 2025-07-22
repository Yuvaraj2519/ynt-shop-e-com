import {
  Box,
  Button,
  ButtonGroup,
  Chip,
  Container,
  FormControlLabel,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { SnackbarProvider } from "notistack";
import { useState } from "react";
import AddressPopUp from "./AddressPopUp";

function ProfilePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false);

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
  ];

  const options = [
    {
      id: "1",
      title: "Home address",
      street: "123 Main Street",
      City: "Springfield",
      State: "IL",
      ZIP: "62704",
      Country: "USA",
    },
    {
      id: "2",
      title: "Work address",
      Street: "456 Oak Avenue",
      City: "Shelbyville",
      State: "IL",
      ZIP: "62565",
      Country: "USA",
    },
    {
      id: "3",
      title: "other",
      Street: "789 Elm Street",
      City: "Capital City",
      State: "IL",
      ZIP: "62701",
      Country: "USA",
    },
  ];
  const [selected, setSelected] = useState("1");

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
          type="date"
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
      <Box display="flex" flexDirection="column" gap={2}>
        {options.map((option) => (
          <Box
            key={option.id}
            sx={{
              position: "relative",
              border: "1px solid #ccc",
              borderRadius: 2,
              padding: 2,
              paddingLeft: 5,
              backgroundColor: selected === option.id ? "#e3f2fd" : "#f9f9f9",
            }}
          >
            <FormControlLabel
              control={
                <Radio
                  checked={selected === option.id}
                  onChange={() => setSelected(option.id)}
                  value={option.id}
                  sx={{ position: "absolute", top: 7, left: 2 }}
                />
              }
              label={
                <>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {option.title}
                  </Typography>
                  <Typography variant="body2">{option.street}</Typography>
                </>
              }
              sx={{ marginLeft: 0 }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 1,
              }}
            >
              <ButtonGroup
                variant="text"
                aria-label="text button group"
                sx={{ gap: 2 }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<EditRoundedIcon />}
                  onClick={() => setOpen(true)}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteRoundedIcon />}
                  onClick={() => console.log("Delete clicked")}
                >
                  Delete
                </Button>
              </ButtonGroup>
              {option.isDefault && (
                <Chip label="Default" color="primary" size="small" />
              )}
            </Box>
            {open && (
              <AddressPopUp
                address={option}
                setAddress={setSelectedId}
                open={open}
                setOpen={setOpen}
              />
            )}
          </Box>
        ))}
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
