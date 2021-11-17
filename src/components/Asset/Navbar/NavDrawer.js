import React from "react";
import {
  makeStyles,
  Typography,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
  ListItem,
} from "@material-ui/core";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  Box: {
    width: "220px",
    padding: theme.spacing(1),
  },
  mainText: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
}));

const NavDrawer = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const classes = useStyles();
  return (
    <>
      <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Box className={classes.Box} role="presentation">
          <Typography className={classes.mainText} color="primary" variant="h6">
            FoodPanda
          </Typography>
          <Divider />
          <List>
            {["Get Recipe", "Order Food"].map((content) => {
              return (
                <ListItem key={content} button>
                  <ListItemIcon>
                    <FastfoodIcon />
                  </ListItemIcon>
                  <ListItemText primary={content} />
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavDrawer;
