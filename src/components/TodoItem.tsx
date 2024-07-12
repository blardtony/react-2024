type TodoItemType = {
  id: number;
  name: string;
  completed: boolean;
};
const TodoItem: React.FC<TodoItemType> = ({ id, name, completed }) => {
  return (
    <div id={String(id)}>
      <p>
        <span>{name}</span>
        <span>{completed ? "✅" : "❌"}</span>
      </p>
    </div>
  );
};

export default TodoItem;
