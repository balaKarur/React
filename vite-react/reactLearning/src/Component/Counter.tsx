import { useState } from "react"
export const Counter = () => {
    const [count, setCount] = useState(0);
    // function onIncrement(){
    //     setCount(count+1);
    // }
    // function onDecrement(){
    //     setCount(count-1)
    // }
    function onIncrementBy5(){
        for(let i=1;i<=5;i++)
        {
            setCount(prevCount => prevCount+1)
        }
    }
    return (
        <>
        <span>Count : {count}</span><br></br>
        <button onClick={() => setCount(count => count+1)}>Increment</button>
        <button onClick={() => setCount(count => count-1)}>Decrement</button>
        <button onClick={onIncrementBy5}>Increment by 5</button>
        </>
    )
}
