import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import SingleNoteItem from "./SingleNoteItem";
import { useContext, useEffect, useState } from "react";
import noteContext from "../context/note/noteContext";
import Modal from "@mui/material/Modal";
import {useHistory} from 'react-router-dom'

const ShowNotes = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const history = useHistory()

  const [eNote, setEnote] = useState({
    id: "",
    eTitle: "",
    eDescription: "",
    eTag: "",
  });

  const { eTitle, eDescription, eTag } = eNote;
  const context = useContext(noteContext);

  const { notes, getNotes } = context;
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      history.push('/login')
    }else{
      getNotes()
    }
  }, []);

  const onChange = (e) => {
    setEnote({ ...eNote, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  const updateNote = (currentnote) => {
    setEnote({
      eTitle: currentnote.title,
      eDescription: currentnote.eDescription,
      eTag: currentnote.eTag,
    });
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            textAlign={"center"}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Edit Note
          </Typography>
          <TextField
            onChange={onChange}
            variant="outlined"
            name="eTitle"
            fullWidth
            value={eTitle}
            sx={{ margin: "20px 10px" }}
            label="Title"
          />
          <TextField
            onChange={onChange}
            variant="outlined"
            name="eDescription"
            value={eDescription}
            fullWidth
            sx={{ margin: "20px 10px" }}
            label="Description"
          />
          <TextField
            onChange={onChange}
            variant="outlined"
            name="eTag"
            value={eTag}
            fullWidth
            sx={{ margin: "20px 10px" }}
            label="Tag"
          />
          <Button
            onClick={handleClick}
            fullWidth
            sx={{ marginLeft: "10px", marginRight: "10px", marginTop: "10px" }}
            variant="contained"
          >
            Update Note
          </Button>
        </Box>
      </Modal>
      <Box>
        <Paper
          sx={{ width: "80%", margin: "40px auto", padding: "20px" }}
          elevation={6}
        >
          <Typography sx={{ textAlign: "center", margin: "10px" }} variant="h4">
            Your notes are here
          </Typography>
          <hr />

          {notes.length === 0 && (
            <Typography
              sx={{ margin: "30px 30px", padding: "20px" }}
              variant="h5"
            >
              No Notes To Display!
            </Typography>
          )}
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 12, md: 12 }}
          >
            {notes.map((index) => {
              return (
                <Grid item xs={2} sm={4} md={4} key={index._id}>
                  <SingleNoteItem
                    openModal={handleOpen}
                    updateNote={updateNote}
                    title={index.title}
                    description={index.description}
                    tag={index.tag}
                    _id={index._id}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default ShowNotes;
