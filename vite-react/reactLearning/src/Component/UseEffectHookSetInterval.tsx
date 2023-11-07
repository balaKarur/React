import React, { useEffect, useState } from 'react'

function UseEffectHookSetInterval() {
    const [count, setCount] = useState(0);
    function tick(){
        console.log("tick called current count is  : "+count);
        //setCount(count+1); state value wont update , because useEffect not tracked count
        setCount((prevCount) =>  {
            console.log("tick called prevCount is  : "+prevCount);
            return prevCount+1
        });
    }
    useEffect(() => {
        console.log("useEffect - tick");
        const interval = setInterval(tick,1000);
        return () => {
            console.log("useEffect - clearInterval");
            clearInterval(interval);
        }
    },[])
  return (
    <>
    <div>UseEffectHookSetInterval</div>
    <div>Count updated on 1000 Interval : {count}</div>
    </>
    
  )
}

export default UseEffectHookSetInterval