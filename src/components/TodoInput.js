import React, {Component} from 'react';

class TodoInput extends Component {
	
	state = { newTodo: '', formValid: false };
	
	changeText = evt => this.setState({newTodo:
	evt.target.value});
	
	handleAdd = () => this.props.onSubmit(this.state.newTodo);
	
	render() {
		return (
			<div>
				<input value={this.state.todo} onChange={this.changeText}/>
				<button onClick={this.handleAdd} disabled={this.state.formValid}> Add </button>
			</div>
		);
	}
}

export default TodoInput;