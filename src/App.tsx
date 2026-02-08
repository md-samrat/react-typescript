import "./App.css";
import Greeting from "./components/Greeting";

function App() {
  const name = "Mr Bob";
  const age = 23
  return (
    <>
      <h1>React With TypeScript</h1>
      <Greeting name={name} age={age}></Greeting>
    </>
  );
}

export default App;
