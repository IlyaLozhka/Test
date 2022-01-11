import React, { FC, ReactNode } from 'react';
import style from './Table.module.css';

interface TableProps {
  tableHead: ReactNode;
  tableBody: ReactNode;
}

export const Table: FC<TableProps> = ({ tableHead, tableBody }) => {
  return (
    <table className={style.customers}>
      <thead>
      {tableHead}
      </thead>
      <tbody>
      {tableBody}
      </tbody>
    </table>
  );
};