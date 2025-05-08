import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import { marked } from "marked";
import "./NoteApp.css";
const NoteApp = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    setNotes((prev) => [...prev, ""]);
  };

  const updateNote = (index, newText) => {
    const updated = [...notes];
    //把指定 index 的那一筆便條文字更新成新的文字
    updated[index] = newText;
    setNotes(updated);
  };

  const deleteNote = (index) => {
    const updated = [...notes];
    updated.splice(index, 1);
    setNotes(updated);
  };

  return (
    <div className="note-app">
      <button className="add" onClick={addNote}>
        <FontAwesomeIcon icon={faPlus} /> Add note
      </button>
      <div className="notes">
        {notes.map((note, index) => (
          <Note
            key={index}
            text={note}
            onChange={(newText) => updateNote(index, newText)}
            onDelete={() => deleteNote(index)}
          />
        ))}
      </div>
    </div>
  );
};

const Note = ({ text, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(!text);

  return (
    <div className="note">
      <div className="tools">
        <button onClick={() => setIsEditing(!isEditing)}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button onClick={onDelete}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>

      {isEditing ? (
        <textarea
          value={text}
          onChange={(e) => onChange(e.target.value)}
        ></textarea>
      ) : (
        <div
          className="main"
          dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
        />
      )}
    </div>
  );
};

export default NoteApp;
