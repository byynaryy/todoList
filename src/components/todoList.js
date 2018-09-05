import React, {Component} from 'react';


// Component
import TodoItem  from './todoItem';


const todos = ['run', 'walk', 'sleep'];


class TodoList extends Component {
    render() {
	return (
            <TodoItem todos={todos} />
	);
    }
}


export default TodoList;
