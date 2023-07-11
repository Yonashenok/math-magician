import React, { useState } from 'react';
import calculate from './Logic/calculate';
import classes from './Calculator.module.css';
import KeyPad from './KeyPad';

const Calculator = () => {
  const [result, setResult] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const buttonNameHandler = (btn) => {
    setResult(calculate(result, btn));
  };
  return (
    <div>
      <div className={classes.inputForm}>
        {result.next || result.operation || result.total || '0'}
      </div>
      <KeyPad onButton={buttonNameHandler} />
    </div>
  );
};
export default Calculator;
