import Modal from 'react-modal';
import React, { useContext } from 'react';

import './index.css';

import ModalNoteEditor from '../ModalNoteEditor';
import NoteList from '../../components/NoteList';

Modal.setAppElement('#root');

function App() {
  return (
    <div className="App">
      <ModalNoteEditor />
      <NoteList />
    </div>
  );
}

export default App;
