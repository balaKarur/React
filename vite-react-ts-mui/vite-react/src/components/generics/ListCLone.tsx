type ListProps ={
    items:string[],
    onClick:(item:string)=>void
}
export const ListClone=({items,onClick}:ListProps) => {
    return(
        <div>
            <h2>List Clone</h2>
        {items.map((item,index) => {
               return(
                <div key={index} onClick={() => onClick(item)}>{item}</div>
               )
            })
        }
        </div>
    )
}