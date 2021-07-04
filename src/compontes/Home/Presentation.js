import React from "react";
import {
  AppBar,
  Button,
  Grid,
  Toolbar,
  Typography,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import "./Home.css";

const useStyle = makeStyles({
  rlink: {
    textDecoration: "none",
  },
  btn1: {
    marginTop: 350,
    marginLeft: 350,
  },
});

function Home() {
  const classes = useStyle();
  return (
    <div>
      <div>
        <Grid container spacing={3}>
          <AppBar color="white">
            <Toolbar>
              <Grid item xs={6}>
                <Typography variant="h3">Happy Mart</Typography>
              </Grid>
              <Grid className={classes.gridApp} item xs={6}>
                <NavLink to="/" className={classes.rlink}>
                  <Typography variant="h5" align="right">
                    LogOut
                  </Typography>
                </NavLink>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
      </div>
      <div>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Paper className="paper1">
              <NavLink to="/women" className={classes.rlink}>
                <Button variant="contained" className={classes.btn1}>
                  WOMEN
                </Button>
              </NavLink>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className="paper2">
              <NavLink to="/men" className={classes.rlink}>
                <Button variant="contained" className={classes.btn1}>
                  MEN
                </Button>
              </NavLink>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
