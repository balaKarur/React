import React, { useEffect, useState } from 'react'

function UseEffectHookMouseMove() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    function handleMouseMove(e:any){
        console.log("handleMouseMove called");
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(() => {
        console.log("useEffect- handleMouseMove called");
       window.addEventListener("mouseover",handleMouseMove);
       //clean up code for event listener
       return () => {
          console.log("Component unmounted");
          window.removeEventListener("mouseover",handleMouseMove);
       }
    },[])
  return (
    <>
    <div>UseEffectHookMouseMove</div>
    <span>Mouse over : {x}:{y}</span>
    </>
    
  )
}

export default UseEffectHookMouseMove