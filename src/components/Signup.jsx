import TextField from "@mui/material/TextField";
import { Grid, Paper, Container, Alert } from "@mui/material";
import "@fontsource/roboto/400.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";


const Signup = ({showAlert}) => {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });
  const onChange = (e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  const signupUser = async () => {
    if (
      !credentials.name ||
      !credentials.email ||
      !credentials.password ||
      !credentials.cPassword
    ) {
      console.log("Pls Fill All the data");
      alert('pls fill all the data')
      return
    }
    const {name, email, password} = credentials
    
    if (credentials.password!==credentials.cPassword) {
      console.log("Password Does Not Match");
      return
    }
    const response = await fetch("/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({name,email,password})
    });
    
        const res = await response.json()
        console.log(res);

        if (res.success) {
          history.push('/login')
          localStorage.setItem('token',res.authtoken)
        }
    
  };
  return (
    <Container fixed>
      <Paper
        style={{
          padding: "20px 20px",
          width: window.innerWidth <= "360" ? "80%" : "400px",
          margin: "20px auto",
          textAlign: "center",
        }}
        elevation={10}
      >
        <AccountBoxIcon
          sx={{ margin: "0px auto", fontSize: "50px" }}
        ></AccountBoxIcon>
        <h1>Sign Up</h1>
        <TextField
          color="primary"
          sx={{ width: window.innerWidth<="360"?"90%":'370px', marginTop: "10px" }}
          type={"text"}
          variant="outlined"
          required
          label="Enter Name"
          value={credentials.name}
          onChange={onChange}
          name="name"
        />
        <TextField
          sx={{ width: window.innerWidth<="360"?"90%":'370px', marginTop: "24px" }}
          type={"email"}
          variant="outlined"
          required
          label="Enter Email"
          value={credentials.email}
          onChange={onChange}
          name="email"
        />
        <TextField
          sx={{ width: window.innerWidth<="360"?"90%":'370px', marginTop: "24px" }}
          type={"password"}
          variant="outlined"
          required
          label="Enter Password"
          value={credentials.password}
          onChange={onChange}
          name="password"
        />

        <TextField
          color="primary"
          sx={{ width: window.innerWidth<="360"?"90%":'370px', marginTop: "24px" }}
          type={"password"}
          variant="outlined"
          required
          label="Confirm Password"
          value={credentials.cPassword}
          onChange={onChange}
          name="cPassword"
        />
        <Button
          onClick={signupUser}
          variant="contained"
          color="primary"
          sx={{ marginTop: "30px" }}
        >
          Sign up
        </Button>
      </Paper>
    </Container>
  );
};

export default Signup;
