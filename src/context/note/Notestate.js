import { useState } from "react";
import Notecontext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //get all notes
  const getNotes = async () => {
    //API call

    const response = await fetch(
      `https://inotebookbackendserver.herokuapp.com/api/note/fetchallnotes`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json()
    setNotes(json)
  };
  //add notes
  const addNote = async (title, description, tag) => {
    //TODO: APICALL
    //API call

    const response = await fetch(
      `https://inotebookbackendserver.herokuapp.com/api/note/addnote`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, tag }),
      }
    );
    // const json = await response.json();

    const note = [
      {
        _id: "61bb1fda0d415dd43570d4f",
        user: "619f429c0f56a9dfd2bb054a",
        title: title,
        description: description,
        tag: tag,
        date: "2021-12-16T11:15:38.227Z",
        __v: 0,
      },
    ];
    setNotes(notes.concat(note));
  };
  //deletenotes
  const deleteNote = async (id) => {
    //API CALL
    const response = await fetch(
      `https://inotebookbackendserver.herokuapp.com/api/note/deletenote/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    console.log(json);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };
  //edit notes
  const editNote = async (id, title, description, tag) => {
    //API call

    const response = await fetch(
      `https://inotebookbackendserver.herokuapp.com/api/note/updatenote/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, tag }),
      }
    );
    const json = response.json();
    //Logic to edit
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <Notecontext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </Notecontext.Provider>
  );
};

export default NoteState;
