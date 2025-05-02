import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AccountSettings from "./AccountSettings";
import PasswordAndSecurity from "./Password&Security";
import NotificationSettings from "./NotificationSettings";

interface Props {
  component?: React.ReactNode;
}

function CustomTabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="w-full"
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SettingTabs = ({ component }: Props) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // Dynamic index calculation
  const tabIndexes = {
    account: 0,
    profile: component ? 1 : -1,
    password: component ? 2 : 1,
    notification: component ? 3 : 2,
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box
        sx={{
          borderBottom: "0.5px solid",
          borderImageSource:
            "linear-gradient(90deg, #A8B9CB 0%, rgba(168, 185, 203, 0) 100%)",
          borderImageSlice: 1,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          className="custom-alarm-tab"
          aria-label="basic tabs example"
          sx={{
            "& .MuiTabs-list": {
              display: "flex",
              gap: "40px",
              overflowX: "auto",
            },
            "& .MuiTab-root": {
              minWidth: "210px",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#5BBB7B",
            },
          }}
        >
          <Tab
            label="Account Settings"
            {...a11yProps(tabIndexes?.account)}
            sx={{
              color:
                value === tabIndexes?.account
                  ? "#5BBB7B  !important"
                  : "#6B7177",
              fontWeight: 500,
              fontSize: 16,
              textTransform: "none",
            }}
          />
          {component && (
            <Tab
              label="Profile"
              {...a11yProps(tabIndexes?.profile)}
              sx={{
                color:
                  value === tabIndexes?.profile
                    ? "#5BBB7B !important"
                    : "#6B7177",
                fontWeight: 500,
                fontSize: 16,
                textTransform: "none",
              }}
            />
          )}
          <Tab
            label="Password & Security"
            {...a11yProps(tabIndexes?.password)}
            sx={{
              color:
                value === tabIndexes?.password
                  ? "#5BBB7B  !important"
                  : "#6B7177",
              fontWeight: 500,
              fontSize: 16,
              textTransform: "none",
            }}
          />
          <Tab
            label="Notification Settings"
            {...a11yProps(tabIndexes?.notification)}
            sx={{
              color:
                value === tabIndexes?.notification
                  ? "#5BBB7B !important"
                  : "#6B7177",
              fontWeight: 500,
              fontSize: 16,
              textTransform: "none",
            }}
          />
        </Tabs>
      </Box>

      {/* Tab Panels */}
      <CustomTabPanel value={value} index={tabIndexes?.account}>
        <div className="flex-1 h-[calc(100vh-275px)] overflow-x-hidden overflow-y-auto">
          <AccountSettings />
        </div>
      </CustomTabPanel>
      {component && (
        <CustomTabPanel value={value} index={tabIndexes?.profile}>
          <div className="flex-1 h-[calc(100vh-275px)] overflow-x-hidden overflow-y-auto">
            {component && component}
          </div>
        </CustomTabPanel>
      )}

      <CustomTabPanel value={value} index={tabIndexes?.password}>
        <div className="flex-1 h-[calc(100vh-275px)] overflow-x-hidden overflow-y-auto">
          <PasswordAndSecurity />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={tabIndexes?.notification}>
        <div className="flex-1 h-[calc(100vh-275px)] overflow-x-hidden overflow-y-auto">
          <NotificationSettings />
        </div>
      </CustomTabPanel>
    </Box>
  );
};

export default SettingTabs;
