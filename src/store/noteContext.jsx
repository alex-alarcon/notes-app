import React, { useCallback, useReducer } from 'react';
import PropTypes from 'prop-types';
import COLORS from '../constants/colors';

const initialState = { body: '', color: COLORS.YELLOW };

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'UPDATE_NOTE':
      return payload.note;
    case 'RESET_NOTE':
      return initialState;
    default:
      return state;
  }
};

const NoteContext = React.createContext(initialState);

function NoteProvider({ children }) {
  const [note, dispatch] = useReducer(reducer, initialState);

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

  return (
    <NoteContext.Provider value={{ note, updateNote, resetNote }}>
      {children}
    </NoteContext.Provider>
  );
}

NoteProvider.propTypes = {
  children: PropTypes.node.isRequired
};

const NoteConsumer = NoteContext.Consumer;

export { NoteContext, NoteProvider, NoteConsumer };
