import React from 'react';
import classes from './Button.module.css';
/* eslint-disable react/prop-types */

const Button = ({ className, onClick, children }) => {
  const selected = ['+', 'x', '-', '÷', '='];
  const classesBg = selected.includes(children) ? classes.btnBg : classes.btn;
  return (
    <button
      type="button"
      className={children === '0' ? className : classesBg}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
