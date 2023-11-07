import React,{useState} from 'react'
import UseEffectHookMouseMove  from './UseEffectHookMouseMOve';
function UseEffectHookMouseContainer() {
    const [display, setDisplay] = useState(true);
  return (
    <>
    <div>UseEffectHookMouseContainer</div>
    <button onClick={() => setDisplay(!display)}>Show Mouse Move component</button>
    {display &&  <UseEffectHookMouseMove></UseEffectHookMouseMove>}
    </>
    
  )
}

export default UseEffectHookMouseContainer