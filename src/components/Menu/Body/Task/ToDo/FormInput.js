import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles({
  root: {
    background: "#8276FF",
    borderRadius: "15px",
    color: "black",
    padding: "0 10px",
    whiteSpace: "nowrap",
    margin: "15px 0 0 20px",
  },
  label: {
    width: "50%",
  },

  div: {
    display: "flex",
  },

  date: {
    marginLeft: 20,
  },
});

const TodoCreator = ({
  theme,
  todo,
  setTodo,
  clearInput,
  inputRef,
  isInputEmpty,
  preventSubmit,
}) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme} sx={{ display: "flex" }}>
      <FormControl className={classes.label}>
        <TextField
          id="outlined-basic"
          label="What's need to be done?" // better accessibility with Material UI
          value={todo}
          variant="outlined"
          onChange={(e) => setTodo(e.target.value)}
          onFocus={clearInput}
          ref={inputRef}
          aria-describedby="component-error-text"
          onKeyPress={preventSubmit}
        />

        {!isInputEmpty ? (
          <></>
        ) : (
          <>
            <FormHelperText id="component-error-text">
              Task can't be empty
            </FormHelperText>
          </>
        )}
      </FormControl>
      <button
        type="submit"
        alt="add-note"
        onKeyPress={preventSubmit}
        className=" border-solid border-2 pt-3 pb-3 pl-10 pr-10 bg-purple-500 border-purple-500 cursor-pointer rounded-3xl text-base"
      >
        <p className="text-white">Start 7 Days Free Trial</p>
      </button>
    </ThemeProvider>
  );
};

export default TodoCreator;
