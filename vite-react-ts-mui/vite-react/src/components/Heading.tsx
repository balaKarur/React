//passing content inside html tag mean the need to use children keyword
type HeadingProps ={
    children:string
}
function Heading(props:HeadingProps){
    return(<div>{props.children} </div>)

}
export default Heading