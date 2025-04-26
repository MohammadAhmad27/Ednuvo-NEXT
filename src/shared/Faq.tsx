"use client"
import React from "react"
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import { FAQ } from "@/interfaces/ServiceRequesterDashboard"

interface FAQProps {
  faqData: FAQ[]
}

const Faq = ({ faqData }: FAQProps) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1")

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      {faqData?.map((item) => {
        const panelId = item?.id?.toString()
        return (
          <Accordion
            key={panelId}
            expanded={expanded === panelId}
            onChange={handleChange(panelId)}
            sx={{
              margin: "15px 0 !important",
              borderRadius: "16px !important",
              boxShadow: "none",
              border: "1px solid #E9E9E9",
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                expanded === panelId ? (
                  <RemoveIcon sx={{ color: "white", backgroundColor: "#5BBB7B", borderRadius: "4px", padding: "2px" }} />
                ) : (
                  <AddIcon sx={{ color: "white", backgroundColor: "#5BBB7B", borderRadius: "4px", padding: "2px" }} />
                )
              }
              aria-controls={`${panelId}-content`}
              id={`${panelId}-header`}
              sx={{
                padding: "10px 16px",
                "& .MuiAccordionSummary-content": {
                  margin: "8px 0",
                },
              }}
            >
              <Typography sx={{ fontWeight: 500, fontSize: 14, color: "#181D27" }}>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: "20px 16px",
                backgroundColor: expanded === panelId ? "#EEF8F2" : "transparent",
                borderRadius: "0 0 16px 16px",
              }}
            >
              <Typography sx={{ fontWeight: 400, fontSize: 14, color: "#181D27" }}>{item.desc}</Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  )
}

export default Faq
