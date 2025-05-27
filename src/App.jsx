import { useState } from 'react'  
import './App.css'
import Calculator from './Calculator1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello, World!</h1>
      <p>Deze site is gemaakt door de Zebra klas van <a href="https://www.deoostpoort.nl/">de Oostpoort</a></p>
      <button onClick={() => alert('Je hebt geklikt!')}>
        Klik hier!
      </button>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <Calculator />
    </>
  )
}

export default App
