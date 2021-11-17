import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: theme.boxShadow,
  },
}));

const SeriesCard = ({ imageLink, name, desc }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia component="img" height="200" image={imageLink} alt="..." />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body1">{desc}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="secondary">
          Watch Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default SeriesCard;
