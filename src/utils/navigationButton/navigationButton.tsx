import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { IProps } from './types';
import style from './NavigationButton.module.css';

export const NavigationButton: FunctionComponent<IProps> = ({ path,title }) => {
  return (
    <div className={style.Wrapper}>
      <Link to={`/${path}`}>
        {title}
      </Link>
    </div>
  );
};
