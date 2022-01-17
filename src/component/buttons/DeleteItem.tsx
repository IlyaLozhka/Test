import React, { FC } from 'react';
import style from './Button.module.css';
import classNames from 'classnames';

interface DeleteItemProps {
  id: number;
  deleteFunction: Function;
}

export const DeleteItem: FC<DeleteItemProps> = ({ id, deleteFunction }) => {
  return (
    <div className={classNames(style.button, style.delete)} onClick={() => deleteFunction(id)}>
      <span>
        Delete
      </span>
    </div>
  );
};