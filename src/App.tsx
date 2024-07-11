import { useState } from "react";
import "./App.css";

const Button = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <button onClick={onClick}>{children}</button>
);

function App() {
  const [count, setCount] = useState<number>(0);
  const increment = (incrementNumber: number) => setCount(count => count + incrementNumber);
  return (
    <>
      <h1>Counter</h1>
      <Button onClick={() => increment(1)}>Add 1 </Button>
      <Button onClick={() => increment(3)}>Add 3</Button>
      <div>{count}</div>
    </>
  );
}

export default App;
