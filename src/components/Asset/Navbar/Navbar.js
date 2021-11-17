import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import NavDrawer from "./NavDrawer";

const useStyles = makeStyles((theme) => ({
  marginLeft: {
    marginLeft: theme.spacing(2),
  },
  Box: {
    width: "220px",
    padding: theme.spacing(1),
  },
  mainText: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
  textField: {
    backgroundColor: theme.palette.primary.light,
    marginLeft: theme.spacing(5),
    borderRadius: "5px",
    width: "350px",
  },
  input: {
    "&::placeholder": {
      color: "white",
    },
    color: grey[300],
  },
  labelColor: {
    color: grey[200],
  },
}));

const Navbar = () => {
  // init drawer hooks
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // for search bar to get searchTerm
  const [trackSearch, setTrackSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // navgation hook to redirect it to other component
  const navigate = useNavigate();

  // classes for styling
  const classes = useStyles();

  // form submition function
  const submitHandler = (event) => {
    console.log("this function works");
    event.preventDefault();
    console.log("value of trackSearch", trackSearch);
    setSearchTerm(trackSearch);
    // does not work because state will update after component re-render
    navigate("/search", {
      state: { searchTerm: searchTerm },
    });
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon fontSize="medium" />
          </IconButton>
          <Typography className={classes.marginLeft} variant="h6">
            FoodPanda
          </Typography>
          <form onSubmit={submitHandler}>
            <TextField
              label="Search Recipe..."
              variant="outlined"
              size="small"
              className={classes.textField}
              value={trackSearch}
              onChange={(e) => {
                console.log(e.target.value);
                return setTrackSearch(e.target.value);
              }}
              InputProps={{
                className: classes.input,
              }}
              InputLabelProps={{
                className: classes.labelColor,
              }}
            />
            <Button type="submit" variant="outlined" color="secondary">
              Search
            </Button>
          </form>
        </Toolbar>
      </AppBar>
      <NavDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
    </>
  );
};

export default Navbar;
