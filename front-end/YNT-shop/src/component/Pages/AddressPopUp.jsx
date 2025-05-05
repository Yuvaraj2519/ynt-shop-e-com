import { Backdrop, Box, Paper, TextField, Typography } from "@mui/material";

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
          Address
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Street Address"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            label="City"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            label="State"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            label="Zip Code"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            label="Country"
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </Box>
      </Paper>
    </Backdrop>
  );
}

export default AddressPopUp;