import React, { FC } from 'react';

interface TableHeadProps {
  sortById: () => void;
  sortByTitle: () => void;
}

export const TableHead: FC<TableHeadProps> = ({ sortById, sortByTitle }) => {

  return (
    <thead>
    <tr>
      <td onClick={sortById}>
        <h4>
          id
        </h4>
      </td>
      <td onClick={sortByTitle}>
        <h4>
          title
        </h4>
      </td>
    </tr>
    </thead>
  );
};