import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';

import './index.css';

import { NotesContext } from '../../store/notesContext';

import IconButton from '../IconButton';

function Note({ note, onEdit }) {
  const { removeNote } = useContext(NotesContext);
  const noteClasses = `Note bg-${note.color}`;
  return (
    <div className={noteClasses}>
      <div className="Note__Header">
        <IconButton iconName="fa-edit" onClick={onEdit} disabled={false} />
        <IconButton
          iconName="fa-trash"
          onClick={() => {
            removeNote(note.id);
          }}
          disabled={false}
        />
      </div>
      <pre className="Note__Body">{note.body}</pre>
    </div>
  );
}

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    body: PropTypes.string
  }).isRequired,
  onEdit: PropTypes.func.isRequired
};

export default Note;
