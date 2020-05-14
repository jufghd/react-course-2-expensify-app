



import { createStore } from 'redux'

// STORE -> Globalized state

// ACTION -> describe what u wanna do
//        -> ex. INCREMENT, function that returns object

const increment = () => {
	return {
		type: 'INCREMENT'
	}};

const decrement = () => {
	return {
		type: 'DECREMENT'
	}};
// *********************************

// REDUCER -> describe how actions transform to state and to the next state.

const counter =(state=0,action) => {
 switch(action.type) {
	case 'INCREMENT':
	  return state + 1
	case 'DECREMENT':
	  return state - 1;
}};
// ************************************
let store = createStore(counter);

// Display in the console

store.subscribe(() => console.log(store.getState()));
// *****************************************

// DISPATCH -> Execute the action.

store.dispatch(increment());
store.dispatch(increment());
// *************************************
