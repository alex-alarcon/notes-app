import { PropTypes } from 'prop-types';
import React, { useCallback, useContext } from 'react';

import { NotesContext } from '../../store/notesContext';

import IconButton from '../IconButton';

const dateConfig = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

function Note({ note, onEdit }) {
  const { removeNote } = useContext(NotesContext);
  const handleRemoveNote = useCallback(() => {
    removeNote(note.id);
  }, [note.id, removeNote]);

  const noteClasses = `Note bg-${note.color}`;

  return (
    <div className={noteClasses}>
      <div className="Note__Header">
        <IconButton iconName="fa-edit" onClick={onEdit} />
        <IconButton iconName="fa-trash" onClick={handleRemoveNote} />
      </div>
      <pre className="Note__Body">{note.body}</pre>
      <div className="Note__Footer">
        <span>
          created at:
          {note.createdAt.toLocaleDateString('es-CO', dateConfig)}
        </span>
        {' - '}
        <span>
          updated at:
          {note.updatedAt.toLocaleDateString('es-CO', dateConfig)}
        </span>
      </div>
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
