import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, GET_INIT_LIST } from './actionTypes';
import axios from 'axios';

export const getChangeInputValueAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddTodoItemAction = () => ({
    type: ADD_TODO_ITEM
});

export const getDeleteTodoItem = (index) => ({
    type: DELETE_TODO_ITEM,
    index
});

export const getInitAction = (data) => ({
    type: GET_INIT_LIST,
    data
});

export const getTodoListAction = () => {
    return (dispatch) => {
        axios.get('http://localhost:3000/item').then((res) => {
            const data = res.data;
            console.log(data);
            const action = getInitAction(data);
            console.log("2",action);
            dispatch(action);
        });
    };
};



