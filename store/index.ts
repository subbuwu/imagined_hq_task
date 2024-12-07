import { TodoStore } from '@/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],
      currentDate: new Date().toISOString().split('T')[0],
      addTodo: (todo) =>
        set((state) => ({
          todos: [...state.todos, { ...todo, id: crypto.randomUUID() }],
        })),
      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        })),
      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      editTodo: (id, updates) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, ...updates } : todo
          ),
        })),
      updateCurrentDate: (date) =>
        set(() => ({
          currentDate: date,
        })),
    }),
    {
      name: 'todo-storage',
    }
  )
);
