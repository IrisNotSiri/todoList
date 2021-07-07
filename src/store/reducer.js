import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, GET_INIT_LIST } from './actionTypes';

const defaultState = {
    inputValue: "input here",
    todoList: []
}

export default (state=defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState
    };
 
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.todoList.push(newState.inputValue);
        newState.inputValue = "";
        return newState
    };
    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.todoList.splice(action.index, 1);
        return newState
    };
    if (action.type === GET_INIT_LIST) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.todoList = action.data;
        return newState
    };


    return state
}