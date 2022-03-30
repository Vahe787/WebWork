import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Slider from "@mui/material/Slider";
import CostomizedSlider from "../Amount/Slider";

export default function FinInfo() {
  return (
    <div className=" flex justify-center mt-44 bg-blue-300">
      <div className="ml-20 pr-28 text-white">
        <p className="text-4xl font-bold">
          Permissions to Financial Information
        </p>
        <p className="mt-10">
          The owner is eligible to give visibility of the contract's rate to
          certain team members. You can set up the rate visibility from the
          member’s list.
        </p>
        <p className="mt-5">
          Setting “Show hourly rate” will mean the member is able to see all
          financial information related to his/her contract and role permission.
        </p>
        <p
          className="mt-5 border-solid border-2 pt-1 pb-1 pl-2 pr-2 border-white-500 rounded-1xl text-base font-serif
 "
        >
          If a member has no permission to financial information, he/she cannot
          view any kind of financial information, as well as is not able to
          generate invoices.
        </p>
      </div>
      <div className="flex justify-center">
        <Stack direction="row">
          <Avatar
            className="mt-16"
            alt="Cindy Baker"
            src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
          />
        </Stack>
        <Box
          sx={{
            paddingRight: "100px",
            margin: "70px 0 0 -25px ",
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 200,
              height: 80,
            },
          }}
        >
          <Paper elevation={2}>
            <p className="text-center font-bold mt-3 text-gray-700">
              Web Developer
            </p>
            <div className="flex justify-center mt-2">
              <p className="text-center mr-10 text-gray-700">Show Rate</p>
              <AttachMoneyIcon className="bg-green-600 text-white rounded-2xl" />
            </div>
          </Paper>
        </Box>
        <Box
          sx={{
            margin: "200px 40px 0 0",
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 340,
              height: 130,
            },
          }}
        >
          <Paper elevation={2}>
            <div className="text-gray-700 flex font-bold mt-5">
              <p className="ml-4">Project Name</p>
              <p className="ml-8">Budget</p>
              <p className="ml-8">Spent</p>
            </div>
            <div className="text-gray-700 flex mt-2">
              <p className="ml-4">Update 2.02</p>
              <p className="ml-14">500$</p>
              <p className="ml-12">375$</p>
            </div>
            <div>
              <CostomizedSlider />
            </div>
          </Paper>
        </Box>
      </div>
    </div>
  );
}
