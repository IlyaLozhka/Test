import React, { FC } from 'react';
import { SORT_TYPE } from '../../assets/utils/postSort';

interface SorterProps {
  changeSortType: (value:SORT_TYPE) =>  void;
}

export const Sorter:FC<SorterProps> = ({changeSortType}) => {
  return (
    <>
      <label >Sort by ID</label>
      <select onChange={event => changeSortType(event.target.value as SORT_TYPE)}>
        <option  value={SORT_TYPE.BY_LOWEST_ID}>
          Lowest
        </option>
        <option value={SORT_TYPE.BY_LARGEST_ID}>
          Largest
        </option>
      </select>
    </>
  )
}