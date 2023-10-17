type UserProps ={
    address?:{title:string}[],//by defuine ? mark , its become optional props
    basicDetails:{
        firstName:string
    }
    
}
function User(props:UserProps){
 return (
    <>
    <div> Login User Details : {props.basicDetails.firstName}</div>
      <div> 
       <h3>My Address List</h3> 
            {
                props.address?.map(add => {
                    return (
                    <div>{add.title}</div>
                    )
                })
            }
     </div>
    </>
 )
}
export default User;