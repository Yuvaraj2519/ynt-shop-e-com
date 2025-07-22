import { Backdrop, Box, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

function AddressPopUp({ address, setAddress, open, setOpen }) {

    const handleClose = () => {
        setOpen(false);
    }

  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={open}
      onClick={handleClose}
    >
      <Paper
        variant="outlined"
        sx={{ padding: 2, marginTop: 2, borderRadius: 2 }}
      >
        <Typography
          variant="subtitle1"
          gutterBottom
          style={{ alignItems: "right" }}
        >
          Edit Address
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Street Address"
            variant="outlined"
            margin="normal"
            value={address.street}
            onChange={(e) => handleChange(e)}
            name="street"
            fullWidth
          />
          <TextField
            label="City"
            variant="outlined"
            margin="normal"
            value={address.city}
            onChange={(e) => handleChange(e)}
            name="city"
            fullWidth
          />
          <TextField
            label="State"
            variant="outlined"
            margin="normal"
            value={address.state}
            onChange={(e) => handleChange(e)}
            name="state"
            fullWidth
          />
          <TextField
            label="Pin Code"
            variant="outlined"
            margin="normal"
            value={address.pincode}
            onChange={(e) => handleChange(e)}
            name="pincode"
            fullWidth
          />
        </Box>
      </Paper>
    </Backdrop>
  );
}

export default AddressPopUp;