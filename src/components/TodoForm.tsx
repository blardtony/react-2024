import React from "react";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
type TodoFormProps = {
  task: string;
  addTask: React.FormEventHandler<HTMLFormElement>;
  inputTaskChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const TodoForm: React.FC<TodoFormProps> = ({
  task,
  addTask,
  inputTaskChange,
}) => {
  return (
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
  );
};

export default TodoForm;
