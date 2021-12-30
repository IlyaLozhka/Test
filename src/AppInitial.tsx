import React, { FunctionComponent } from 'react';
import style from './AppInitial.module.css';
import { Logo } from './component/shared/Logo';
import { Header } from './views/header/Header';
import { Footer } from './views/footer/Footer';



export const AppInitial: FunctionComponent = ({children}) => {
	return (
		<div className={style.appWrapper}>
			<Header logo={<Logo />} />
			{children}
			<Footer/>
		</div>
	);
};
