import React,{useState} from 'react'

function HookCompArray() {
    const [items, setItem] = useState([] as { id: number; value: number; }[]);
  function addNumber(){
    setItem(() => [...items,{id:items.length, value: Math.floor(Math.random() * 10)}] )
  }
  return (
    <>
    <div>HookCompArray</div>
    <button onClick={() => addNumber()}>Add a number</button>
    <ul>
        {
            items.map((item) => (
                <li key={item.id}>{item.value}</li>
            ) )
        }
    </ul>
    
    </>
    

  )
}

export default HookCompArray