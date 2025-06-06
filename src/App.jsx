import { useState } from 'react';
import './App.css';
import Calculator from './Calculator2';
import NameColorTable from './NameColorTable';
import WebcamStream from './WebcamStream';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <h1>Hallo, Zebras!</h1>
        <button
          onClick={() => alert('Je hebt geklikt!')}
          style={{ marginRight: '1em' }}
        >
          Klik hier!
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <WebcamStream />
        <Calculator />
        <NameColorTable />
      </div>
      <p>
        Deze site is gemaakt door de Zebra klas van{' '}
        <a href="https://www.deoostpoort.nl/" target="_blank">
          de Oostpoort{' '}
        </a>
        school
      </p>
    </div>
  );
}

export default App;
