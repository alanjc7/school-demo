import { useState } from 'react';

function Calculator1() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    setResult(Number(num1) + Number(num2));
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1em', borderRadius: '8px', maxWidth: 300, margin: '1em auto' }}>
      <h2>Rekenmachine</h2>
      <input
        type="number"
        value={num1}
        onChange={e => setNum1(e.target.value)}
        placeholder="Eerste getal"
        style={{ marginRight: '0.5em' }}
      />
      <input
        type="number"
        value={num2}
        onChange={e => setNum2(e.target.value)}
        placeholder="Tweede getal"
        style={{ marginRight: '0.5em' }}
      />
      <button onClick={handleCalculate} style={{ marginTop: '0.5em' }}>Optellen</button>
      {result !== null && (
        <div style={{ marginTop: '1em' }}>
          <strong>Result: {result}</strong>
        </div>
      )}
    </div>
  );
}

export default Calculator1;

