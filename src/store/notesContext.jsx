import React, { useCallback, useReducer } from 'react';
import PropTypes from 'prop-types';

const reducer = (state, { type, payload }) => {
  let index;
  switch (type) {
    case 'ADD_NOTE':
      return { ...state, notes: [...state.notes, payload.note] };
    case 'DELETE_NOTE':
      index = state.notes.findIndex(note => note.id === payload.id);
      return {
        ...state,
        notes: [...state.notes.slice(0, index), ...state.notes.slice(index + 1)]
      };
    case 'EDIT_NOTE':
      index = state.notes.findIndex(note => note.id === payload.id);
      return {
        ...state,
        notes: [
          ...state.notes.slice(0, index),
          payload.note,
          ...state.notes.slice(index + 1)
        ]
      };
    default:
      return state;
  }
};

const initialState = { notes: [] };

const NotesContext = React.createContext(initialState);

function NotesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addNote = useCallback(note => {
    dispatch({
      type: 'ADD_NOTE',
      payload: {
        note
      }
    });
  }, []);

  const removeNote = useCallback(id => {
    dispatch({
      type: 'DELETE_NOTE',
      payload: {
        id
      }
    });
  }, []);

  const editNote = useCallback((id, note) => {
    dispatch({
      type: 'EDIT_NOTE',
      payload: {
        id,
        note
      }
    });
  }, []);

  return (
    <NotesContext.Provider value={{ state, addNote, removeNote, editNote }}>
      {children}
    </NotesContext.Provider>
  );
}

NotesProvider.propTypes = {
  children: PropTypes.node.isRequired
};

const NotesConsumer = NotesContext.Consumer;

export { NotesContext, NotesProvider, NotesConsumer };
