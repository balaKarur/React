import "./App.css"
import Create from "./Components/Create";
import Update from "./Components/Update";
import Read from "./Components/Read";
import Delete from "./Components/Delete";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App(){
  return (
    <div className="main"> 
    <h2>CURD Operation</h2>
    <BrowserRouter>
    <Routes>
      <Route exact path="/create" element={<Create/>}/>
      <Route exact path="/update" element={<Update/>}/>
      <Route exact path="/read" element={<Read/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App; 