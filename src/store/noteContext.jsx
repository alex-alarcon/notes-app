import React, { useCallback, useReducer } from 'react';
import PropTypes from 'prop-types';
import COLORS from '../constants/colors';

const initialState = {
  note: { body: '', color: COLORS.YELLOW },
  isOpen: false
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'UPDATE_NOTE':
      return { note: payload.note, isOpen: true };
    case 'RESET_NOTE':
      return initialState;
    case 'ADD_NOTE':
      return {
        ...state,
        isOpen: true
      };
    default:
      return state;
  }
};

const NoteContext = React.createContext(initialState);

function NoteProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateNote = useCallback(newNote => {
    dispatch({
      type: 'UPDATE_NOTE',
      payload: {
        note: newNote
      }
    });
  }, []);

  const resetNote = useCallback(() => {
    dispatch({
      type: 'RESET_NOTE'
    });
  }, []);

  const addNote = useCallback(() => {
    dispatch({
      type: 'ADD_NOTE'
    });
  });

  return (
    <NoteContext.Provider value={{ updateNote, resetNote, addNote, ...state }}>
      {children}
    </NoteContext.Provider>
  );
}

NoteProvider.propTypes = {
  children: PropTypes.node.isRequired
};

const NoteConsumer = NoteContext.Consumer;

export { NoteContext, NoteProvider, NoteConsumer };
