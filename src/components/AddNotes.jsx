import {
  Box,
  Button,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import "@fontsource/roboto/400.css";
import { useContext, useState } from "react";
import noteContext from "../context/note/noteContext";

const AddNotes = () => {
  const [note, setNote] = useState({title:'', description:'', tag:''})

    const context = useContext(noteContext);

    const {addNote } = context;

    const onChange = (e)=>{
      setNote({...note,[e.target.name]:e.target.value})
    }

    const handleClick=(e)=>{
      e.preventDefault()
      addNote(note.title, note.description, note.tag)
      setNote({ title: "", description: "", tag: "" });
    }

  return (
    <Box>
      <Paper
        elevation={6}
        sx={{ width: "80%", margin: "40px auto", padding: "20px" }}
      >
        <Typography sx={{ textAlign: "center", margin: "10px" }} variant="h4">
          Add a note
        </Typography>
        <hr />
        <InputLabel style={{ margin: "20px 10px 10px 0px" }}>
          Note title
        </InputLabel>
        <TextField
        required
        
          value={note.title}
          onChange={onChange}
          name="title"
          label="Title"
          fullWidth
          variant="outlined"
        />

        <InputLabel style={{ margin: "20px 10px 10px 0px" }}>
          Note description
        </InputLabel>
        <TextField
        required
        
          value={note.description}
          onChange={onChange}
          name="description"
          multiline
          rows={6}
          label="Description"
          fullWidth
          variant="outlined"
        />

        <InputLabel style={{ margin: "20px 10px 10px 0px" }}>
          Note Tag
        </InputLabel>
        <TextField
        required
        
          value={note.tag}
          onChange={onChange}
          name="tag"
          label="Tag"
          fullWidth
          variant="outlined"
        />

        <Button
        disabled={note.title.length<5||note.description.length<5||note.tag.length<5}
          onClick={handleClick}
          sx={{ margin: "30px auto", width: "100%" }}
          variant="contained"
        >
          Add Note
        </Button>
      </Paper>
    </Box>
  );
};

export default AddNotes;
