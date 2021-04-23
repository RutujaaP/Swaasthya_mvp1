import { Box, Grid, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "../extras/helper";
import SearchBar from "../components/SearchBar";
import SideBar from "../components/Sidebar";
import RecentPatients from "../components/RecentPatients";
import SharedCards from "../components/SharedCards";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Dashboard = () => {
  let theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Grid
      container
      direction="row"
      style={{
        height: "100vh",
        backgroundColor: "#F6F8FB",
        padding: "0vh 3vw",
      }}
    >
      {/* <Grid item sm={3}>
        <SideBar />
      </Grid> */}
      <Grid item sm={12} style={{ height: "inherit" }}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            height: "95%",
            justifyContent: "space-between",
            paddingTop: "2vh",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Typography color="primary" className={classes.logout}>
              <ExitToAppIcon />
              Logout
            </Typography>
          </Box>
          <SearchBar w="40vw" />
          <RecentPatients />
          <SharedCards />
        </Box>
      </Grid>
    </Grid>
  );
};
export default Dashboard;
