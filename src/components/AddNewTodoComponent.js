import React, {Component} from 'react';
import TodoInput from '../components/TodoInput';
import {Link, BrowserRouter}  from 'react-router-dom';

class AddNewTodoComponent extends Component {

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
        console.log('hi');
        return (
            <div>
                <Link to="/">Вернуться</Link>
                <h1> Добавление нового задания </h1>
                <TodoInput onSubmit={this.addTodo} />
            </div>
        );
    }
}

export default AddNewTodoComponent;