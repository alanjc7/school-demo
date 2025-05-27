import { useState } from 'react';

function Calculator() {
  const [display, setDisplay] = useState('');
  const [firstNum, setFirstNum] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondNum, setWaitingForSecondNum] = useState(false);

  const handleDigitClick = (digit) => {
    if (waitingForSecondNum) {
      setDisplay(digit);
      setWaitingForSecondNum(false);
    } else {
      setDisplay((prev) => (prev === '0' ? digit : prev + digit));
    }
  };

  const handleOperatorClick = (op) => {
    if (display !== '') {
      setFirstNum(Number(display));
      setOperator(op);
      setWaitingForSecondNum(true);
    }
  };

  const handleEquals = () => {
    if (operator && firstNum !== null && display !== '') {
      const secondNum = Number(display);
      let result;
      switch (operator) {
        case '+':
          result = firstNum + secondNum;
          break;
        case '-':
          result = firstNum - secondNum;
          break;
        case '×':
          result = firstNum * secondNum;
          break;
        case '÷':
          result = secondNum !== 0 ? firstNum / secondNum : 'Err';
          break;
        default:
          result = 'Err';
      }
      setDisplay(result.toString());
      setFirstNum(null);
      setOperator(null);
      setWaitingForSecondNum(false);
    }
  };

  const handleClear = () => {
    setDisplay('');
    setFirstNum(null);
    setOperator(null);
    setWaitingForSecondNum(false);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1em', borderRadius: '8px',  margin: '1em auto' }}>
      <h2>Calculator</h2>
      <div style={{
        background: '#222',
        color: '#fff',
        fontSize: '2em',
        padding: '0.5em',
        borderRadius: '4px',
        marginBottom: '1em',
        minHeight: '1.5em',
        textAlign: 'right',
        letterSpacing: '2px',
      }}>
        {display || '0'}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5em' }}>
        {[7,8,9].map((digit) => (
          <button key={digit} onClick={() => handleDigitClick(digit.toString())} style={{ fontSize: '1.5em' }}>{digit}</button>
        ))}
        <button onClick={() => handleOperatorClick('÷')} style={{ fontSize: '1.5em' }}>÷</button>
        {[4,5,6].map((digit) => (
          <button key={digit} onClick={() => handleDigitClick(digit.toString())} style={{ fontSize: '1.5em' }}>{digit}</button>
        ))}
        <button onClick={() => handleOperatorClick('×')} style={{ fontSize: '1.5em' }}>×</button>
        {[1,2,3].map((digit) => (
          <button key={digit} onClick={() => handleDigitClick(digit.toString())} style={{ fontSize: '1.5em' }}>{digit}</button>
        ))}
        <button onClick={() => handleOperatorClick('-')} style={{ fontSize: '1.5em' }}>-</button>
        <button onClick={handleClear} style={{ fontSize: '1.5em' }}>C</button>
        <button onClick={() => handleDigitClick('0')} style={{ fontSize: '1.5em' }}>0</button>
        <button onClick={handleEquals} style={{ fontSize: '1.5em' }}>=</button>
        <button onClick={() => handleOperatorClick('+')} style={{ fontSize: '1.5em' }}>+</button>
      </div>
    </div>
  );
}

export default Calculator; 


// Calculator v1 add two inputs
{/* <div style={{ border: '1px solid #ccc', padding: '1em', borderRadius: '8px', maxWidth: 300, margin: '1em auto' }}>
<h2>Rekenmachine</h2>
<input
  type="number"
  value={num1}
  onChange={e => setNum1(e.target.value)}
  placeholder="First number"
  style={{ marginRight: '0.5em' }}
/>
<input
  type="number"
  value={num2}
  onChange={e => setNum2(e.target.value)}
  placeholder="Second number"
  style={{ marginRight: '0.5em' }}
/>
<button onClick={handleCalculate} style={{ marginTop: '0.5em' }}>Add</button>
{result !== null && (
  <div style={{ marginTop: '1em' }}>
    <strong>Result: {result}</strong>
  </div>
)}
</div> */}


// Calculator v2 add two inputs
{/* <div style={{ border: '1px solid #ccc', padding: '1em', borderRadius: '8px',  margin: '1em auto' }}>
<h2>Rekenmachine</h2>
<div style={{
  background: '#222',
  color: '#fff',
  fontSize: '2em',
  padding: '0.5em',
  borderRadius: '4px',
  marginBottom: '1em',
  minHeight: '1.5em',
  textAlign: 'right',
  letterSpacing: '2px',
}}>
  {display || '0'}
</div>
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5em' }}>
  {[7,8,9].map((digit) => (
    <button key={digit} onClick={() => handleDigitClick(digit.toString())} style={{ fontSize: '1.5em' }}>{digit}</button>
  ))}
  <button onClick={() => handleOperatorClick('÷')} style={{ fontSize: '1.5em' }}>÷</button>
  {[4,5,6].map((digit) => (
    <button key={digit} onClick={() => handleDigitClick(digit.toString())} style={{ fontSize: '1.5em' }}>{digit}</button>
  ))}
  <button onClick={() => handleOperatorClick('×')} style={{ fontSize: '1.5em' }}>×</button>
  {[1,2,3].map((digit) => (
    <button key={digit} onClick={() => handleDigitClick(digit.toString())} style={{ fontSize: '1.5em' }}>{digit}</button>
  ))}
  <button onClick={() => handleOperatorClick('-')} style={{ fontSize: '1.5em' }}>-</button>
  <button onClick={handleClear} style={{ fontSize: '1.5em' }}>C</button>
  <button onClick={() => handleDigitClick('0')} style={{ fontSize: '1.5em' }}>0</button>
  <button onClick={handleEquals} style={{ fontSize: '1.5em' }}>=</button>
  <button onClick={() => handleOperatorClick('+')} style={{ fontSize: '1.5em' }}>+</button>
</div>
</div> */}
