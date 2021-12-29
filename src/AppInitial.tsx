import React, { FunctionComponent } from 'react';
import style from './AppInitial.module.css';
import { Logo } from './component/shared/Logo';
import { Header } from './views/header/Header';
import { Footer } from './views/footer/Footer';
import { App } from './App';


export const AppInitial: FunctionComponent = () => {
	return (
		<div className={style.appWrapper}>
			<Header logo={<Logo />} />
				<App/>
			<Footer/>
		</div>
	);
};
