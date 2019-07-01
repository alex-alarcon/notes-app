import { PropTypes } from 'prop-types';
import React, { useCallback, useContext } from 'react';

import { NotesContext } from '../../store/notesContext';

import Button from '../Button';

const dateConfig = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
};

function Note({ note, onEdit }) {
  const { removeNote } = useContext(NotesContext);
  const handleRemoveNote = useCallback(() => {
    removeNote(note.id);
  }, [note.id, removeNote]);

  const noteClasses = `w-full p-4 rounded shadow-md ${note.color}`;

  return (
    <div className={noteClasses}>
      <div className="flex justify-between border-b border-gray-300 pb-2 mb-2">
        <div>
          <p className="text-xxs uppercase font-medium">created at:</p>
          <p className="text-xs uppercase">
            {note.createdAt.toLocaleDateString('es-CO', dateConfig)}
          </p>
        </div>

        <div>
          <p className="text-xxs uppercase font-medium">updated at:</p>
          <p className="text-xs uppercase">
            {note.updatedAt.toLocaleDateString('es-CO', dateConfig)}
          </p>
        </div>
      </div>
      <pre className="Note__Body">{note.body}</pre>
      <div className="flex justify-end">
        <Button
          className="text-sm mr-2 hover:bg-red-200 rounded"
          onClick={handleRemoveNote}
        >
          Remove
        </Button>
        <Button
          className="bg-gray-300 hover:bg-gray-400 shadow rounded"
          onClick={onEdit}
        >
          Edit
        </Button>
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
