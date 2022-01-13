import { useEffect, useState } from "react";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { Avatar } from "@mui/material";

const About =  () => {
    const [name, setname] = useState("");
    const [email, setEmail] = useState("")

  const profile = async () => {
    const response = await fetch(
      `https://inotebookbackendserver.herokuapp.com/api/auth/getuser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    setname(json.name)
    setEmail(json.email)
    console.log(name);
    console.log(email);
  };

useEffect(() => {
  profile()
}, []);
return (
  <PopupState variant="popover" popupId="demo-popup-popover">
    {(popupState) => (
      <div>
        <Avatar variant="contained" {...bindTrigger(popupState)}>
          o
        </Avatar>
        <Popover
          {...bindPopover(popupState)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "bottom",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "bottom",
          }}
        >
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Popover>
      </div>
    )}
  </PopupState>
);

}

export default About;
