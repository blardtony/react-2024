import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);
  const increment = (incrementNumber: number) => setCount(count => count + incrementNumber);
  return (
    <>
      <h1>Counter</h1>
      <button onClick={() => increment(1)}>Add 1 </button>
      <button onClick={() => increment(3)}>Add 3</button>
      <div>{count}</div>
    </>
  );
}

export default App;
