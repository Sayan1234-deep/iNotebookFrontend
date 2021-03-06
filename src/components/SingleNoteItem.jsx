import {  Card, CardActions, CardContent, Typography } from "@mui/material"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
  import { useContext} from "react";
import noteContext from "../context/note/noteContext";

  const SingleNoteItem = ({title, description, tag,_id}) => {

    const context = useContext(noteContext);
  const {  deleteNote } = context;

    return (
      <Card elevation={7} sx={{ mt: "28px", marginRight:'15px' }}>
        <CardContent>
          <Typography sx={{ margin: "20px 4px" }} variant="h5" component="div">
            {title}
          </Typography>

          <Typography sx={{ margin: "10px 4px" }} variant="body2">
            {description}
          </Typography>

          <Typography sx={{ mt: 2 }} color="text.secondary">
            {tag}
          </Typography>
        </CardContent>

        <CardActions>
          <DeleteOutlineIcon onClick={()=>{deleteNote(_id)}} style={{ cursor: "pointer", fontSize: "28px", marginRight:'15px' }} />
          {/* <EditIcon onClick={openModal} style={{ cursor: "pointer", fontSize: "28px", marginRight:'15px' }} /> */}
        </CardActions>
      </Card>
    );
}

export default SingleNoteItem
