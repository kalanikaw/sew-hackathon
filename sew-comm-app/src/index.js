import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Orders from './orders/Orders'
import Calendar from './calendar/Calendar'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Orders />, document.getElementById('orders'));
ReactDOM.render(<Calendar />, document.getElementById('calendar'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
