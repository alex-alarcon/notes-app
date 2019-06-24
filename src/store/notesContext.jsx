import React, { useCallback, useReducer } from 'react';
import PropTypes from 'prop-types';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_NOTE':
      return { ...state, notes: [...state.notes, payload.note] };
    case 'DELETE_NOTE':
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== payload.id)
      };
    case 'EDIT_NOTE':
      return {
        ...state,
        notes: state.notes.map(note => {
          if (note.id === payload.note.id) {
            return payload.note;
          }
          return note;
        })
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

  const editNote = useCallback(note => {
    dispatch({
      type: 'EDIT_NOTE',
      payload: {
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
