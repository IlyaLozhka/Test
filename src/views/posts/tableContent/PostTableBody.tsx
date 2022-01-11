import React, { FC } from 'react';
import { Post } from '../../../redux/users/posts/reducer';
import { useTableContext } from '../../../component/table/TableContext/TableContext';
import { DeleteItem } from '../../../component/buttons/deleteItem';

interface PostTableBodyProps {
  data: Post[];
}

export const PostTableBody: FC<PostTableBodyProps> = ({ data }) => {

  const { handleDelete } = useTableContext();

  return (
    <>
      {
        data.map((element, index) => {
          return (
            <tr key={index}>
              <td>
                {element.userId}
              </td>
              <td>
                {element.id}
              </td>
              <td>
                {element.title}
              </td>
              <td>
                {element.body}
              </td>
              <td>
                <DeleteItem deleteFunction={handleDelete} id={element.id} />
              </td>
            </tr>
          );
        })
      }
    </>
  );
};