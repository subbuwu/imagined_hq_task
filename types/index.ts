
export interface TodoItem {
  id: string;
  text: string;
  description: string;
  completed: boolean;
  date: string;
}

export interface TodoStore {
  todos: TodoItem[];
  currentDate: string;
  addTodo: (todo: Omit<TodoItem, 'id'>) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, updates: Partial<Omit<TodoItem, 'id'>>) => void;
  updateCurrentDate: (date: string) => void;
}
