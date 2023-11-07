import React, { useState,useReducer } from 'react'
 const initialState = 0;
 //action is instructor to the  reducer function
 const reducerFn:any = (currentState:any,action:any) => {
    switch(action){
        case "increment":
            return currentState +1
        case "decrement":
            return currentState +1
        case "reset":
            return initialState
        default:
            return currentState
    }
}
function CounterUseReducer() {
    //thru dispatch we have to  call reducer function by passing action type
    const [count,dispatch] = useReducer(reducerFn,initialState)
    //const [count, setCount] = useState(initialState);
  return (
    <>
    <div>Counter UseReducer1</div>
    <span>Count is {count}</span>
    {/* <button onClick={() => setCount(count+1)}>Increment</button>
    <button onClick={() => setCount(count-1)}>Decrement</button>
    <button onClick={() => setCount(initialState)}>Reset</button> */}
    <button onClick={() => dispatch("increment")}>Increment</button>
    <button onClick={() => dispatch("decrement")}>Decrement</button>
    <button onClick={() => dispatch("reset")}>Reset</button>
    </>
    
  )
}

export default CounterUseReducer