import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './home/Home';
import Info from './info/Info'
import Plan from './plan/Plan'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Home />, document.getElementById('root'));
ReactDOM.render(<Info />, document.getElementById('info'));
ReactDOM.render(<Plan />, document.getElementById('plan'));
registerServiceWorker();