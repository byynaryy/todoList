import React, { Component } from 'react';


class Form extends Component {
    constructor(props) {
	super(props);
    }

    handleSubmit = (event) => {
	event.preventDefault();
	this.props.handleSubmit();
	//console.log('props: '+props);
    }

    render() {
    return (
	<form onSubmit={this.handleSubmit}>
	    <textarea value={this.props.todo} onChange={this.props.handleChange} />
	    <button type="submit">Submit</button> 
	</form>
    );
    }
}


export default Form;
