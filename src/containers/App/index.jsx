import React, { useContext } from 'react';

import './index.css';

import { NoteContext } from '../../store/noteContext';
import { NotesContext } from '../../store/notesContext';

import NoteList from '../../components/NoteList';
import NoteEditor from '../../components/NoteEditor';

function App() {
  const {
    state: { notes },
    addNote,
    editNote
  } = useContext(NotesContext);
  const { note, updateNote, resetNote } = useContext(NoteContext);

  return (
    <div className="App">
      <NoteEditor
        note={note}
        handleTextChange={event =>
          updateNote({ ...note, body: event.target.value })
        }
        handleRadioChange={event =>
          updateNote({
            ...note,
            color: event.target.value
          })
        }
        handleSave={() => {
          if (note.id) {
            editNote(note);
          } else {
            const newNote = { ...note, id: +new Date() };
            addNote(newNote);
          }
          resetNote();
        }}
      />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
