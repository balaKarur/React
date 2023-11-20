import React,{useContext} from 'react'
import {UserContext,CompanyContext} from "../../App1"
function CompC() {
  const userC = useContext(UserContext)
  const companyC = useContext(CompanyContext)
  return (
    <>
      <div>CompC has user data from App Component WithOut useContext</div>
    {/* <UserContext.Consumer>
        {
            user => {
                return (<div>User Context value is {user}</div>)
            }
        }
    </UserContext.Consumer> */}
    {/**{userC} if we pass simple string */}
    {/* <div>CompC has user data from App Component With useContext</div>
     <div >{userC} - {companyC}</div> */}
     <div>CompC has user data from UseReducer App Component With useContext</div>
     { <div >{userC.counterState} - {companyC}</div> }
     <button onClick={() => userC.countDispatch('increment')}>Increase Count</button>
    </>
  
  )
}

export default CompC