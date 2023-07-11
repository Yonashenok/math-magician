import React, { useState } from 'react';
import calculate from './Logic/calculate';
import classes from './Calculator.module.css';
import KeyPad from './KeyPad';

const Calculator = () => {
  // const apiKey = 'I/eJb/FRt3dKtYB18V0/LA==Bh0PtvNyvoOR3M47';

  // useEffect(() => {
  //   const Quotes = async () => {
  //     try {
  //       // setData((prevState) => ({ ...prevState, isLoading: true }));
  //       const url = 'https://api.api-ninjas.com/v1/facts?limit=4';
  //       const res = await fetch(url, {
  //         method: 'GET',
  //         headers: { 'X-Api-Key': apiKey },
  //         contentType: 'application/json',
  //       });
  //       const result = await res.json();
  //       console.log(result);
  //       // setData((prevState) => ({ ...prevState, isData: result }));
  //     } catch (err) {
  //       // setData((prevState) => ({ ...prevState, isError: true }));
  //       console.log(err);
  //     }
  //   };
  //   Quotes();
  // });

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
