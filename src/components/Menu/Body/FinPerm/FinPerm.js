import React from "react";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function FinPerm() {
  return (
    <div>
      <div className=" text-center mt-32">
        <p className="text-yellow-400">WORKSPACE PERMISSIONS</p>
        <p className="mt-8 text-4xl font-bold text-gray-700">
          Financial Permissions for Member Types
        </p>
      </div>
      <div className="mt-28 flex">
        <div className="ml-16 text-gray-700 ">
          <div className="border-2 border-white border-l-blue-500">
            <div className="flex ml-5">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_1883_4"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="26"
                  height="26"
                >
                  <rect width="26" height="26" fill="#C4C4C4" />
                </mask>
                <g mask="url(#mask0_1883_4)">
                  <path
                    d="M12.0183 12.7548C14.9991 12.7548 17.4156 10.2521 17.4156 7.16483C17.4156 4.07756 14.9991 1.57483 12.0183 1.57483C9.03752 1.57483 6.62109 4.07756 6.62109 7.16483C6.62109 10.2521 9.03752 12.7548 12.0183 12.7548Z"
                    stroke="#37434E"
                    strokeOpacity="0.65"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.57422 22.5376C2.57422 17.1349 6.80297 12.7551 12.0194 12.7551C14.2255 12.7551 15.4231 12.6534 17.0308 13.9663"
                    stroke="#37434E"
                    strokeOpacity="0.65"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g clipPath="url(#clip0_1883_4)">
                    <path
                      d="M16.7192 16.1532H14.5887C14.0004 16.1532 13.5234 16.6472 13.5234 17.2565V22.773C13.5234 23.3823 14.0004 23.8763 14.5887 23.8763H23.1106C23.699 23.8763 24.1759 23.3823 24.1759 22.773V17.2565C24.1759 16.6472 23.699 16.1532 23.1106 16.1532H20.9801M16.7192 16.1532H20.9801M16.7192 16.1532V14.2776C16.7192 14.0948 16.8622 13.9467 17.0387 13.9467H20.6606C20.8371 13.9467 20.9801 14.0948 20.9801 14.2776V16.1532"
                      stroke="#37434E"
                      strokeOpacity="0.65"
                      strokeWidth="1.2"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1883_4">
                    <rect
                      width="12.7829"
                      height="13.2395"
                      fill="white"
                      transform="translate(12.457 13.3944)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p className="font-bold ml-5">Owner</p>
            </div>
            <p className="block w-96 mt-8 ml-5">
              Owner is eligible to set up the access of financial information on
              a workspace level.
            </p>
          </div>
          <div className="mt-8 border-2 border-white border-l-yellow-500">
            <div className="flex ml-5 ">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0183 12.7548C14.9991 12.7548 17.4156 10.2521 17.4156 7.16483C17.4156 4.07756 14.9991 1.57483 12.0183 1.57483C9.03752 1.57483 6.62109 4.07756 6.62109 7.16483C6.62109 10.2521 9.03752 12.7548 12.0183 12.7548Z"
                  stroke="#37434E"
                  strokeOpacity="0.65"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.57422 22.5376C2.57422 17.1349 6.80297 12.7551 12.0194 12.7551C14.2255 12.7551 15.4231 12.6534 17.0308 13.9663"
                  stroke="#37434E"
                  strokeOpacity="0.65"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.2489 13.4333H15.9033C15.2555 13.4333 14.7305 13.9584 14.7305 14.6061V23.4021C14.7305 24.0498 15.2555 24.5749 15.9033 24.5749H22.94C23.5878 24.5749 24.1128 24.0498 24.1128 23.4021V14.6061C24.1128 13.9584 23.5878 13.4333 22.94 13.4333H20.8876H18.2489Z"
                  fill="white"
                  stroke="#37434E"
                  strokeOpacity="0.65"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.8242 16.6605H19.4933"
                  stroke="#37434E"
                  strokeOpacity="0.65"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.8242 18.736H21.2728"
                  stroke="#37434E"
                  strokeOpacity="0.65"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.8242 20.812H22.1625"
                  stroke="#37434E"
                  strokeOpacity="0.65"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="font-bold ml-5">Executive Manager</p>
            </div>
          </div>
          <div className="mt-8 border-2 border-white border-l-blue-500">
            <div className="flex ml-5">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0183 12.7548C14.9991 12.7548 17.4156 10.2521 17.4156 7.16483C17.4156 4.07756 14.9991 1.57483 12.0183 1.57483C9.03752 1.57483 6.62109 4.07756 6.62109 7.16483C6.62109 10.2521 9.03752 12.7548 12.0183 12.7548Z"
                  stroke="#37434E"
                  strokeOpacity="0.65"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.57422 22.5376C2.57422 17.1349 6.80297 12.7551 12.0194 12.7551C14.2255 12.7551 15.4231 12.6534 17.0308 13.9663"
                  stroke="#37434E"
                  strokeOpacity="0.65"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.2489 13.4333H15.9033C15.2555 13.4333 14.7305 13.9584 14.7305 14.6061V23.4021C14.7305 24.0498 15.2555 24.5749 15.9033 24.5749H22.94C23.5878 24.5749 24.1128 24.0498 24.1128 23.4021V14.6061C24.1128 13.9584 23.5878 13.4333 22.94 13.4333H20.8876H18.2489Z"
                  fill="white"
                  stroke="#37434E"
                  strokeOpacity="0.65"
                  strokeWidth="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.8242 16.6605H19.4933"
                  stroke="#37434E"
                  strokeOpacity="0.65"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.8242 18.736H21.2728"
                  stroke="#37434E"
                  strokeOpacity="0.65"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.8242 20.812H22.1625"
                  stroke="#37434E"
                  strokeOpacity="0.65"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="font-bold ml-5">Project Manager</p>
            </div>
          </div>
          <div className="mt-8 border-2 border-white border-l-cyan-500">
            <div className="flex ml-5">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0183 12.7547C14.9991 12.7547 17.4156 10.252 17.4156 7.16471C17.4156 4.07743 14.9991 1.57471 12.0183 1.57471C9.03752 1.57471 6.62109 4.07743 6.62109 7.16471C6.62109 10.252 9.03752 12.7547 12.0183 12.7547Z"
                  stroke="#37434E"
                  strokeOpacity="0.65"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.57422 22.5377C2.57422 17.135 6.80297 12.7552 12.0194 12.7552C14.2255 12.7552 15.4231 12.6536 17.0308 13.9664"
                  stroke="#37434E"
                  strokeOpacity="0.65"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.6974 19.2833H14.1641V13.8666C14.1641 12.6533 15.0307 12.4944 15.4641 12.5666H22.3974C23.6107 12.5666 23.7696 13.4333 23.6974 13.8666V19.2833Z"
                  fill="white"
                />
                <path
                  d="M14.1446 19.2209V13.6555C14.1446 13.0542 14.6321 12.5667 15.2335 12.5667H22.6378C23.2392 12.5667 23.7267 13.0542 23.7267 13.6555V19.2209M14.1446 19.2209H23.7267M14.1446 19.2209L13.3386 22.0702C13.1421 22.7652 13.6642 23.4554 14.3864 23.4554H23.4849C24.2071 23.4554 24.7292 22.7652 24.5327 22.0702L23.7267 19.2209M14.1446 19.2209H18.9356H23.7267"
                  stroke="#37434E"
                  strokeOpacity="0.65"
                  strokeWidth="1.2"
                />
                <path
                  d="M18.3906 21.8225H19.4795"
                  stroke="#37434E"
                  strokeOpacity="0.65"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="font-bold ml-5">Employee</p>
            </div>
          </div>
          <div className="mt-8 border-2 border-white border-l-pink-500">
            <div className="flex ml-5">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0183 12.7552C14.9991 12.7552 17.4156 10.2525 17.4156 7.16519C17.4156 4.07792 14.9991 1.5752 12.0183 1.5752C9.03752 1.5752 6.62109 4.07792 6.62109 7.16519C6.62109 10.2525 9.03752 12.7552 12.0183 12.7552Z"
                  stroke="#37434E"
                  strokeOpacity="0.65"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.57422 22.5382C2.57422 17.1355 6.80297 12.7557 12.0194 12.7557C14.2255 12.7557 15.4231 12.6541 17.0308 13.9669"
                  stroke="#37434E"
                  strokeOpacity="0.65"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.9453 23.1893V14.5176C14.9453 13.9189 15.4306 13.4336 16.0293 13.4336H21.4491C22.0478 13.4336 22.5331 13.9189 22.5331 14.5176V23.1893L19.3254 21.1272C18.9683 20.8976 18.5101 20.8976 18.1531 21.1272L14.9453 23.1893Z"
                  fill="white"
                  stroke="#37434E"
                  strokeOpacity="0.65"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="font-bold ml-5">Client</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="ml-96  ">
            <div className="w-96 h-80 rounded-2xl bg-[url('https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2020/02/28151102/web-developers.jpg')]"></div>
          </div>
          <div className="mt-24 ml-16 ">
            <Box
              sx={{
                margin: "0 0 0 -700px ",
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 400,
                  height: 40,
                },
              }}
            >
              <Paper elevation={2}>
                <Stack direction="row" spacing={2}>
                  <div className="flex justify-center">
                    <Avatar
                      alt="Cindy Baker"
                      src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
                    />
                    <p className="pt-2 pl-2">Name Surname</p>
                    <p className="pt-2 pl-14">MVP Lounc</p>
                    <p className="pt-2 pl-14">30$</p>
                  </div>
                </Stack>
              </Paper>
            </Box>
            <Box
              sx={{
                margin: "0 0 0 -700px ",
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  ml: 5,
                  width: 400,
                  height: 40,
                },
              }}
            >
              <Paper elevation={2}>
                <Stack direction="row" spacing={2}>
                  <div className="flex justify-center">
                    <Avatar
                      alt="Cindy Baker"
                      src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
                    />
                    <p className="pt-2 pl-2">Name Surname</p>
                    <p className="pt-2 pl-14">Update 2.02</p>
                    <p className="pt-2 pl-14">18$</p>
                  </div>
                </Stack>
              </Paper>
            </Box>
            <Box
              sx={{
                margin: "0 0 0 -700px ",
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 400,
                  height: 40,
                },
              }}
            >
              <Paper elevation={2}>
                <Stack direction="row" spacing={2}>
                  <div className="flex justify-center">
                    <Avatar
                      alt="Cindy Baker"
                      src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
                    />
                    <p className="pt-2 pl-2">Name Surname</p>
                    <p className="pt-2 pl-12">SMM Compaign</p>
                    <p className="pt-2 pl-12">24$</p>
                  </div>
                </Stack>
              </Paper>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
