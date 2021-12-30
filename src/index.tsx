import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppInitial } from './AppInitial';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<AppInitial>
				<App/>
			</AppInitial>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
