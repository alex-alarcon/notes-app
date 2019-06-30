import React, { useCallback, useContext, useState } from 'react';
import Modal from 'react-modal';

import './index.css';

import { NoteContext } from '../../store/noteContext';
import { NotesContext } from '../../store/notesContext';

import NoteEditor from '../../components/NoteEditor';
import IconButton from '../../components/IconButton';

function ModalNoteEditor() {
  const { addNote, editNote } = useContext(NotesContext);
  const { note, updateNote, resetNote } = useContext(NoteContext);
  const [showModal, setShowModal] = useState(false);
  const handleClose = useCallback(() => setShowModal(false), []);
  const handleOpen = useCallback(() => setShowModal(true), []);
  const handleTextChange = useCallback(
    event => updateNote({ ...note, body: event.target.value }),
    [note, updateNote]
  );
  const handleRadioChange = useCallback(
    event =>
      updateNote({
        ...note,
        color: event.target.value
      }),
    [note, updateNote]
  );
  const handleSave = useCallback(() => {
    if (note.id) {
      editNote(note);
    } else {
      const newNote = { ...note, id: +new Date() };
      addNote(newNote);
    }
    resetNote();
    setShowModal(false);
  }, [addNote, editNote, note, resetNote]);

  return (
    <React.Fragment>
      <Modal
        isOpen={showModal}
        onRequestClose={handleClose}
        shouldCloseOnOverlayClick
        closeTimeoutMS={500}
        style={{
          content: {
            backgroundColor: 'transparent',
            border: 'none',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            padding: 0,
            width: '100vw',
            height: '100vh'
          }
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <IconButton
              iconName="fa-times-circle"
              disabled={false}
              onClick={handleClose}
            />
            <NoteEditor
              note={note}
              onTextChange={handleTextChange}
              onRadioChange={handleRadioChange}
              onSave={handleSave}
            />
          </div>
        </div>
      </Modal>

      <IconButton
        iconName="fa-plus-circle"
        disabled={false}
        onClick={handleOpen}
      />
    </React.Fragment>
  );
}

export default ModalNoteEditor;
