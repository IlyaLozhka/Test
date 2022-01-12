import React, { FC } from 'react';
import style from './Select.module.css';

interface SelectProps {
  value: number[];
  label: string;
  onChange: (count: number) => void;
}

export const Select: FC<SelectProps> = ({ value, label, onChange }) => {


  return (
    <div className={style.selectWrapper}>
      <label>{label}</label>
      <select onChange={event => onChange(Number(event.target.value))}>
        {value.map((element, index) => {
          return <option key={index} value={element}>{element}</option>;
        })}
      </select>
    </div>
  );
};