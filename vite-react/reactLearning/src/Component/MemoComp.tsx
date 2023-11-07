import React from "react";
const MemoComp = ({name}:{name:string}) => {
    console.log("I am from Memo")
    return(
       <div>{name}</div>
    )
}
export default React.memo(MemoComp);