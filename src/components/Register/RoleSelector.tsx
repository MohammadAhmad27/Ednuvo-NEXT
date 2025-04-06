"use client";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const StyledRadio = styled(Radio)(() => ({
  color: "#5BBB7B",
  "&.Mui-checked": {
    color: "#5BBB7B",
  },
}));
const RoleSelectorCard = () => {
  const [value, setValue] = React.useState("provider");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box className="w-full flex flex-col justify-center items-center gap-10">
      <h1 className="text-[32px] font-semibold text-black text-center max-w-[500px] leading-tight">
        Join As A Service Provider Or Service Requester
      </h1>
      <FormControl>
        <RadioGroup
          value={value}
          onChange={handleChange}
          sx={{
            maxWidth: 430,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* 1st div */}
          <Paper
            elevation={0}
            sx={{
              paddingX: 3,
              paddingY: 2,
              borderRadius: 3,
              border: "1px solid #E9E9E9",
            }}
          >
            <FormControlLabel
              value="provider"
              control={<StyledRadio />}
              label={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    marginLeft: "8px",
                  }}
                >
                  <Image
                    src="/register/user.svg"
                    alt="user-icon"
                    width={30}
                    height={30}
                    className="object-cover "
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "#222222",
                        marginBottom: "4px",
                      }}
                    >
                      Service Provider
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "normal",
                        color: "#6B7177",
                      }}
                    >
                      Offer your expertise, get matched with clients and grow
                      your business.
                    </Typography>
                  </Box>
                </Box>
              }
            />
          </Paper>
          {/* 2nd div */}
          <Paper
            elevation={0}
            sx={{
              paddingX: 3,
              paddingY: 2,
              borderRadius: 3,
              border: "1px solid #E9E9E9",
            }}
          >
            <FormControlLabel
              value="requester"
              control={<StyledRadio />}
              label={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    marginLeft: "8px",
                  }}
                >
                  <Image
                    src="/register/user-bag.svg"
                    alt="user-icon"
                    width={30}
                    height={30}
                    className="object-cover "
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "#222222",
                        marginBottom: "4px",
                      }}
                    >
                      Service Requester
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "normal",
                        color: "#6B7177",
                      }}
                    >
                      Need a skilled professional? Post a job and hire trusted
                      experts for your task.
                    </Typography>
                  </Box>
                </Box>
              }
            />
          </Paper>
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default RoleSelectorCard;
