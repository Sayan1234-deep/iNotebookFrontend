import { BrowserRouter as Router, Route, Switch,Link,useHistory } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import HomePage from './Pages/HomePage'
import NoteState from './context/note/Notestate';
import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import GetUser from "./components/GetUser";
import About from "./components/About";


function App() {
  const history = useHistory();

  const [alert, setAlert] = useState(null)
const logOut = ()=>{
  localStorage.removeItem('token')
       window.location.reload();

      history.push("/login");


}
  return (
    <>
      <NoteState>
        <Router>
          <Box sx={{ flexGrow: 1, maxWidth: "100%" }}>
            <AppBar
              elevation={7}
              style={{ backgroundColor: "#212121" }}
              position="static"
            >
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={"/"}
                  >
                    iNoteBook
                  </Link>
                </Typography>
                {localStorage.getItem("token") ? (
                  <>
                    <GetUser />
                    <Button
                      style={{ marginLeft: "20px" }}
                      onClick={logOut}
                      color="inherit"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button component={Link} to="/login" color="inherit">
                      Login
                    </Button>
                    <Button component={Link} to="/signup" color="inherit">
                      Sign up
                    </Button>
                  </>
                )}
              </Toolbar>
            </AppBar>
          </Box>
          <div className="App">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/Login">
                <Login />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
