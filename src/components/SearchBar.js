import { Autocomplete } from "@material-ui/lab";
import { TextField, InputAdornment, Button, useTheme } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "../extras/helper.js";

const SearchBar = ({ w }) => {
  let theme = useTheme();
  let classes = useStyles(theme);
  return (
    <TextField
      placeholder="Enter Patient Health ID"
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment>
            <Button size="small">
              <SearchIcon />
            </Button>
          </InputAdornment>
        ),
        style: { minWidth: "5%", height: "5vh", alignItems: "center" },
      }}
      className={classes.textField}
      style={{
        width: w,
        borderRadius: "25vw",
        height: "5vh",
        padding: "1vh 1vw",
      }}
    />
  );
};
export default SearchBar;
