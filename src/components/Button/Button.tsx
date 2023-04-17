import React from 'react';
import './Button.css';

type ButtonProps = {
  onClick?: () => void;
  text: string;
  variant: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
};

const Button: React.FC<ButtonProps> = ({ onClick, text, variant = 'primary', size = 'medium' }) => {
  const classes = `button ${variant} ${size}`;

  return (
    <button className={classes} onClick={onClick}>{text}</button>
  );
};

export default Button;
