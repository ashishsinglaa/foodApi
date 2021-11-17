import { Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import apiKey from "../ApiKey";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    marginLeft: theme.spacing(3),
  },
  resultText: {
    margin: theme.spacing(3),
    marginLeft: theme.spacing(0),
  },
  resultImg: {
    height: "200px",
    width: "300px",
    borderRadius: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
}));

const Search = () => {
  // state for result regarding searchTerm
  const [results, setResults] = useState([]);

  // getting searchTerm from search bar which comes through useNavigate hook
  const location = useLocation();

  const { searchTerm } = location.state;
  console.log(location.state);

  // url on which we find result regarding search Terms
  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=${apiKey}&number=10`;

  // calling api and fetching data on component did mount
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setResults(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  // for styling
  const classes = useStyles();
  return (
    <div className={classes.mainDiv}>
      <Typography variant="h5" className={classes.resultText}>
        Results for {searchTerm}
      </Typography>
      {results.map((result) => {
        return (
          <React.Fragment key={result.id}>
            <Grid container>
              <Grid item xs={12} sm={6} md={4}>
                <img
                  src={result.image}
                  alt={`Result for ${searchTerm}`}
                  className={classes.resultImg}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={8}>
                <Typography>{result.title}</Typography>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Search;
