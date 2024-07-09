import React from 'react';
import { Counter } from './Counter';

function App() {
  return (
    <React.StrictMode>
      <Counter initialValue={0} />
    </React.StrictMode>
  );
}

export default App