import { makeStyles, withStyles } from "@material-ui/core/styles";

export function getTheme() {
  return {
    palette: {
      primary: {
        main: "#003ACC",
        light: "#4D77ff",
      },
      background: {
        default: "#E5E5E5",
        paper: "#003ACC",
      },
    },
    typography: {
      h3: {
        fontFamily: ["Raleway", "sans-serif"].join(","),
        fontWeight: "700",
        color: "#003ACC",
      },
    },
  };
}
export const useStyles = makeStyles((theme) => ({
  textField: {
    backgroundColor: "#fff",
    boxShadow:
      "0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08)",
    borderRadius: "4px",
  },
  labels: {
    fontFamily: "Raleway",
    fontWeight: "600",
  },
  drawer: {
    // width: "16.66vw",
    width: "20vw",
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down("sm")]: {
      width: "40%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "60%",
    },
  },
  drawerPaper: {
    // width: "15vw",
    width: "20vw",
    padding: "2vh 1vw",
    // paddingTop: "1%",
    backgroundColor: theme.palette.background.paper,
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      width: "40%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "60%",
    },
    borderRight: "0px",
  },
  logout: {
    fontFamily: "Lato",
    fontWeight: "bold",
  },
}));
