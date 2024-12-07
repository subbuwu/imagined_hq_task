import { TodoItem } from "@/types";

interface TodoItemProps {
  todo: TodoItem;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoElement: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => (
  <div className="flex items-start space-x-4 rounded-lg bg-white p-4 shadow">
    <button
      onClick={() => onToggle(todo.id)}
      className={`mt-1 h-6 w-6 flex-shrink-0 rounded-full border-2 ${
        todo.completed ? "border-black bg-black" : "border-gray-300 bg-white"
      }`}
    >
      {todo.completed && (
        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </button>
    <div className="flex-1">
      <h3 className={`font-semibold ${todo.completed ? "text-gray-400 line-through" : "text-gray-900"}`}>
        {todo.text}
      </h3>
      <p className="text-sm text-gray-500">{todo.description}</p>
    </div>
    <button onClick={() => onDelete(todo.id)} className="text-gray-400 hover:text-gray-600">
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </button>
  </div>
);

export default TodoElement;
