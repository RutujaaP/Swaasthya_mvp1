import { getTheme } from "../extras/helper";
import { createMuiTheme, ThemeProvider, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard.js";
import Notes from "./Notes";
import SideBar from "../components/Sidebar";
// import Sidebar from "../components/Sidebar.js";

const AppDashboardRoutes = () => {
  const theme = createMuiTheme(getTheme());
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Grid
          container
          direction="row"
          style={{
            height: "100vh",
            backgroundColor: theme.palette.background.default,
          }}
        >
          <Grid item md={3} xs={false}>
            {/* <SideBar /> */}
            <SideBar />
          </Grid>
          <Grid item md={9} xs={12}>
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route exact path="/Profile">
                <Notes />
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Router>
  );
};
export default AppDashboardRoutes;
