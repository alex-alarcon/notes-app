import React, { useContext } from 'react';

import './index.css';

import { NoteContext } from '../../store/noteContext';
import { NotesContext } from '../../store/notesContext';

import Note from '../Note';

function NoteList() {
  const { showNote } = useContext(NoteContext);
  const {
    state: { notes }
  } = useContext(NotesContext);

  if (notes.length) {
    return (
      <div className="NoteList">
        {notes.map(note => (
          <Note note={note} key={note.id} onEdit={() => showNote(note)} />
        ))}
      </div>
    );
  }

  return <p>There are not notes </p>;
}

export default NoteList;
