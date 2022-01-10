import { AlertTitle } from "@mui/material";
import Alert from "@mui/material/Alert";

const Alerts = ({ title, message }) => {
  return (
    <Alert onClose={() => {}} severity="success">
      <AlertTitle>{title}</AlertTitle>
      {message}{" "}
    </Alert>
  );
};

export default Alerts;
