import React from "react";
import TodoItem from "./TodoItem";

type TodoItemType = {
  id: number;
  name: string;
  completed: boolean;
};

type Todos = TodoItemType[];
const TodosWrapper: React.FC<{ todos: Todos }> = ({ todos }) => {
  return (
    <div className="max-w-sm mx-auto mt-5">
      {todos.length ? (
        <>
          <h2 className="text-2xl font-bold">Tâches</h2>
          <div className="grid gap-2 ms-5">
            {todos.map((todo) => {
              return <TodoItem key={todo.id} {...todo} />;
            })}
          </div>
        </>
      ) : (
        <h2 className="text-2xl font-bold">Pas de tâches</h2>
      )}
    </div>
  );
};

export default TodosWrapper;
