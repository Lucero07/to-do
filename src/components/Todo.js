import React,{Component} from 'react';

export default class Todo extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const name = this.props.name;
		const status = this.props.status;
		return(
			<div>
			{/*Crea elementos por cada todo*/}
				{
					(status === 'done')?
					<input type='checkbox' checked disabled/> :
					<input type='checkbox'/>}
				<label>{name}</label>
			</div>
		)
	}
}
