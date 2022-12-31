import {useState , useMemo, useEffect} from "react";
function App()
{
   const [number,setNumber]= useState(0);
   const [dark,setDark] = useState(false);
   //useMemo use to cache teh previous state value 
   const doubleNumber = useMemo( () => slowFunction(number),[number]);
   const themeStyle =useMemo(() => {
     return{
        backgroundColor : dark ? "black" :"white",
        color : dark ? "white" : "black"
     }
   },[dark])

   useEffect(() => {
      console.log("Theme changed...");
   },[dark])

  return (
    <div>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}></input>
      <button onClick={() => setDark(Predark => !Predark)}>Change Theme</button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  )
}

function slowFunction(num)
{
  console.log("Calling slow function");
  for(let i=0;i<=10000;i++){}
  return num*2;
}

export default App;