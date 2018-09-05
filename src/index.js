import React, {Component} from 'react';
import ReactDOM from 'react-dom';


// Components
import Form from './components/form';
import TodoList from './components/todoList';

class App extends Component {
    state = {
        keywords: 'Hello',
	todo: ''
    }
    

    handleChange = (event) => {
	console.log('event: '+event.target.value);
	this.setState({
	    todo: event.target.value
	});
	console.log('todo: '+this.state.todo)
    }


    handleSubmit(event) {
	console.log('submited: '+ this.state.todo)
    }


    render() {
	console.log(this.state.keywords)
	console.log(this.state.todo)
	return (
	    <div>
	        <Form todo={this.state.todo} handleChange={this.handleChange}  handleSubmit={this.handleSubmit} />
	        <TodoList />
	    </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('#root'));
