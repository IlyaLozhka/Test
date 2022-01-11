import React, { FC, ReactNode } from 'react';
import { Table } from './Table';
import { TableProvider } from './TableContext/TableContext';
import { Post } from '../../redux/users/posts/reducer';
import { Select } from '../shared/select/Select';


interface TableContainerProps<T> {
  tableBody: ReactNode;
  tableHead: ReactNode;
  data: Array<T>;
  dispatchType: string;
}

export const TableContainer: FC<TableContainerProps<Post>> = ({ tableBody, tableHead, data, dispatchType }) => {

  return (
    <TableProvider data={data} dispatchType={dispatchType}>
      <Select value={[5, 10, 15]} label={'Numbers of posts'} />
      <Table tableHead={tableHead} tableBody={tableBody} />
    </TableProvider>
  );
};


