import React from 'react';
import marked from 'marked';
import { PropTypes } from 'prop-types';

import './index.css';

import RadioButton from '../Radio';
import IconButton from '../IconButton';

import COLORS from '../../constants/colors';

marked.setOptions({
  sanitize: true
});

function NoteEditor({
  note,
  preview,
  onTextChange,
  onRadioChange,
  onSave,
  onPreview
}) {
  const noteEditorClasses = `NoteEditor bg-${note.color}`;
  return (
    <div className={noteEditorClasses}>
      {preview ? (
        <div
          className="NoteEditor__Preview"
          dangerouslySetInnerHTML={{
            __html: marked(note.body)
          }}
        />
      ) : (
        <textarea
          placeholder="What do you want to write?"
          rows={5}
          className="NoteEditor__Input"
          value={note.body}
          onChange={onTextChange}
        />
      )}

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
      <IconButton iconName="fa-search" onClick={onPreview} />
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
  preview: PropTypes.bool.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onRadioChange: PropTypes.func.isRequired,
  onPreview: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

NoteEditor.defaultProps = {
  note: {
    id: +new Date(),
    body: '',
    color: COLORS.YELLOW
  }
};

export default NoteEditor;
