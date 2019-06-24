import React, { useContext, useState } from 'react';

import './index.css';

import { NotesContext } from '../../store/notesContext';

import COLORS from '../../constants/colors';

import NoteList from '../../components/NoteList';
import NoteEditor from '../../components/NoteEditor';

function App() {
  const {
    state: { notes },
    addNote,
    removeNote,
    editNote
  } = useContext(NotesContext);
  const initialState = { body: '', color: COLORS.YELLOW };
  const [state, setState] = useState({
    note: { ...initialState }
  });
  return (
    <div className="App">
      <NoteEditor
        note={state.note}
        handleTextChange={event =>
          setState({ note: { ...state.note, body: event.target.value } })
        }
        handleRadioChange={event =>
          setState({
            note: { ...state.note, color: event.target.value }
          })
        }
        handleSave={() => {
          if (state.note.id) {
            editNote(state.note);
          } else {
            const newNote = { ...state.note, id: +new Date() };
            addNote(newNote);
            state.note = initialState;
          }
        }}
      />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
