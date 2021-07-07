import { createStore, applyMiddleware, compose  } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

//1. store is unique, only one store in whole app
//2. only store can change store
//3. reducer is a pure function
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);


const store = createStore(reducer,
    enhancer
    );

export default store;