import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';

import './index.css';

import { NoteContext } from '../../store/noteContext';

import Note from '../Note';

function NoteList({ notes }) {
  const { showNote } = useContext(NoteContext);
  const notesList = notes.length ? (
    notes.map(note => (
      <Note note={note} key={note.id} onEdit={() => showNote(note)} />
    ))
  ) : (
    <p>There are not notes </p>
  );
  return <div className="NoteList">{notesList}</div>;
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      body: PropTypes.string,
      color: PropTypes.string
    })
  ).isRequired
};
export default NoteList;
