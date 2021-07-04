import React from "react";
import { Typography, Grid, Paper, makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { signInWithGoogle } from "../../../firebase/utils";
const useStyle = makeStyles({
  paper1: {
    height: 700,
  },
  paper: {
    marginTop: 100,
    padding: 20,
    height: 300,
    width: 500,
  },
  h4: {
    marginTop: 50,
  },
  btn: {
    marginTop: 50,
  },
});
function SignIn() {
  const classes = useStyle();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Grid>
        <Grid item xs={12}>
          <Paper align="center" className={classes.paper1}>
            <Typography variant="h3">Happy Mart</Typography>
            <Paper elevation={10} className={classes.paper}>
              <form onSubmit={handleSubmit}>
                <Typography variant="h3" className={classes.h4}>
                  SignIn
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                  onClick={signInWithGoogle}
                >
                  Signin with Google
                </Button>
              </form>
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default SignIn;
