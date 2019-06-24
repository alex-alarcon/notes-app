import React from 'react';

import './index.css';
import Note from '../../components/Note';

function App() {
  const note = {
    id: 1,
    body: 'Lorem Ipsum'
  };
  return (
    <div className="App">
      <Note note={note} />
    </div>
  );
}

export default App;
