import React from 'react';
import { PropTypes } from 'prop-types';

import './index.css';

import RadioButton from '../Radio';
import IconButton from '../IconButton';

import COLORS from '../../constants/colors';

function NoteEditor({ note, onTextChange, onRadioChange, onSave }) {
  const noteEditorClasses = `NoteEditor bg-${note.color}`;
  return (
    <div className={noteEditorClasses}>
      <textarea
        placeholder="What do you want to write?"
        rows={5}
        className="NoteEditor__Input"
        value={note.body}
        onChange={onTextChange}
      />
      <div className="Radio__Container">
        {Object.keys(COLORS).map(color => {
          const id = `radio-${COLORS[color]}`;
          return (
            <RadioButton
              id={id}
              value={COLORS[color]}
              checked={note.color === COLORS[color]}
              onChange={onRadioChange}
              key={id}
            />
          );
        })}
      </div>
      <IconButton
        iconName="fa-plus-circle"
        onClick={onSave}
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
  onTextChange: PropTypes.func,
  onRadioChange: PropTypes.func,
  onSave: PropTypes.func
};

NoteEditor.defaultProps = {
  note: {
    id: +new Date(),
    body: '',
    color: COLORS.YELLOW
  },
  onTextChange() {},
  onRadioChange() {},
  onSave() {}
};

export default NoteEditor;
