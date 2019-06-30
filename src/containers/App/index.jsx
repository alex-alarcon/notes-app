import React, { useContext } from 'react';
import Modal from 'react-modal';

import './index.css';

import { NotesContext } from '../../store/notesContext';

import ModalNoteEditor from '../ModalNoteEditor';
import NoteList from '../../components/NoteList';

Modal.setAppElement('#root');

function App() {
  const {
    state: { notes }
  } = useContext(NotesContext);

  return (
    <div className="App">
      <ModalNoteEditor />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
