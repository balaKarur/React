type PostProps = {
    title:string;
    count?:number;
    isLoggedIn:boolean
}
import User from "./User";
const user ={
    firstName:"Bala",
  }
  const address=[{
    title:"KA"
  },
  {
    title:"TN"
  }]
function Post(props:PostProps){
    //default props
    const {count = 0} = props;
return (
    <>
    <div>{props.isLoggedIn ? `${props.title} : ${count}`  : `Please Login`}</div>
    {props.isLoggedIn ?
    <User  basicDetails={user} address={address}></User> : ''
     }
    </>
)
}
export default Post