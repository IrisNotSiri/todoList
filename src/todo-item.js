import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    render() {
        return (
        <div>
        <h5 onClick={this.handleClick}>{this.props.content} +++ {this.props.front}</h5>
        
        </div>
        )
    }

    handleClick() {
        this.props.deleteItem(this.props.index);
    }
}

TodoItem.propTypes = {
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func,
    front: PropTypes.string.isRequired
}

TodoItem.defaultProps = {
    front: "YOYO"
}

export default TodoItem;