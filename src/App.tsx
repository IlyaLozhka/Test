import React, { FunctionComponent } from 'react';
import style from './App.module.css'
import Footer from './component/footer/Footer';
import { HeaderContainer } from './component/header/HeaderContainer';
import { ContentContainer } from './component/content/ContentContainer';

export const App: FunctionComponent = () => {
	return (
		<div className={style.appWrapper}>
			<HeaderContainer />
			<ContentContainer />
			<Footer />
		</div>
	);
};
