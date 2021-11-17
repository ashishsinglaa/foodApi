import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const MealCard = ({ data, btnvisiblity = false, children }) => {
  const navigate = useNavigate();

  return (
    <Grid key={data?.id} item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="250"
          image={data?.image}
          // alt={meal}
        />
        <CardContent>
          <Typography variant="h6">{data?.title}</Typography>
          {children}
        </CardContent>
        <CardActions>
          {btnvisiblity && (
            <Button
              variant="contained"
              color="secondary"
              onClick={() =>
                // navigate("/recipe", { state: { data: data, meal: meal } })
                navigate("/recipe", {
                  state: { data: data },
                })
              }
            >
              View Recipe
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MealCard;
