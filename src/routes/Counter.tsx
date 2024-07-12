import { useState } from "react";
import Button from "../components/Button";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const increment: (incrementNumber: number) => void = (incrementNumber) =>
    setCount((count) => count + incrementNumber);
  const reset: () => void = () => setCount(0);
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-3">Counter</h1>
      <div className="flex justify-center content-center mb-3">
        <div className="px-6 py-4 bg-white border border-gray-200 rounded shadow w-auto inline-block">
          {count}
        </div>
      </div>
      <div className="flex gap-4 justify-center">
        <Button onClick={() => increment(1)}>Add 1 </Button>
        <Button onClick={() => increment(3)}>Add 3</Button>
        <Button onClick={() => reset()}>Reset</Button>
      </div>
    </>
  );
};

export default Counter;
