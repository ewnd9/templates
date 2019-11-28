import React, { useState, useEffect } from 'react';
import './App.css';

const App: React.FC = () => {
  const [state, setState] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await fetch('/todos').then(_ => _.json());
      setState(data);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{maxWidth: '300px'}}>
          {state ? <div>{JSON.stringify(state)}</div> : 'loading'}
        </div>
      </header>
    </div>
  );
}

export default App;
