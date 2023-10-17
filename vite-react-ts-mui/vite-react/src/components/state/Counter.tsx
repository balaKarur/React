import { useReducer } from "react"
const InitialState ={count :0};
type CounterState ={
    count:number
}
type UpdateAction ={
    type:'increment'|'decrement'|'reset',
    payload:number
}
type ResetAction ={
    type:'reset',
}
type CounterAction = UpdateAction|ResetAction;

function reducer(state:CounterState,action:CounterAction){
    switch(action.type){
        case 'increment':
            return {count:state.count + action.payload};
        case 'decrement':
            return {count:state.count - action.payload};
        case 'reset':
            return InitialState;
        default:
            return state;
    }
}
export const  Counter = () => {
    const [state, dispatch] = useReducer(reducer, InitialState);
   return (
    <>
    <h2>Counter Use Reducer</h2>
    Count :{ state.count}
    <button onClick={() => dispatch({type:'increment',payload:10})}>Increment 10</button>
    <button onClick={() => dispatch({type:'decrement',payload:10})}>Decrement 10</button>
    <button onClick={() => dispatch({type:'reset'})}>Reset to 0</button>
    </>
   )
}