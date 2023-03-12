// import React from "react";

// function Home() {
//   return (
//     <>
//       <h1>Login Successfully</h1>
//     </>
//   );
// }

// export default Home;

// 


import React, { useState } from 'react';

function Calculator() {
  const [number1, setNumber1] = useState('');
  const [operator, setOperator] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const handleNumber1Change = (event) => {
    setNumber1(event.target.value);
  };

  const handleOperatorChange = (event) => {
    setOperator(event.target.value);
  };

  const handleNumber2Change = (event) => {
    setNumber2(event.target.value);
  };

  const calculateResult = () => {
    let num1 = parseFloat(number1);
    let num2 = parseFloat(number2);
    let result;

    if (operator === '+') {
      result = num1 + num2;
    } else if (operator === '-') {
      result = num1 - num2;
    } else if (operator === '*') {
      result = num1 * num2;
    } else if (operator === '/') {
      result = num1 / num2;
    }

    setResult(result);
  };

  return (
    <div>
      <label>
        Number 1:
        <input type="number" value={number1} onChange={handleNumber1Change} />
      </label>
      <label>
        Operator:
        <select value={operator} onChange={handleOperatorChange}>
          <option value="">Select an operator</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </label>
      <label>
        Number 2:
        <input type="number" value={number2} onChange={handleNumber2Change} />
      </label>
      <button onClick={calculateResult}>Calculate</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;
