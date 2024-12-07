"use client";
import { useTodoStore } from "@/store";
import TodoList from "./TodoList";
import TodoAddModal from "./AddTodoModal";
import DatePicker from "./DatePicker";

export const Todo = () => {
  const { todos, currentDate, addTodo, toggleTodo, deleteTodo, updateCurrentDate } =
    useTodoStore();

  const todaysTodos = todos.filter((todo) => todo.date === currentDate);

  const handleAddTodo = (text: string, description: string) => {
    if (text.trim()) {
      addTodo({
        text,
        description,
        completed: false,
        date: currentDate, 
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 md:p-8">
      <div className="mx-auto max-w-lg rounded-2xl bg-white p-4 pb-1 shadow-lg">
        <DatePicker selectedDate={currentDate} onDateChange={updateCurrentDate} />
      </div>
      <div className="p-4 mt-4">
      <TodoList
          todos={todaysTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
        <TodoAddModal onAdd={handleAddTodo} />
      </div>
    </div>
  );
};
