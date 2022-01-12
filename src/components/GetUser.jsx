import { useEffect, useState } from "react";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { Avatar } from "@mui/material";

const GetUser = () => {
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");


  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const getUser = async () => {
    const response = await fetch(`/api/auth/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setName(json.name);
    setEmail(json.email);
    console.log(name);
    console.log(email);
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <>
          <Avatar
            {...bindTrigger(popupState)}
            sx={{
              bgcolor: getRandomColor(),
              cursor: "pointer",
              width: 45,
              height: 45,
            }}
          >
            {name.charAt(0)}
          </Avatar>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <div style={{marginBottom:'16px'}}>
              <Typography
                variant="h6"
                sx={{
                  paddingLeft: "20px",
                  paddingRight: "15px",
                  margin: "16px",
                }}
              >
                Name: {name}
              </Typography>

              <Typography
                variant="caption"
                sx={{
                  paddingLeft: "20px",
                  paddingRight: "15px",
                  marginBottom: "16px",
                }}
              >
                Email: {email}
              </Typography>
            </div>
          </Popover>
        </>
      )}
    </PopupState>
  );
};

export default GetUser;


