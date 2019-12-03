import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import Store from './components/store/store';

ReactDOM.render(
	<Provider store={Store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
