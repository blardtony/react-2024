import { createBrowserRouter } from "react-router-dom";
import Index from "./routes";
import Counter from "./routes/Counter";
import Todo from "./routes/Todo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
]);
