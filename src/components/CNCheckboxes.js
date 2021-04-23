import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

export default function Checkboxes() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div style={{ cols: 2 }}>
      <Typography variant="h6" color="primary">
        Patient symptoms
      </Typography>
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <Typography variant="p1" color="textSecondary">
        Cough
      </Typography>
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <Typography variant="p1" color="textSecondary">
        Headache
      </Typography>
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <Typography variant="p1" color="textSecondary">
        Blurred Vision
      </Typography>
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <Typography variant="p1" color="textSecondary">
        Throat pain
      </Typography>
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <Typography variant="p1" color="textSecondary">
        Tired
      </Typography>
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <Typography variant="p1" color="textSecondary">
        Dizzy
      </Typography>
      //NEW COLUMN
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <Typography variant="p1" color="textSecondary">
        Cold
      </Typography>
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <Typography variant="p1" color="textSecondary">
        Short of Breath
      </Typography>
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <Typography variant="p1" color="textSecondary">
        Body Pains
      </Typography>
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <Typography variant="p1" color="textSecondary">
        Tooth ache
      </Typography>
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <Typography variant="p1" color="textSecondary">
        Ear ache
      </Typography>
    </div>
  );
}
