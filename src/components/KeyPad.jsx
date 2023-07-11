import React from 'react';
import classes from './KeyPad.module.css';
import Button from '../UI/Button';
/* eslint-disable react/prop-types */

const KeyPad = ({ onButton }) => {
  const btnTypes = [
    {
      id: 1,
      key: 'AC',
    },
    {
      id: 2,
      key: '+/-',
    },
    {
      id: 3,
      key: '%',
    },
    {
      id: 4,
      key: '÷',
    },
    {
      id: 5,
      key: '7',
    },
    {
      id: 6,
      key: '8',
    },
    {
      id: 7,
      key: '9',
    },
    {
      id: 8,
      key: 'x',
    },
    {
      id: 9,
      key: '4',
    },
    {
      id: 10,
      key: '5',
    },
    {
      id: 11,
      key: '6',
    },
    {
      id: 12,
      key: '-',
    },
    {
      id: 13,
      key: '1',
    },
    {
      id: 14,
      key: '2',
    },
    {
      id: 15,
      key: '3',
    },
    {
      id: 16,
      key: '+',
    },
    {
      id: 17,
      key: '0',
    },
    {
      id: 18,
      key: '.',
    },
    {
      id: 19,
      key: '=',
    },
  ];
  const submitHandler = (e) => {
    onButton(e.target.textContent);
  };

  return (
    <div className={classes.container}>
      {btnTypes.map((btn) => (
        <Button
          className={btn.key === '0' ? classes.btnAt0 : ''}
          key={btn.id}
          onClick={submitHandler}
        >
          {btn.key}
        </Button>
      ))}
    </div>
  );
};

export default KeyPad;
