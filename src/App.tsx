import React, { FunctionComponent } from 'react';
import style from './App.module.css';
import Footer from './component/footer/Footer';
import { HeaderContainer } from './component/header/HeaderContainer';
import { ContentContainer } from './component/content/ContentContainer';
import logo from './assets/img/logo.png'

export const App: FunctionComponent = () => {

	const pages = [
		{ path: 'home', title: 'Home' },
		{ path: 'user', title: 'User' },
		{ path: 'transaction', title: 'Transaction' }
	];

	return (
		<div className={style.appWrapper}>
			<HeaderContainer logo={logo} pages={pages} />
			<ContentContainer />
			<Footer />
		</div>
	);
};
