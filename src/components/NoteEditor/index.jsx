import React from 'react';
import { PropTypes } from 'prop-types';

import './index.css';

import RadioButton from '../Radio';
import IconButton from '../IconButton';

import COLORS from '../../constants/colors';

function NoteEditor({ note, handleTextChange, handleRadioChange, handleSave }) {
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
        {Object.keys(COLORS).map(color => {
          const id = `radio-${COLORS[color]}`;
          return (
            <RadioButton
              id={id}
              value={COLORS[color]}
              checked={note.color === COLORS[color]}
              onChange={handleRadioChange}
              key={id}
            />
          );
        })}
      </div>
      <IconButton
        iconName="fa-plus-circle"
        onClick={handleSave}
        disabled={note.body === ''}
      />
    </div>
  );
}

NoteEditor.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    body: PropTypes.string,
    color: PropTypes.string
  }),
  handleTextChange: PropTypes.func,
  handleRadioChange: PropTypes.func,
  handleSave: PropTypes.func
};

NoteEditor.defaultProps = {
  note: {
    id: +new Date(),
    body: '',
    color: COLORS.YELLOW
  },
  handleTextChange() {},
  handleRadioChange() {},
  handleSave() {}
};

export default NoteEditor;
