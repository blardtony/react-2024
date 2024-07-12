import { createBrowserRouter } from "react-router-dom";
import Index from "./routes";
import Counter from "./routes/Counter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
]);
