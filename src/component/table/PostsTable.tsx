import React, { FC } from 'react';
import { Post } from '../../redux/users/posts/reducer';
import style from './PostsTable.module.css';
import { DeleteItem } from '../buttons/deleteItem';

interface PostsTableProps {
  postData: Array<Post>;
  deletePost: (value: number) => void;
}

export const PostsTable: FC<PostsTableProps> = ({ postData, deletePost }) => {
  return (
    <div className={style.postsWrapper}>
      {postData.map((element) => {
        return (
          <div className={style.tableWrapper} key={element.id}>
            <div>
              {element.userId}
            </div>
            <div>
              <h4>
                {element.title}
              </h4>
            </div>
            <div>
              {element.body}
            </div>

            <DeleteItem element={element} deleteFunction={deletePost}/>
          </div>
        );
      })}
    </div>
  );
};


