import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
}));

export default function BasicTextFields({ search, setSearch }) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}
