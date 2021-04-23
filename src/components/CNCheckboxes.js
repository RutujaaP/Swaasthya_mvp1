import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";

export default function Checkboxes() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Typography variant="h6" color="primary">
        Patient symptoms
      </Typography>
      <Grid container direction="row">
        <Grid item xs={6} container direction="column" justify="space-evenly">
          <Box>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <Typography variant="p1" color="textSecondary">
              Cough
            </Typography>
          </Box>
          <Box>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <Typography variant="p1" color="textSecondary">
              Headache
            </Typography>
          </Box>
          <Box>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <Typography variant="p1" color="textSecondary">
              Blurred Vision
            </Typography>
          </Box>
          <Box>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <Typography variant="p1" color="textSecondary">
              Throat pain
            </Typography>
          </Box>
          <Box>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <Typography variant="p1" color="textSecondary">
              Tired
            </Typography>
          </Box>
          <Box>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <Typography variant="p1" color="textSecondary">
              Dizzy
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} container direction="column" justify="space-evenly">
          <Box>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <Typography variant="p1" color="textSecondary">
              Cold
            </Typography>
          </Box>
          <Box>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <Typography variant="p1" color="textSecondary">
              Short of Breath
            </Typography>
          </Box>
          <Box>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <Typography variant="p1" color="textSecondary">
              Body Pains
            </Typography>
          </Box>
          <Box>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <Typography variant="p1" color="textSecondary">
              Tooth ache
            </Typography>
          </Box>
          <Box>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <Typography variant="p1" color="textSecondary">
              Ear ache
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {/* </Box> */}
    </div>
  );
}
