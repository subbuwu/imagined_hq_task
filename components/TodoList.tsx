import TodoElement from "./TodoElement";
import { TodoItem } from "@/types";

interface TodoListProps {
  todos: TodoItem[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => (
  <div className="space-y-4">
    {todos.map((todo) => (
      <TodoElement key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
    ))}
  </div>
);

export default TodoList;
