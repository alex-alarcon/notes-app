import React from 'react';

import './index.css';
import NoteList from '../../components/NoteList';
import Icon from '../../components/Icon';

function App() {
  const notes = [
    {
      id: 1,
      body: 'Lorem Ipsum'
    },
    {
      id: 2,
      body: 'Dolor Sit'
    },
    {
      id: 3,
      body: 'Amet Lorem'
    }
  ];
  return (
    <div className="App">
      <NoteList notes={notes} />
      <Icon iconName="fa-plus-circle" />
    </div>
  );
}

export default App;
