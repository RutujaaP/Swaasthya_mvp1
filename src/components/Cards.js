import {
  Box,
  Card,
  CardActionArea,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "../extras/helper";
import ClinicalNotes from "../screens/ClinicalNotes";

const Cards = ({ use }) => {
  let theme = useTheme();
  const classes = useStyles(theme);
  return (
    <>
      {use === "RecentPatients" && (
        <Card
          style={{
            backgroundColor: "#fff",
            // margin: "1vh 1vw",
            // padding: "1vh 1vw",
          }}
        >
          <CardActionArea
            onClick={() =>
              ReactDOM.render(
                <ClinicalNotes />,
                document.getElementById("root")
              )
            }
            style={{
              // backgroundColor: "#fff",
              margin: "1vh 1vw",
              padding: "1vh 1vw",
            }}
          >
            <Grid container direction="column">
              <Grid item xs={10}>
                <Typography>Patient Name</Typography>
                <Typography variant="body2">Patient Issue/ Problem</Typography>
                <Box style={{ display: "flex", flexDirection: "row" }}>
                  <Typography variant="caption">
                    Online 09:45 AM 10/03/2020 {"  "}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          </CardActionArea>
        </Card>
      )}
      {use === "SharedCards" && (
        <Card
          style={{
            backgroundColor: "#fff",
            margin: "1vh 1vw",
            // padding: "1vh 1vw",
            width: "15vw",
            aspectRatio: "1",
          }}
        >
          <CardActionArea style={{ height: "100%" }}>
            <Grid
              container
              direction="column"
              justify="space-evenly"
              alignItems="center"
              style={{ height: "100%" }}
            >
              <Grid item>
                <Typography>Patient Name </Typography>
              </Grid>
              <Grid item>
                <Typography>Patient Name </Typography>
              </Grid>
              <Grid item>
                <Typography>Patient Name </Typography>
              </Grid>
              <Grid item>
                <Button size="small">View Shared Document </Button>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      )}
    </>
  );
};
export default Cards;
