import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";

const Todo = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");
  const inputTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };
  const addTask : React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setTasks((tasks) => [...tasks, task]);
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
            name="Tâche"
            value={task}
            onChange={inputTaskChange}
          />
        </div>
        <Button type="submit">Ajouter</Button>
      </form>
      <div className="mt-5">
        <h2 className="text-2xl font-bold">Tâches</h2>
        <ul className="list-disc list-inside">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
