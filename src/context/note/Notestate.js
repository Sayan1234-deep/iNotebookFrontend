import { useState } from "react";
import Notecontext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //get all notes
  const getNotes = async () => {
    //API call

    const response = await fetch(`/api/note/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      "auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkYmRkNzhhN2M2NGRjNWI3MjhjZTI0In0sImlhdCI6MTY0MTc5OTA0N30.c3m2q8HzgbSfzhB_JZ7Z4nQolw_0sNs6MiHwlaq7WTg"},
    });
    const json = await response.json()
    setNotes(json)
  };
  //add notes
  const addNote = async (title, description, tag) => {
    //TODO: APICALL
    //API call

    const response = await fetch(`/api/note/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      "auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkYmRkNzhhN2M2NGRjNWI3MjhjZTI0In0sImlhdCI6MTY0MTc5OTA0N30.c3m2q8HzgbSfzhB_JZ7Z4nQolw_0sNs6MiHwlaq7WTg",
      },
      body: JSON.stringify({ title, description, tag }),
    });
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
    const response = await fetch(`/api/note/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkYmRkNzhhN2M2NGRjNWI3MjhjZTI0In0sImlhdCI6MTY0MTc5OTA0N30.c3m2q8HzgbSfzhB_JZ7Z4nQolw_0sNs6MiHwlaq7WTg",
      },
    });
    const json = await response.json();
    console.log(json);
    console.log("deleteing the note with id", id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };
  //edit notes
  const editNote = async (id, title, description, tag) => {
    //API call

    const response = await fetch(`/api/note/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkYmRkNzhhN2M2NGRjNWI3MjhjZTI0In0sImlhdCI6MTY0MTc5OTA0N30.c3m2q8HzgbSfzhB_JZ7Z4nQolw_0sNs6MiHwlaq7WTg",
      },
      body: JSON.stringify({ title, description, tag }),
    });
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
