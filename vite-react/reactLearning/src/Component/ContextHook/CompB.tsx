import React from 'react'
import CompC  from './CompC'; 
function CompB() {
  return (
    <>
    <div>CompB include CompC</div>
    <CompC></CompC>
    </>
  )
}

export default CompB