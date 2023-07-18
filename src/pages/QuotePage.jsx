import React from 'react';
import Quote from '../components/Quotes';
import PageNav from '../components/PageNav';
import classes from './QuotePage.module.css';

const QuotePage = () => (
  <div className="container">
    <PageNav />
    <div className={classes.quotePageContainer}>
      <Quote />
    </div>
  </div>
);

export default QuotePage;
