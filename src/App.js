import './App.css';
import {useState} from 'react'

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {
    //limits ability to reuse operators one after the other
    if (
      ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return;
      }
    

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      )
    }

    return digits;

  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  return (
    <div className="calculator">
      <div className="display">
        {result ? <span></span> : ' '}{ calc || "0" }
      </div>

      <div className="operators">
        <button onClick={() => updateCalc('/')}>/</button>
        <button onClick={() => updateCalc('*')}>*</button>
        <button onClick={() => updateCalc('+')}>+</button>
        <button onClick={() => updateCalc('-')}>-</button>
        <button>del</button>
      </div>

      <div className="digits">
        {createDigits()}
        <button  onClick={() => updateCalc('0')}>‎0</button>
        <button onClick={() => updateCalc('.')}>.</button>
        
        <button onClick={calculate}>=</button>
      </div>

    </div>
  );
}

export default App;