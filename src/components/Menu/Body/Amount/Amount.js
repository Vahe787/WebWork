import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ImageAvatar from "./Avatar";
import CostomizedSlider from "./Slider";

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
              height: 350,
            },
          }}
        >
          <Paper sx={{ outline: "1px solid yellow" }} elevation={2}>
            <ImageAvatar />
            <div className=" text-gray-700">
              <div className="flex justify-center mt-2">
                <p className="pr-28 font-bold">Tracked Time</p>
                <p>25h</p>
              </div>
              <div className="flex justify-center mt-3">
                <p className="pr-28 mr-2 font-bold">Hourly Rate</p>
                <p>24$</p>
              </div>
              <div className="flex justify-center mt-3">
                <p className="pr-40 font-bold">Total</p>
                <p>600$</p>
              </div>
              <div className="mt-10">
                <p className="ml-10">Wikly Limit</p>
                <CostomizedSlider />
              </div>
            </div>
          </Paper>
        </Box>
      </div>
      <div className="inset-y-0 right-0 ">
        <p className="text-4xl font-bold text-gray-700">Amout Reports</p>
        <p className="mt-10 w-96 text-gray-700">
          If you’re working on an hourly rate, it will be a good idea to make
          your contracts billable by adding an hourly rate in the contract's
          settings.
        </p>
        <p className="mt-5 w-96 text-gray-700">
          By doing so your tracked time will be converted into an amount and you
          will be able to see the reports both in hours and amounts. Amount
          reports show the billed amount of each member by day, week or month.
        </p>
      </div>
    </div>
  );
}
