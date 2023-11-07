import React,{useContext} from 'react'
import {UserContext,CompanyContext} from "../../App"
function CompC() {
  const userC = useContext(UserContext)
  const companyC = useContext(CompanyContext)
  return (
    <>
      <div>CompC has user data from App Component WithOut useContext</div>
    <UserContext.Consumer>
        {
            user => {
                return (<div>User Context value is {user}</div>)
            }
        }
    </UserContext.Consumer>
    <div>CompC has user data from App Component With useContext</div>
     <div >{userC} - {companyC}</div>
    </>
  
  )
}

export default CompC