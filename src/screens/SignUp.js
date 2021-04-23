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
import illustration1 from "../extras/illustration1.svg";
import logo from "../logoDark.svg";
import { useStyles } from "../extras/helper.js";
import SignIn from "./SignIn";
import AppDashboardRoutes from "./AppDashboardRoutes";
import ReactDOM from "react-dom";

const SignUp = () => {
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
        container
        direction="column"
        item
        justify="space-around"
        style={{
          backgroundColor: "#003ACC",
          width: "50%",
          height: "inherit",
          padding: "1vh 1vw",
        }}
      >
        <Grid item style={{ display: "flex", justifyContent: "flex-start" }}>
          <img src={logo} alt="logo" style={{ width: "10vw" }} />
        </Grid>
        <Grid item style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={illustration1}
            alt="illustration"
            style={{ height: "90vh" }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        item
        justify="center"
        // alignItems="center"
        // alignContent="center"
        direction="column"
        style={{ width: "50%", padding: "1vh 5vw" }}
      >
        <Typography variant="h3">Register</Typography>
        <Grid
          container
          item
          direction="column"
          style={{
            marginTop: "5vh",
            width: "70%",
            height: "50%",
            justifyContent: "space-between",
          }}
        >
          <Grid item>
            <label className={classes.labels} htmlFor="fname">
              First Name
            </label>
            <TextField
              id="standard-required"
              // label="First Name"
              fullWidth
              variant="outlined"
              className={classes.textField}
            />
          </Grid>
          <Grid item>
            <label htmlFor="fname" className={classes.labels}>
              Mobile Number
            </label>
            <TextField
              id="standard-required"
              // label="Mobile Number"
              fullWidth
              variant="outlined"
              className={classes.textField}
            />
          </Grid>
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
            Create an Account
          </Button>
        </Grid>
        <Grid item>
          Already have an account?&nbsp;
          <Link
            href="#"
            onClick={() =>
              ReactDOM.render(<SignIn />, document.getElementById("root"))
            }
          >
            Sign In
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default SignUp;
