import React from 'react';
import { PropTypes } from 'prop-types';

import Note from '../Note';

function NoteList({ notes }) {
  const notesList = notes.length ? (
    notes.map(note => <Note note={note} key={note.id} />)
  ) : (
    <p>There are not notes </p>
  );
  return <div className="NoteList">{notesList}</div>;
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      body: PropTypes.string
    })
  ).isRequired
};
export default NoteList;
