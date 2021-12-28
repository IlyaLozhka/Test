import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppInitial } from './AppInitial';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<AppInitial/>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
