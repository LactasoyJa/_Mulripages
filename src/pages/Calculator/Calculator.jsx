import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [currentInput, setCurrentInput] = useState('');
  const [previousInput, setPreviousInput] = useState('');
  const [operator, setOperator] = useState('');
  const [lastOperand, setLastOperand] = useState('');
  const [lastOperator, setLastOperator] = useState('');

  // Handle number input
  const inputNumber = (value) => {
    setCurrentInput(prev => prev === '0' && value === '0' ? '0' : prev + value);
  };

  // Handle operator input
  const handleOperator = (nextOperator) => {
    if (!currentInput) return;

    if (previousInput) {
      calculate();
    } else {
      setPreviousInput(currentInput);
    }

    setOperator(nextOperator);
    setCurrentInput('');
    setLastOperand('');
    setLastOperator('');
  };

  // Perform calculation
  const calculate = () => {
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput) || lastOperand;

    if (isNaN(prev) || isNaN(current)) return;

    let result = 0;
    const activeOperator = lastOperator || operator;

    switch (activeOperator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }

    setCurrentInput(String(result));
    setPreviousInput(String(result));
    setLastOperator(activeOperator);
    setLastOperand(current);
  };

  // Clear all inputs
  const clear = () => {
    setCurrentInput('');
    setPreviousInput('');
    setOperator('');
    setLastOperand('');
    setLastOperator('');
  };

  // Handle backspace (delete last input)
  const backspace = () => {
    setCurrentInput(currentInput.slice(0, -1) || '0');
  };

  // Handle key press
  const handleKeyPress = (e) => {
    const { key } = e;
    if (!isNaN(key)) {
      inputNumber(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
      handleOperator(key);
    } else if (key === 'Enter') {
      calculate();
    } else if (key === 'Escape') {
      clear();
    } else if (key === 'Backspace') {
      backspace();
    }
  };

  return (
    <div className="calculator" onKeyDown={handleKeyPress} tabIndex="0">
      <input type="text" className="calculator-screen" value={currentInput || '0'} disabled />
      <div className="calculator-keys">
        <button onClick={clear} className="all-clear">AC</button>
        <button onClick={backspace} id="backspace">DEL</button>
        <button onClick={() => handleOperator('/')} className="operator">÷</button>
        <button onClick={() => handleOperator('*')} className="operator">×</button>

        <button onClick={() => inputNumber('7')}>7</button>
        <button onClick={() => inputNumber('8')}>8</button>
        <button onClick={() => inputNumber('9')}>9</button>
        <button onClick={() => handleOperator('+')} className="operator">+</button>

        <button onClick={() => inputNumber('4')}>4</button>
        <button onClick={() => inputNumber('5')}>5</button>
        <button onClick={() => inputNumber('6')}>6</button>
        <button onClick={() => handleOperator('-')} className="operator">−</button>

        <button onClick={() => inputNumber('1')}>1</button>
        <button onClick={() => inputNumber('2')}>2</button>
        <button onClick={() => inputNumber('3')}>3</button>
        <button onClick={calculate} className="equal-sign">=</button>

        <button onClick={() => inputNumber('0')} id="zero">0</button>
        <button onClick={() => inputNumber('.')}>.</button>
      </div>
    </div>
  );
};

export default Calculator;
