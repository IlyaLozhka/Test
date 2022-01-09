import React, { FC } from 'react';
import style from './Select.module.css';
import { useTableContext } from '../../table/TableContext/TableContext';

interface SelectProps {
  value: number[];
  label: string;
}

export const Select:FC<SelectProps> = ({ value, label }) => {

  const { handleSelect } = useTableContext()

  return (
    <div className={style.selectWrapper}>
      <label>{label}</label>
      <select onChange={event => handleSelect(Number(event.target.value))} >
        {value.map((element, index) => {
          return <option key={index} value={element}>{element}</option>
        })}
      </select>
    </div>
  )
}