import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div onClick={this.onItemDeleted.bind(this)}>
        <h5>{this.props.content} </h5>
        </div>
        )
    }
    onItemDeleted() {
        this.props.deleteItem(this.props.index);

    }
    
}

export default TodoItem;

// 