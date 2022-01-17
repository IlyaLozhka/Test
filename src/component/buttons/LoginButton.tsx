import React, { FC } from 'react';
import style from './Button.module.css';


interface LoginProps {
  label: string;
  handleClick: () => void;
}

export const LoginButton: FC<LoginProps> = ({ handleClick, label}) => {
  return (
    <div className={style.button} onClick={handleClick}>
      {label}
    </div>
  );
};