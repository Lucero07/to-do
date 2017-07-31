import React,{Component} from 'react';

export default class TodoForm extends Component{
	render(){
		return(
			<form onSubmit={this.props.onSubmitHandler}>
				<textarea placeholder='Nombre de To Do'></textarea>
				<button type='submit'>Crear</button>
			</form>
		)
	}
}
