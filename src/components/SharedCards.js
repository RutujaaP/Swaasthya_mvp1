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
// import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import PersonIcon from "@material-ui/icons/Person";
import { useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import { useStyles } from "../extras/helper";
import logo from "../logoDark.svg";
import DashboardIcon from "../extras/DashboardIcon.svg";
import Cards from "./Cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SharedCards = () => {
  let theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Box style={{ backgroundColor: "#Fff", height: "40vh" }}>
      <h1 style={{ paddingLeft: "1vw" }}>Shared Cards</h1>
      {/* <Carousel */}
      <Slider
        dots={true}
        infinite={true}
        slidesToShow={3}
        slidesToScroll={3}
        arrows={true}
      >
        <Cards use="SharedCards" />
        <Cards use="SharedCards" />
        <Cards use="SharedCards" />
        <Cards use="SharedCards" />
        <Cards use="SharedCards" />
        <Cards use="SharedCards" />
      </Slider>
      {/* <Cards use="SharedCards" />
        <Cards use="SharedCards" /> */}
    </Box>
  );
};
export default SharedCards;
