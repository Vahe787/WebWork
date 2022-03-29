import React from "react";
import Button from "@material-ui/core/Button";
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
    width: "70%",
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
    <ThemeProvider theme={theme}>
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
      <Button
        type="submit"
        alt="add-note"
        className={classes.root}
        onKeyPress={preventSubmit}
      >
        Add task
      </Button>
    </ThemeProvider>
  );
};

export default TodoCreator;
