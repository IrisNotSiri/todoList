import React, { Component, Fragment } from 'react';
import TodoItem from './todo-item';
import Test from './test';
import './todo-list.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            todoList: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClickBtn = this.handleClickBtn.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
        return (
            <Fragment>
                {/* this is a comment */}
                <label htmlFor="inputArea">Input is here</label>
                <input 
                    id="inputArea"
                    className='input'
                    value={this.state.inputValue}
                    onChange={this.handleChange} />
                <button onClick={this.handleClickBtn}>submit</button>
                <ul ref={(ul)=>{this.ul = ul}}>
                    {this.state.todoList.map((item, index) => {
                        return <TodoItem 
                                key={index}
                                content={item}
                                index={index}
                                deleteItem={this.handleItemDelete}/>
                    })}
                </ul>
                <div>
                   <Test content={this.state.inputValue} />
                </div>
            </Fragment>
        );
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState( () => {
            return {inputValue: value}
        });
    }

    handleClickBtn() {
        
        this.setState((prevState)=>({
            todoList: [...prevState.todoList, prevState.inputValue],
            inputValue:''
        }),
        () => {
            console.log(this.ul.querySelectorAll('div').length)
        }
        );
    }

    handleItemDelete(index) {
        this.setState((preState) => {
            const list = [...preState.todoList];
            list.splice(index,1)
            return {
                todoList: list,
            }
        })
    }
}


export default TodoList;
