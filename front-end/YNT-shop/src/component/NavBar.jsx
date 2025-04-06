import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { DashboardRounded } from "@mui/icons-material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
      }}
      className="bg-white"
      style={{
        width: "95vw",
        height: "85vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      // className="bg-white"
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
        className="bg-white"
        style={{
          width: "12vw",
          height: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Tab
          label="Dashboard"
          icon={<DashboardRounded />}
          iconPosition="start"
          align="start"
          sx={{ justifyContent: "start" }}
          {...a11yProps(0)}
        />
        <Tab
          label="Profile"
          icon={<AccountCircleRoundedIcon />}
          iconPosition="start"
          align="start"
          sx={{ justifyContent: "start" }}
          {...a11yProps(1)}
        />
        <Tab
          label="Orders"
          icon={<ShoppingCartRoundedIcon />}
          iconPosition="start"
          align="start"
          sx={{ justifyContent: "start" }}
          {...a11yProps(2)}
        />
        <Tab
          label="Log out"
          icon={<LogoutRoundedIcon />}
          iconPosition="start"
          align="start"
          sx={{ justifyContent: "start" }}
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          {...a11yProps(3)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "75vw",
          }}>
          <Typography variant="h4">Dashboard</Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "75vw",
          }}>
          <Typography variant="h4">Orders</Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "75vw",
          }}>
          <Typography variant="h4">Profile</Typography>
        </Box>
      </TabPanel>
    </Box>
  );
}
