import React, { FC } from 'react';
import style from './Content.module.css';

export const Content: FC = ({ children }) => {

	return <div className={style.contentWrapper}>{children}</div>;
};


