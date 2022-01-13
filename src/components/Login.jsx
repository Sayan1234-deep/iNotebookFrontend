import TextField from "@mui/material/TextField";
import { Paper, Box, Alert } from "@mui/material";
import "@fontsource/roboto/400.css";
import LoginIcon from "@mui/icons-material/Login";
import Button from "@mui/material/Button";
import {  useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
      
  const handleSubmit = async () => {
    if (!email || !password) {
      return (
        <Alert severity="warning" color="info">
          hy
        </Alert>
      );
    }

    const response = await fetch(
      "https://inotebookbackendserver.herokuapp.com/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      history.push("/");
      alert("Successfully Logged in!");
      window.location.reload();
    }
  };
  return (
    <Box>
      <Paper
        style={{
          padding: "20px 20px",
          width: window.innerWidth<="360"?"80%":'400px',
          margin: "20px auto",
          textAlign: "center",
          overflowX: "hidden",
        }}
        elevation={10}
      >
        <LoginIcon sx={{ margin: "0px auto", fontSize: "50px" }}></LoginIcon>
        <h1>Login</h1>

        <TextField
          sx={{ width: "80%", marginTop: "24px" }}
          type={"email"}
          variant="outlined"
          required
          label="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <TextField
          sx={{ width: "80%", marginTop: "24px" }}
          type={"password"}
          variant="outlined"
          required
          label="Your Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          name="password"
        />
        <br />

        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          sx={{ marginTop: "30px" }}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
