import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ImageAvatar from "./Avatar";

export default function Amount() {
  return (
    <div className="flex justify-center pt-44">
      <div>
        <Box
          sx={{
            paddingRight: "300px",

            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 300,
              height: 400,
            },
          }}
        >
          <Paper sx={{ outline: "1px solid yellow" }} elevation={2}>
            <ImageAvatar />
          </Paper>
        </Box>
      </div>
      <div className="inset-y-0 right-0 ">
        <p className="text-3xl">Amout Reports</p>
        <p className="mt-10 w-96">
          If you’re working on an hourly rate, it will be a good idea to make
          your contracts billable by adding an hourly rate in the contract's
          settings.
        </p>
        <p className="mt-5 w-96">
          By doing so your tracked time will be converted into an amount and you
          will be able to see the reports both in hours and amounts. Amount
          reports show the billed amount of each member by day, week or month.
        </p>
      </div>
    </div>
  );
}
