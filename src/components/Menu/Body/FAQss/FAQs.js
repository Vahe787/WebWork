import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQs() {
  return (
    <div>
      <p className="mt-44 text-4xl font-bold text-gray-700 text-center">FAQs</p>
      <div className="mt-20 pr-60 pl-60 text-center ">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <p className="text-2xl font-bold text-gray-700">
                Can I choose the currency for the generated amount?
              </p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="text-gray-700">
                Yes, if you are the Owner of the workspace you can choose your
                preferred currency from the drop-down list of profile settings.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <p className="text-2xl font-bold text-gray-700">
                Where can I view the amount reports?
              </p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="text-gray-700">
                You can find the amount reports on the timesheet reports page.
                You can view them both on hours and amounts.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <p className="text-2xl font-bold text-gray-700">
                How can I set an hourly rate?
              </p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="text-gray-700">
                You can go to members page from your dashboard, select your
                preferred contract and put an hourly rate for a certain team
                member.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <p className="text-2xl font-bold text-gray-700">
                Who can set an hourly rate?
              </p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p className="text-gray-700">
                The owner and also the executive manager if the owner gives
                permission to him/her.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
