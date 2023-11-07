import React from 'react'
import CompB  from './CompB'; 
function CompA() {
  return (
    <>
    <div>UseContext</div>
    <div>CompA include CompB</div>
     <CompB></CompB>
    </>
    
  )
}

export default CompA