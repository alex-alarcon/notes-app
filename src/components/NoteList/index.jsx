import React, { useContext } from 'react';

import './index.css';

import { NoteContext } from '../../store/noteContext';
import { NotesContext } from '../../store/notesContext';

import Note from '../Note';
import Button from '../Button';

function NoteList() {
  const { showNote, addNote } = useContext(NoteContext);
  const {
    state: { notes }
  } = useContext(NotesContext);

  let noteList = <p>There are not notes </p>;

  if (notes.length) {
    noteList = notes.map(note => (
      <Note note={note} key={note.id} onEdit={() => showNote(note)} />
    ));
  }

  return (
    <div className="flex flex-col m-4">
      <div className="flex justify-between items-center">
        <h2 className="font-medium">Notes</h2>
        <Button
          className="bg-teal-300 hover:bg-teal-400 text-white text-sm font-medium rounded-lg shadow"
          onClick={addNote}
        >
          Add Note
        </Button>
      </div>
      <div className="NoteList">{noteList}</div>
    </div>
  );
}

export default NoteList;
