import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Link,
  useTheme,
} from "@material-ui/core";
import illustration2 from "../extras/illustration2.svg";
import logoLight from "../LogoLight.svg";
import { useStyles } from "../extras/helper.js";
import ReactDOM from "react-dom";
import AppDashboardRoutes from "./AppDashboardRoutes";
import SignUp from "./SignUp";

const SignIn = () => {
  let theme = useTheme();
  let classes = useStyles(theme);
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      style={{
        height: "100vh",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Grid
        item
        md={5}
        container
        // direction="column"
        style={{
          padding: "1vh 1vw",
        }}
      >
        <Grid
          item
          style={{
            // height: "inherit",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <img src={logoLight} alt="logo" style={{ width: "10vw" }} />
        </Grid>
        <Grid
          container
          item
          justify="center"
          direction="column"
          style={{ height: "90%", paddingLeft: "2vw" }}
        >
          <Typography variant="h3">Sign In</Typography>

          <Grid
            container
            item
            direction="column"
            style={{
              marginTop: "2vh",
              width: "70%",
              height: "50%",
              justifyContent: "space-evenly",
            }}
          >
            <Grid item>
              <label htmlFor="fname" className={classes.labels}>
                Medical ID
              </label>
              <TextField
                id="standard-required"
                // label="Medical ID"
                fullWidth
                variant="outlined"
                className={classes.textField}
              />
            </Grid>
            <Grid item>
              <label htmlFor="fname" className={classes.labels}>
                OTP
              </label>
              <TextField
                id="standard-required"
                // label="OTP"
                fullWidth
                variant="outlined"
                className={classes.textField}
              />
            </Grid>
            <Grid item>
              <FormControlLabel
                control={<Checkbox />}
                label="I agree to the terms and conditions"
                labelPlacement="end"
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  ReactDOM.render(
                    <AppDashboardRoutes />,
                    document.getElementById("root")
                  )
                }
              >
                Login
              </Button>
            </Grid>
            <Grid item>
              Don’t have an account yet? &nbsp;
              <Link
                href="#"
                onClick={() =>
                  ReactDOM.render(<SignUp />, document.getElementById("root"))
                }
              >
                Create One.
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        md={7}
        style={{
          backgroundColor: "#003ACC",
          height: "inherit",
          padding: "1vh 1vw",
        }}
      >
        <Grid
          item
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
            alignItems: "center",
          }}
        >
          <img
            src={illustration2}
            alt="illustration"
            style={{ height: "70vh" }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignIn;
