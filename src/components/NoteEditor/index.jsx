import React from 'react';
import { PropTypes } from 'prop-types';

import './index.css';

import RadioButton from '../Radio';

import BGCOLORS from '../../constants/backgroundColors';

function NoteEditor({ note, handleTextChange, handleRadioChange }) {
  const noteEditorClasses = `NoteEditor bg-${note.color}`;
  return (
    <div className={noteEditorClasses}>
      <textarea
        placeholder="What do you want to write?"
        rows={5}
        className="NoteEditor__Input"
        value={note.body}
        onChange={handleTextChange}
      />
      <div className="Radio__Container">
        {Object.keys(BGCOLORS).map(color => {
          const id = `radio-${BGCOLORS[color]}`;
          return (
            <RadioButton
              id={id}
              value={BGCOLORS[color]}
              checked={note.color === BGCOLORS[color]}
              handleChange={handleRadioChange}
              key={id}
            />
          );
        })}
      </div>
    </div>
  );
}

NoteEditor.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    body: PropTypes.string
  }),
  handleTextChange: PropTypes.func,
  handleRadioChange: PropTypes.func
};

NoteEditor.defaultProps = {
  note: {
    id: +new Date(),
    body: ''
  },
  handleTextChange() {},
  handleRadioChange() {}
};

export default NoteEditor;
