import React, { useContext, useState } from 'react';

import './index.css';

import { NotesContext } from '../../store/notesContext';

import COLORS from '../../constants/colors';

import NoteList from '../../components/NoteList';
import NoteEditor from '../../components/NoteEditor';

const initialState = { body: '', color: COLORS.YELLOW };

function App() {
  const {
    state: { notes },
    addNote,
    editNote
  } = useContext(NotesContext);
  const [note, setNote] = useState(initialState);
  return (
    <div className="App">
      <NoteEditor
        note={note}
        handleTextChange={event =>
          setNote({ ...note, body: event.target.value })
        }
        handleRadioChange={event =>
          setNote({
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
            setNote(initialState);
          }
        }}
      />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
