import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";

function NavBar() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

  return (
    <Box sx={{ display: 'flex', height: '85vh', bgcolor: "background.paper" }}>
        <Box sx={{ width: 200, borderRight: 1, borderColor: 'divider' }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={0}
        onChange={() => {}}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            bgcolor: "background.paper",
            padding: 2,
         }}
      >
        <Tab label="Dashboard" sx={{ flex: 1 }} />
        <Tab label="Users" sx={{ flex: 1 }} />
        <Tab label="Settings" sx={{ flex: 1 }} />
        <Tab label="Profile" sx={{ flex: 1 }} />
        <Tab label="Logout" sx={{ flex: 1 }} />
      </Tabs>
      </Box>
    </Box>
  );
}

export default NavBar;
