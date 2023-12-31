import React, { useEffect } from 'react';
import classes from './Quotes.module.css';

const apiKey = 'I/eJb/FRt3dKtYB18V0/LA==Bh0PtvNyvoOR3M47';
const data = {
  isLoading: false,
  isError: false,
  isData: [],
};

const Quote = () => {
  useEffect(() => {
    const Quotes = async () => {
      try {
        data.isLoading = true;
        const url = 'https://api.api-ninjas.com/v1/facts?limit=4';
        const res = await fetch(url, {
          method: 'GET',
          headers: { 'X-Api-Key': apiKey },
          contentType: 'application/json',
        });
        const result = await res.json();
        const { error } = result;
        if (!res.ok) throw new Error(`OPPs Something went wrong ${error} `);
        data.isData = result;
        data.isLoading = false;
      } catch (err) {
        data.isError = true;
      }
    };
    Quotes();
  }, []);

  let content = '';
  if (data.isLoading) content = 'Loading for quote...';
  if (data.isError) content = 'Oops something went wrong';

  return (
    <>
      {data.isError ? (
        <p className={classes.error}>{content}</p>
      ) : (
        <div className={classes.quoteContainer}>
          <h2 className={classes.quoteHeader}>Fact of the Day</h2>
          <p className={classes.loading}>{content}</p>
          {data.isData.map((quo, i) => (
            <p className={classes.quoteText} key={quo.fact.slice(1, 8)}>
              {`${i + 1}.   ${quo.fact}`}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default Quote;
