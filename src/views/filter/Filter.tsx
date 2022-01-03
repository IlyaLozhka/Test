import React, { FC } from 'react';


interface FilterProps {
  changeFilterValue:(value:number) => void;
}

export const Filter:FC<FilterProps> = ({changeFilterValue}) => {
  return (
    <>
      <label   htmlFor=''>Number of posts</label>
      <select onChange={event => changeFilterValue(Number(event.target.value))} >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
    </>
  )
};