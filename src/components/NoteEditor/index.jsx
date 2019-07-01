/* eslint-disable react/no-danger */
import marked from 'marked';
import { PropTypes } from 'prop-types';
import React, { useEffect, useRef } from 'react';

import './index.css';

import Button from '../Button';
import RadioButton from '../Radio';

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
  onPreview,
  onCancel
}) {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [preview]);

  const noteEditorClasses = `w-3/5 max-w-xl mx-auto p-4 rounded shadow-md ${note.color} pointer-events-auto`;

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
          className="w-full bg-transparent resize-none outline-none"
          value={note.body}
          onChange={onTextChange}
          ref={inputRef}
        />
      )}

      <div className="border-t border-b border-gray-500 items-center flex py-2 mt-4">
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
      <div className="flex justify-between my-2">
        <div>
          <Button onClick={onCancel}>Cancel</Button>
        </div>
        <div>
          <Button onClick={onPreview} className="mr-2">
            Preview
          </Button>
          <Button
            onClick={onSave}
            disabled={note.body.trim() === ''}
            className="rounded px-4 bg-gray-alpha hover:bg-gray-500"
          >
            Save
          </Button>
        </div>
      </div>
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
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

NoteEditor.defaultProps = {
  note: {
    id: +new Date(),
    body: '',
    color: COLORS.YELLOW
  }
};

export default NoteEditor;
