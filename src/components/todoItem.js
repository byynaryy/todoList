import React, {Component} from 'react'; 


class TodoItem extends Component {
    render() {
        const listItems = this.props.todos.map(todo => <li key={todo}>{todo}</li>);
	return (
	    <ul>{listItems}</ul>
	);
    }
}


export default TodoItem;
