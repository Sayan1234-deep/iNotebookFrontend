import { Box, Grid, Paper, Typography } from "@mui/material"
import SingleNoteItem from "./SingleNoteItem";
import { useContext, useEffect } from "react";
import noteContext from '../context/note/noteContext'

const ShowNotes = () => {

  const context = useContext(noteContext)

  const {notes,getNotes} = context;
  useEffect(() => {

    getNotes()
  }, [])
    return (
      <Box>
        <Paper
          sx={{ width: "80%", margin: "40px auto", padding: "20px" }}
          elevation={6}
        >
          <Typography sx={{ textAlign: "center", margin: "10px" }} variant="h4">
            Your notes are here
          </Typography>
          <hr />

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 12, md: 12 }} 
          >
           {
             notes.map((index)=>{
               return (
                 <Grid item xs={2} sm={4} md={4} key={index._id}>
                   <SingleNoteItem
                     title={index.title}
                     description={index.description}
                     tag={index.tag}
                     _id={index._id}
                   />
                 </Grid>
               );
             })
           }
          </Grid>
        </Paper>
      </Box>
    );
}

export default ShowNotes
