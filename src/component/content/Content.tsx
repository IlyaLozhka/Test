import React, { FC } from 'react';
import style from './Content.module.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../home/HomePage';
import { UserPage } from '../user/UserPage';
import { TransactionPage } from '../transaction/TransactionPage';
import { StartPage } from '../startPage/startPage';
import { useAuth } from '../../redux/authorization/selector';

const Content: FC = ({ children }) => {
	const { auth } = useAuth();

	return <div className={style.contentWrapper}>{children}</div>;
};

export default Content;
