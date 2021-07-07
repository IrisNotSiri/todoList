import React, { Component, Fragment } from 'react';
import './todo-list.css';
import TodoItem from './todo-item';

// const TodoListUI = (props) => {
//     return (
//         <Fragment>
//             <label htmlFor="inputArea">Input is here</label>
//             <input 
//                 id="inputArea"
//                 className='input'
//                 value={props.inputValue}
//                 onChange={props.handleChange} />
//             <button onClick={props.handleClickBtn}>submit</button>
//             <ul>
//                 {props.todoList.map((item, index) => {
//                     return <TodoItem 
//                             key={index}
//                             content={item}
//                             index={index}
//                             deleteItem={this.deleteCurrItem.bind(this)}
//                             />
//                 })}
//             </ul>
//         </Fragment>
//     );
// };
//wu zhuang tai zu jian (dang zu jian zhi you render hanshu, meiyou qita renhe luoji, keyiyong wuzhuangtai zujian tihuan class, tigao xingneng)

class TodoListUI extends Component {
    render () {
        return (
            <Fragment>
                <label htmlFor="inputArea">Input is here</label>
                <input 
                    id="inputArea"
                    className='input'
                    value={this.props.inputValue}
                    onChange={this.props.handleChange} />
                <button onClick={this.props.handleClickBtn}>submit</button>
                <ul>
                    {this.props.todoList.map((item, index) => {
                        return <TodoItem 
                                key={index}
                                content={item}
                                index={index}
                                deleteItem={this.deleteCurrItem.bind(this)}
                                />
                    })}
                </ul>
            </Fragment>
        );
    };


    deleteCurrItem(index) {
        this.props.handleItemDeleteInUI(index)
    }
};

export default TodoListUI;