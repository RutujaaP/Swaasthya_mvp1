import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
  toolbar: {
    minHeight: "4vh",
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
}));

export default function CNAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h5" noWrap>
            Swaasthya
          </Typography>
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        className={classes.field}
      >
        <Button color="primary" variant="contained" size="small">
          Go Back
        </Button>
        <Typography variant="h5" align="center" style={{ marginLeft: "38%" }}>
          Clinical Note
        </Typography>
      </Box>

      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className={classes.field}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar src="/id.png"></Avatar>
          <Typography style={{ marginLeft: "5%" }}>Health ID</Typography>
        </Box>
        <Button
          //className={classes.btn}  //adding properties listed in btn class to this button
          className={classes.field}
          type="submit"
          color="primary"
          variant="contained"
        >
          View Previous Records
        </Button>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={2}>
          <Button
            className={classes.field}
            type="submit"
            color="primary"
            variant="outlined"
          >
            Patient Information
          </Button>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Button
            className={classes.field}
            type="submit"
            color="primary"
            variant="outlined"
          >
            Patient Complaint
          </Button>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Button
            className={classes.field}
            type="submit"
            color="primary"
            variant="outlined"
          >
            Patient Symptoms
          </Button>
        </Grid>

        <Grid item xs={6} sm={2}>
          <Button
            className={classes.field}
            type="submit"
            color="primary"
            variant="outlined"
          >
            Prescription
          </Button>
        </Grid>

        <Grid item xs={6} sm={2}>
          <Button
            className={classes.field}
            type="submit"
            color="primary"
            variant="outlined"
          >
            Doctor Notes
          </Button>
        </Grid>

        <Grid item xs={6} sm={2}>
          <Button
            className={classes.field}
            type="submit"
            color="primary"
            variant="outlined"
          >
            Payment Method
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
