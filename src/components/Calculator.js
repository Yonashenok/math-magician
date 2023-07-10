import React from 'react';
import classes from './Calculator.module.css';
import KeyPad from './KeyPad';

const Calculator = () => (
  <div>
    <input className={classes.inputForm} />
    <KeyPad />
  </div>
);
export default Calculator;
