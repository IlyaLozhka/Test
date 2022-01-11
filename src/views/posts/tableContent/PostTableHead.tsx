import React from 'react';
import { TableHeadCell } from '../../../component/table/TableHeadCell';


export const PostTableHead = () => {
  return (
    <tr>
      <TableHeadCell label={'userId'} />
      <TableHeadCell label={'id'} orderBy={'id'} />
      <TableHeadCell label={'title'} orderBy={'title'} />
      <TableHeadCell label={'body'} />
    </tr>
  );
};