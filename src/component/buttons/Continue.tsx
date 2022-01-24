import React, { FC } from 'react';
import style from './Button.module.css';

interface ContinueProps {
  handleClick: () => void;
}

export const Continue: FC<ContinueProps> = ({ handleClick }) => {
  return (
    <div onClick={handleClick} className={style.button}>
      Continue
    </div>
  );
};