"use client";
import React from "react";
import Radio from "@mui/material/Radio";
import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const StyledRadio = styled(Radio)(() => ({
  color: "#5BBB7B",
  padding: 0,
  "&.Mui-checked": {
    color: "#5BBB7B",
  },
}));

const PayoutMethod = ({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}) => {
  return (
    <Box className="w-full flex flex-col gap-4">
      <h3 className="text-[15px] font-semibold text-lightblack leading-tight">
        Select payout method
      </h3>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 2,
        }}
      >
        {/* Paypal */}
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            px: 3,
            py: 2,
            borderRadius: 3,
            border:
              value === "paypal" ? "1px solid #5BBB7B" : "1px solid #E9E9E9",
            backgroundColor: value === "paypal" ? "#EEF8F2" : "inherit",
            cursor: "pointer",
            "&:hover": {
              border: "1px solid #5BBB7B",
            },
          }}
          onClick={() => setValue("paypal")}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <StyledRadio checked={value === "paypal"} />
              <Image
                src="/service-provider-dashboard/paypal.svg"
                alt="paypal-icon"
                width={25}
                height={25}
                className="object-cover"
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "medium",
                  color: "#222222",
                }}
              >
                Setup Paypal Account
              </Typography>
            </Box>
            <Image
              src="/service-requester-dashboard/forward-icon.svg"
              alt="forward-icon"
              width={10}
              height={10}
              className="object-cover"
            />
          </Box>
        </Paper>

        {/* Payoneer */}
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            px: 3,
            py: 2,
            borderRadius: 3,
            border:
              value === "payoneer" ? "1px solid #5BBB7B" : "1px solid #E9E9E9",
            backgroundColor: value === "payoneer" ? "#EEF8F2" : "inherit",
            cursor: "pointer",
            "&:hover": {
              border: "1px solid #5BBB7B",
            },
          }}
          onClick={() => setValue("payoneer")}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <StyledRadio checked={value === "payoneer"} />
              <Image
                src="/service-provider-dashboard/payoneer.svg"
                alt="payoneer-icon"
                width={25}
                height={25}
                className="object-cover"
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "medium",
                  color: "#222222",
                }}
              >
                Payoneer
              </Typography>
            </Box>
            <Image
              src="/service-requester-dashboard/forward-icon.svg"
              alt="forward-icon"
              width={10}
              height={10}
              className="object-cover"
            />
          </Box>
        </Paper>

        {/* Bank */}
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            px: 3,
            py: 2,
            borderRadius: 3,
            border:
              value === "bank" ? "1px solid #5BBB7B" : "1px solid #E9E9E9",
            backgroundColor: value === "bank" ? "#EEF8F2" : "inherit",
            cursor: "pointer",
            "&:hover": {
              border: "1px solid #5BBB7B",
            },
          }}
          onClick={() => setValue("bank")}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <StyledRadio checked={value === "bank"} />
              <Image
                src="/service-provider-dashboard/bank.svg"
                alt="bank-icon"
                width={25}
                height={25}
                className="object-cover"
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "medium",
                  color: "#222222",
                }}
              >
                Setup Bank Account
              </Typography>
            </Box>
            <Image
              src="/service-requester-dashboard/forward-icon.svg"
              alt="forward-icon"
              width={10}
              height={10}
              className="object-cover"
            />
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default PayoutMethod;
