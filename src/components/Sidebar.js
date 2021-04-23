import {
  Box,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Card,
  Grid,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  ThemeProvider,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import PersonIcon from "@material-ui/icons/Person";
import { useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import { useStyles } from "../extras/helper";
import logo from "../logoDark.svg";
import DashboardIcon from "../extras/DashboardIcon.svg";

const SideBar = () => {
  let theme = useTheme();
  const classes = useStyles(theme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const linksList = [
    {
      text: "Dashboard",
      icon: (
        <img src={DashboardIcon} alt="Dashboard" style={{ width: "1.5vw" }} />
      ),
      url: "/",
    },

    {
      text: "Profile",
      icon: <PersonIcon className={classes.icon} />,
      url: "/Profile",
      disabled: false,
    },
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (e, index) => {
    setSelectedIndex(index);
    console.log(index);
  };
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const drawer = (
    <Grid
      container
      direction="column"
      justify="space-between"
      style={{ height: "100vh" }}
    >
      <Grid
        item
        container
        direction="column"
        justify="space-between"
        style={{ height: "30vh" }}
      >
        <Grid item style={{ display: "flex", justifyContent: "flex-start" }}>
          <img src={logo} alt="logo" style={{ width: "10vw" }} />
        </Grid>
        <Grid item>
          <List className={classes.list}>
            {linksList.map((item, index) => {
              const { text, icon, url, disabled } = item;

              return (
                <ListItem
                  button
                  variant="contained"
                  selected={selectedIndex === index}
                  key={text}
                  component={Link}
                  to={url}
                  disabled={disabled}
                  onClick={(e) => handleListItemClick(e, index)}
                >
                  <ListItemIcon style={{ color: "#fff" }}>{icon}</ListItemIcon>
                  <Typography variant="button">
                    <ListItemText
                      primary={text}
                      // primaryTypographyProps={{
                      //   //   variant: "",
                      //   style: { fontWeight: "600" },
                      // }}
                    />
                  </Typography>
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
  return (
    <ThemeProvider theme={theme}>
      <>
        <IconButton
          color="inherit"
          onClick={handleMenuToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Hidden mdUp>
          <Drawer
            open={isMenuOpen}
            onClose={handleMenuToggle}
            variant="temporary"
            className={classes.drawer}
            classes={{ paper: classes.drawerPaper }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown>
          <Drawer
            variant="permanent"
            className={classes.drawer}
            classes={{ paper: classes.drawerPaper }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </>
    </ThemeProvider>
  );
};
export default SideBar;
