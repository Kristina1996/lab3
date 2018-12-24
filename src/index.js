import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

import Message from './components/Message';
import App from './containers/App';
import TodoInput from './components/TodoInput';
import AddNewTodoComponent from './components/AddNewTodoComponent';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path="/" component={App} />

			<Route path="/addTodo" component={AddNewTodoComponent} />
		</Switch>
    </Router>
	//<App />
	, document.getElementById('root'));

//ReactDOM.render(<Message text='Hello, react!' />, document.getElementById('root'));

serviceWorker.unregister();
