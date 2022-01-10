import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));
const Navbar = () => {
  const classes = useStyles();
  return (
      <>
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
      
      </Toolbar>
    </AppBar>
    </>
  );
};

export default Navbar;
