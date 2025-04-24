import { Box, Container, Typography } from "@mui/material";

function ProfileView() {

    const user = {
        firstname: "John",
        lastname: "Doe",
        email: "j@test.com",
    };

    return (
        <Container sx={{ width: "800", padding: 2, borderRadius: 2, boxShadow: 3 }}>
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
                <Typography
                    label="First Name"
                    value={user.firstname}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    />
                <Typography
                    label="Last Name"
                    value={user.lastname}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    />
                <Typography
                    label="Email"
                    value={user.email}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    />
            </Box>
        </Container>
    );
}

export default ProfileView;