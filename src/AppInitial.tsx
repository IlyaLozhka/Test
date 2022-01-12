import React, { FunctionComponent } from 'react';
import style from './AppInitial.module.css';
import { Logo } from './component/shared/Logo';
import { Header } from './views/header/Header';
import { Footer } from './views/footer/Footer';
import { PreloaderProvider } from './component/preloader/PreloaderContext';



export const AppInitial: FunctionComponent = ({children}) => {
	return (
		<div className={style.appWrapper}>
			<PreloaderProvider>
				<Header logo={<Logo />} />
				{children}
				<Footer/>
			</PreloaderProvider>
		</div>
	);
};
