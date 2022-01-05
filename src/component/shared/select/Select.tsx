import React, { FC } from 'react';
import style from './Select.module.css';

interface SelectProps {
  onChange: (value: number)  => void
  value: number[];
  label: string;
}

export const Select:FC<SelectProps> = ({ onChange, value, label }) => {
  return (
    <div className={style.selectWrapper}>
      <label htmlFor=''>{label}</label>
      <select onChange={event => onChange(Number(event.target.value))} >
        {value.map((element, index) => {
          return <option key={index} value={element}>{element}</option>
        })}
      </select>
    </div>
  )
}