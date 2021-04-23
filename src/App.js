import SignUp from "./screens/SignUp.js";
import SignIn from "./screens/SignIn.js";

import "./App.css";
import { getTheme } from "./extras/helper";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Dashboard from "./screens/Dashboard.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const theme = createMuiTheme(getTheme());
  return (
    // <Router>
    <ThemeProvider theme={theme}>
      <SignUp />
    </ThemeProvider>
  );
}

export default App;
