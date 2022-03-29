import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function ImageAvatar() {
  return (
    <Stack direction="row" spacing={2}>
      <div className="flex justify-center">
        <div>
          <Avatar
            className="m-10"
            alt="Cindy Baker"
            src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
          />
        </div>
        <div>
          <p className="mt-8 font-bold">Jhon Doe</p>
          <p>Web Developer</p>
        </div>
      </div>
    </Stack>
  );
}
