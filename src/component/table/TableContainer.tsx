import React, { FC, ReactNode } from 'react';
import { Table } from './Table';
import { TableProvider } from './TableContext/TableContext';

interface TableContainerProps<T> {
  tableBody: ReactNode;
  tableHead: ReactNode;
  data: T[];
  dispatchType: string;
  recordCount: number;
}

export const TableContainer: FC<TableContainerProps<{}>> = <T,>(props:TableContainerProps<T>) => {

  const { tableBody, tableHead, data, dispatchType, recordCount } = props;

  return (
    <TableProvider recordCount={recordCount} data={data} dispatchType={dispatchType}>
      <Table tableHead={tableHead} tableBody={tableBody} />
    </TableProvider>
  );
};


