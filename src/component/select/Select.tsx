import React, { FC } from 'react';
import style from './Select.module.css';
import { Filter } from '../../views/filter/Filter';
import { Sorter } from '../../views/sorter/Sorter';
import { SORT_TYPE } from '../../assets/utils/postSort';

interface SelectProps {
  changeFilterValue: (value: number)  => void
  changeSortType: (sortType:SORT_TYPE)=> void;
}

export const Select:FC<SelectProps> = ({  changeFilterValue, changeSortType }) => {
  return (
    <div className={style.selectWrapper}>
      <div className={style.selectChild}>
        <Filter changeFilterValue={changeFilterValue} />
      </div>
      <div className={style.selectChild}>
        <Sorter changeSortType={changeSortType} />
      </div>
    </div>
  )
}