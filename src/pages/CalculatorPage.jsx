import React from 'react';
import Calculator from '../components/Calculator';
import PageNav from '../components/PageNav';
import classes from './CalculatorPage.module.css';

const CalculatorPage = () => (
  <div className="container">
    <PageNav />
    <div className={classes.CalcPageContainer}>
      <h1 className={classes.header}>Lets us do some Math</h1>
      <Calculator />
    </div>
  </div>
);

export default CalculatorPage;
