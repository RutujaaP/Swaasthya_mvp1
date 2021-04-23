import { Box, GridList, GridListTile } from "@material-ui/core";
import { Link } from "react-router-dom";
// import ReactDOM from "react-dom";
import PersonIcon from "@material-ui/icons/Person";
import { useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import { useStyles } from "../extras/helper";
import logo from "../logoDark.svg";
import DashboardIcon from "../extras/DashboardIcon.svg";
import Cards from "./Cards";

const RecentPatients = () => {
  let theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Box
      style={{
        backgroundColor: "#F1f1fa",
        height: "35vh",
        // overflowY: "auto",
        overflow: "auto",
      }}
    >
      <h1 style={{ paddingLeft: "1vw" }}>Recent Patients</h1>
      <GridList cols={3} style={{ maxHeight: "26vh", margin: "0" }}>
        <GridListTile style={{ height: "max-content", padding: "revert" }}>
          <Cards use="RecentPatients" />
        </GridListTile>
        <GridListTile style={{ height: "max-content" }}>
          <Cards use="RecentPatients" />
        </GridListTile>
        <GridListTile style={{ height: "max-content" }}>
          <Cards use="RecentPatients" />
        </GridListTile>
        <GridListTile style={{ height: "max-content" }}>
          <Cards use="RecentPatients" />
        </GridListTile>
        <GridListTile style={{ height: "max-content" }}>
          <Cards use="RecentPatients" />
        </GridListTile>
        <GridListTile style={{ height: "max-content" }}>
          <Cards use="RecentPatients" />
        </GridListTile>
        <GridListTile style={{ height: "max-content" }}>
          <Cards use="RecentPatients" />
        </GridListTile>
        <GridListTile style={{ height: "max-content" }}>
          <Cards use="RecentPatients" />
        </GridListTile>
      </GridList>
    </Box>
  );
};
export default RecentPatients;
