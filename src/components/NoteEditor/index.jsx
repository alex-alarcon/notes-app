import React from 'react';
import { PropTypes } from 'prop-types';

import './index.css';

function NoteEditor({ note, handleChange }) {
  return (
    <div className="NoteEditor">
      <textarea
        placeholder="What do you want to write?"
        rows={5}
        className="NoteEditor__input"
        value={note.body}
        onChange={handleChange}
      />
    </div>
  );
}

NoteEditor.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    body: PropTypes.string
  }),
  handleChange: PropTypes.func
};

NoteEditor.defaultProps = {
  note: {
    id: +new Date(),
    body: ''
  },
  handleChange() {}
};

export default NoteEditor;
