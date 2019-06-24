import React from 'react';

import './index.css';
import NoteList from '../../components/NoteList';

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
    </div>
  );
}

export default App;
