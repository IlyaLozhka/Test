import React, { FC } from 'react';
import style from './Preloader.module.css';


export const Preloader: FC = () => {
  return (
    <div className={style.background}>
      <div className={style.blur}>
        <div className={style.loader}>
          Loading...
        </div>
      </div>
    </div>
  );
};