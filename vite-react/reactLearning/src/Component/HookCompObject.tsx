import React, {useState} from 'react'

function HookCompObject() {
    const [name,setName] = useState({firstName:"bala",lastName:"V"});
  return (
    <>
    <div>HookCompObject</div>
    <form>
        <input type="text" value={name.firstName} onChange={(event) => setName({...name,firstName:event.target.value})}></input>
        <input type="text" value={name.lastName} onChange={(event) => setName({...name,lastName:event.target.value})}></input>
        <h2>Your first name is - {name.firstName} </h2>
        <h2>Your last name is -  {name.lastName} </h2>
    </form>
    </>
    
  )
}

export default HookCompObject