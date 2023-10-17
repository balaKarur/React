export type ProfilePros ={
    name:string
}
export const Profile = ({name}:ProfilePros) => {
    return (
     <div>Profile Component Name is {name}</div>
    )
 }