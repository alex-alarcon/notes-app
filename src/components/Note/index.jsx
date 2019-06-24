import React from 'react';
import { PropTypes } from 'prop-types';

import './index.css';

function Note({ note }) {
  return (
    <div className="Note">
      <div className="Note__Header" />
      <pre className="Note__Body">{note.body}</pre>
    </div>
  );
}

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    body: PropTypes.string
  }).isRequired
};

export default Note;
