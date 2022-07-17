import React from 'react';
import classes from './Button.module.css'

const Button = (props) => {
  const cls = [
    classes.Button,
    classes[props.type],
  ]

  const hiddenHandler = () => {
    if (props.hidden === true) {
      console.log(props.hidden)
      return cls.push(classes.hide)
    } else {
      return 
    }
  }

  return (
    <button
      onClick={props.onClick}
      hidden={hiddenHandler()}
      className={cls.join(' ')}
    >
      {props.children}
    </button>
  );
}

export default Button;
