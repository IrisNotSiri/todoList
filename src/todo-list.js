
import React, { Component } from 'react';
import TodoListUI from './todo-listUI';
import store from './store';
import { getChangeInputValueAction, getAddTodoItemAction, getDeleteTodoItem, getTodoListAction } from './store/actionCreators';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

   componentDidMount() {
    const action = getTodoListAction();
    store.dispatch(action);
   }

    render() {
        return (
            <TodoListUI 
            inputValue = {this.state.inputValue}
            handleChange = {this.handleChange}
            handleClickBtn = {this.handleClickBtn}
            todoList = {this.state.todoList}
            handleItemDeleteInUI = {this.handleItemDelete}
            />
        )
    }

    handleChange(e) {
        const action = getChangeInputValueAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange() {
       this.setState(
          store.getState()
       );
    }

    handleClickBtn() {
        const action = getAddTodoItemAction();
        store.dispatch(action);
    }

    handleItemDelete(index) {
        const action = getDeleteTodoItem(index);
        store.dispatch(action);
    }
}


export default TodoList;
