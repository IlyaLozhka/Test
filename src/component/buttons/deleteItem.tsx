import React, { FC } from 'react';
import { Post } from '../../redux/users/posts/reducer';
import style from './Button.module.css';
import classNames from 'classnames';

interface DeleteItemProps {
  element: Post;
  deleteFunction: Function;
}

export const DeleteItem: FC<DeleteItemProps> = ({ element, deleteFunction }) => {
  return (
    <div className={classNames(style.button, style.delete)} onClick={() => deleteFunction(element.id)}>
      <span>
        Delete
      </span>
    </div>
  );
};