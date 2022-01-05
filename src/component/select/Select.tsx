import React, { FC } from 'react';
import style from './Select.module.css';
import { Filter } from '../../views/filter/Filter';

interface SelectProps {
  changeFilterValue: (value: number)  => void
}

export const Select:FC<SelectProps> = ({  changeFilterValue }) => {
  return (
    <div className={style.selectWrapper}>
      <div className={style.selectChild}>
        <Filter changeFilterValue={changeFilterValue} />
      </div>
    </div>
  )
}