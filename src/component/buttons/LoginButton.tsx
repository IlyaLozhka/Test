import React, { FC } from 'react';
import style from './Button.module.css';

interface LoginButtonProps {
  handleClick: () => void;
  label: string;
}

export const LoginButton: FC<LoginButtonProps> = ({ handleClick, label }) => {

  return (
    <div onClick={handleClick} className={style.button}>
      {label}
    </div>
  );
};