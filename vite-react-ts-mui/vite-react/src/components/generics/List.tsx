import { ReactNode } from "react";
type ListProps<T> = {
    items:T[]
    onClick:(value: T) => void
}
type anotherType={
    id:number
    name:string
}
// To support generic only for string and number
//export const List = <T extends string | number>({items,onClick}:ListProps<T>) => {
//To support generic for any type
export const List = <T extends number|string | anotherType >({items,onClick}:ListProps<T>) => {
    return (
        <div>
            <h2>List of Items</h2>
            {items.map((item,index) => {
                if(typeof item === "object"){
                    return (<div key={index} onClick={() => onClick(item)}>
                        {JSON.stringify(item) as ReactNode}
                    </div>)
                }
                //this for string and number
                return(<div key={index} onClick={() => onClick(item)}>
                        {item}
                        </div>
                )}

            })}
        </div>
    )
}