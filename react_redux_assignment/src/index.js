import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore} from 'redux';
import {Provider, useSelector} from 'react-redux';





function increment() {
  return{type:"INCREMENT"};  
}
function decrement() {
  return{type:"DECREMENT"};
}


function counterReducer(state={count:0},action) {
  switch (action.type) {
    case "INCREMENT":
      return {count:state.count+1};
  
    case "DECREMENT":
      return {count:state.count-1};
  
    default:
      return state;
  }
  
}


const myStore= createStore(counterReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



const p=()=>myStore.dispatch(increment());

myStore.subscribe(()=>{console.log(myStore.getState())});







export default function Sagar() {
  // const [countvar, setcountvar] = useState()
  let countvar = useSelector((state) => state.count);
  
  return (
    <div>
      <button onClick={p}>ADD</button>
      <h1>count: {countvar}</h1>  
    </div>
  )
}

ReactDOM.render(
  <>
  <Provider store={myStore}>
    <Sagar />
  </Provider>
  </>,
   document.getElementById('root')
);

