import React, {useState, useEffect}from 'react'

function UseEffectHook() {
  const [count, setcount] = useState(0);
  const [name, setName] = useState("")
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  },[count])
  useEffect(() => {
   console.log("useEffect called");
   
  },[count])//useEffect hook will be invoked only count value changes
  return (
    <>
    <div>useEffectHook will be invoked only on count change</div>
    <input type="text" value={name}  onChange={(event) => setName(event.target.value)}/>
    <button onClick={() => setcount((count) => count+1)}>Clicked {count} button</button>
    </>
    
  )

}

export default UseEffectHook