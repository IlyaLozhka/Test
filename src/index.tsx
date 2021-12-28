import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { HomePage } from './component/home/HomePage';
import { UserPage } from './component/user/UserPage';
import { TransactionPage } from './component/transaction/TransactionPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './component/header/Header';
import { Logo } from './component/shared/Logo';
import Content from './component/content/Content';

const routeConfig = {
	path: '/home',
	element: HomePage,
};

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Header logo={<Logo />} />
			<Content>
				<Routes>
					<Route path='/home' element={<HomePage />} />
					<Route path='/user' element={<UserPage />} />
					<Route path='/transactions' element={<TransactionPage />} />
					<Route path='/' element={<App />} />
				</Routes>
			</Content>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
