import React,{Component} from 'react';
import Todo from './Todo';

export default class TodoList extends Component{
	render(){
		const todos =this.props.todos;
		return(
			<div>
				{
					todos.map((todo,i) =>{
						return <Todo key={i} name= {todo.name} status={todo.status} />;
					})
				}
			</div>
		)
	}
}
