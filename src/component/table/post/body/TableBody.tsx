import React, { FC, ReactNode } from 'react';
import { Post } from '../../../../redux/users/posts/reducer';
import { DeleteItem } from '../../../buttons/deleteItem';

// import { DeleteItem } from '../../buttons/deleteItem';

interface PostsTableProps {
  data: Array<Post>;
  deleteFn: Function;
}

export const TableBody: FC<PostsTableProps> = ({ data, deleteFn }) => {
  return (
    <>
      {
        data.map((element, index) => {
          return <tbody key={index}>
          <tr>
            <td>
              {element.id}
            </td>
            <td>
              {element.title}
            </td>
          </tr>
          <tr>
            {element.body}
          </tr>
             <DeleteItem deleteFunction={deleteFn} element={element}/>
          </tbody>;

        })
      }
    </>
  );
};