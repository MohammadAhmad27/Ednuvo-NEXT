import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ActiveOrders from "./ActiveOrders";
import CompletedOrders from "./CompletedOrders";
import CancelledOrders from "./CancelledOrders";

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

const OrderTabs = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
            },
            "& .MuiTab-root": {
              minWidth: "190px",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#5BBB7B",
            },
          }}
        >
          <Tab
            label="Active Orders"
            {...a11yProps(0)}
            sx={{
              color: value === 0 ? "#5BBB7B  !important" : "#6B7177",
              fontWeight: 500,
              fontSize: 16,
              textTransform: "none",
            }}
          />
          <Tab
            label="Completed Orders"
            {...a11yProps(1)}
            sx={{
              color: value === 1 ? "#5BBB7B !important" : "#6B7177",
              fontWeight: 500,
              fontSize: 16,
              textTransform: "none",
            }}
          />
          <Tab
            label="Cancelled Orders"
            {...a11yProps(2)}
            sx={{
              color: value === 2 ? "#5BBB7B !important" : "#6B7177",
              fontWeight: 500,
              fontSize: 16,
              textTransform: "none",
            }}
          />
        </Tabs>
      </Box>

      {/* Tab Panels */}
      <CustomTabPanel value={value} index={0}>
        <div className="flex-1 h-[calc(100vh-275px)] overflow-x-hidden overflow-y-auto mt-8">
          <ActiveOrders />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="flex-1 h-[calc(100vh-275px)] overflow-x-hidden overflow-y-auto mt-8">
          <CompletedOrders />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="flex-1 h-[calc(100vh-275px)] overflow-x-hidden overflow-y-auto mt-8">
          <CancelledOrders />
        </div>
      </CustomTabPanel>
    </Box>
  );
};

export default OrderTabs;
