import type { UsersProps } from "../Types/UserTypes";
// type UsersProps ={
//     basicDetails:{
//         name:string
//     }[]
// }
function Users(props:UsersProps){
    return(
        <>
        <div>User Details {JSON.stringify(props.basicDetails)}</div>
        {
            props.basicDetails.map(item => {
               return( <div>{item.name}</div>)
            })
        }
        </>
    )
}

export default Users;