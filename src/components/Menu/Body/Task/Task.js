import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Form from "./ToDo/Form";

export default function Task() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          ml: 40,
          width: 700,
        },
      }}
    >
      <div>
        <Paper elevation={5}>
          <Form />
        </Paper>
      </div>
    </Box>
  );
}
