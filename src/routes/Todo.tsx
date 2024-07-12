import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodosWrapper from "../components/TodosWrapper";
import TodoForm from "../components/TodoForm";

type Todo = {
  id: number;
  name: string;
  completed: boolean;
};
const Todo = () => {
  const [tasks, setTasks] = useState<Todo[]>([]);
  const [task, setTask] = useState<string>("");
  const inputTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };
  const addTask: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setTasks((tasks) => [
      ...tasks,
      { id: uuidv4(), name: task, completed: false },
    ]);
    setTask("");
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-3">Todo App</h1>
      <TodoForm
        task={task}
        addTask={addTask}
        inputTaskChange={inputTaskChange}
      />
      <TodosWrapper todos={tasks} />
    </div>
  );
};

export default Todo;
