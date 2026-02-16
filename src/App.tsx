import { useEffect, useState } from "react";
import "./App.css";
import Greeting from "./components/Greeting";

function App() {
  const name = "Mr Bob";
  const [age,setAge] = useState<number>(19);
  const [user,setUser] = useState<null | {name:string;email:string}>(null)
  useEffect(()=>{
    setUser({
      name:"Alice",
      email:"alice@gmail.com"
    })
  },[])
  const [count,setCount] = useState<number>(0)
  return (
    <>
      <h1>React With TypeScript</h1>
      {count} <br />
      <button onClick={()=>setCount(count+1)}>increase count</button>
      <button onClick={()=>setCount(count-1)}>decrease count</button>
      {
        user && <p>Name:{user.name} <br />Email:{user.email}</p>
      }
      <Greeting name={name} age={age}></Greeting>
    </>
  );
}

export default App;
