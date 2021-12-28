import React, { FunctionComponent } from 'react';
import style from './App.module.css';
import Footer from './component/footer/Footer';
import { Header } from './component/header/Header';
import Content from './component/content/Content';
import { Logo } from './component/shared/Logo';

export const App: FunctionComponent = () => {
	return (
		<div className={style.appWrapper}>
			<Content />
			<Footer />
		</div>
	);
};
