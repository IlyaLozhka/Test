import React, { FC } from 'react';
import { useTableContext } from './TableContext/TableContext';

interface TableHeadCellProps {
  label: string;
  orderBy?: string;
}

export const TableHeadCell: FC<TableHeadCellProps> = ({ label, orderBy}) => {

  const { handleSort } = useTableContext();

  return (

    <>
      {
        orderBy ? <td onClick={() => handleSort(orderBy)}> {label} </td> : <td> {label} </td>
      }
    </>
  );
};