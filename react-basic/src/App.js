
import Button from "./components/Button/Button";
import Hello from "./components/Hello/Hello";
import Post from "./components/Posts/Post";
function App() {
  return (
    <div className="App">
      <Button name="btn1" mystyle="myBtnstyle"/>
      <Button name="btn2"/>
      <Hello text="Hello All"></Hello>
      <Post></Post>
    </div>
  );
}

export default App;
