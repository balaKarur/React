//use componenet inside another componenet
type OscarProps = {
    children:React.ReactNode //React.ReactNode is to specifty teh react component type
}
function Oscar(pops:OscarProps){
    return ( <div>{pops.children}</div>)
}
export default Oscar;