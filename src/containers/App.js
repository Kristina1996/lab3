import React, {Component} from 'react';
import TodoItem from '../components/TodoItem';
import TodoInput from '../components/TodoInput';
// import { Link } from 'react-router';
import {Link, BrowserRouter}  from 'react-router-dom';

class App extends Component {

	state = { todos: []};
	
	addTodo = text => {
		if (text === '') {
			console.log('пусто');
		} else {
			console.log(text);
            var a = this.state.todos.find(todo => todo.text === text);
            console.log(a);
            if (a !== undefined) {
                console.log("Такое задание уже есть в списке, добавьте новое");
                //this.error = 'Такое задание уже существует. Придумайте новое :)';
            } else {
            	console.log('такого задание ещё нет в списке');
                let todos = this.state.todos.concat({text});
                this.setState({todos});
            }
        }
	}

	render() {
		return (
			<div>
				<Link to="/addTodo">Добавить новую задачу</Link>
				<h1> Список задач </h1>
				<ul>
					{
						this.state.todos.map((todo, index) =>
							<li key={index}>
								<TodoItem text={todo.text} />
							</li>
						)
					}
				</ul>
			
				<TodoInput onSubmit={this.addTodo} />

			</div>
		);
	}
}

export default App;