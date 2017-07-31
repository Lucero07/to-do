// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

import React,{Component} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component{

	constructor(props){
		super(props);
		this.state = {
			todos:[]
		};
		this.onSubmitHandler = this.onSubmitHandler.bind(this);
	}

	onSubmitHandler(e){
		e.preventDefault();
		const name =e.target.children[0].value;
		const status = 'pending';
		const todo = {name,status};
		let todos = this.state.todos;
		todos.push(todo);

console.log(todos);
		this.setState({
			todos
		});
	}

	render(){
		return(
			<div>
				  <nav>
				    <div className="nav-wrapper">
				      <a href="#" className="brand-logo">Logo</a>
				      <ul id="nav-mobile" className="right hide-on-med-and-down">
				        <li><a href="sass.html">Sass</a></li>
				        <li><a href="badges.html">Components</a></li>
				        <li><a href="collapsible.html">JavaScript</a></li>
				      </ul>
				    </div>
				  </nav>
				<h1>Lista de comentarios</h1>
				<TodoForm onSubmitHandler={this.onSubmitHandler} />
				<TodoList todos ={this.state.todos} />
			</div>
		);
	}
}

export default App;
