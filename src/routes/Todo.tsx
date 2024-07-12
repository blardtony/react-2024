import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import { v4 as uuidv4 } from "uuid";
import TodosWrapper from "../components/TodosWrapper";

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
      <form className="max-w-sm mx-auto grid gap-5" onSubmit={addTask}>
        <div>
          <Label id="task" name="Tâche" />
          <Input
            id="task"
            placeholder="Qu'allez vous faire aujourd'hui ?"
            value={task}
            onChange={inputTaskChange}
          />
        </div>
        <Button type="submit">Ajouter</Button>
      </form>
      <TodosWrapper todos={tasks} />
    </div>
  );
};

export default Todo;
