import { useState } from "react";

interface TodoAddModalProps {
  onAdd: (text: string, description: string) => void;
}

const TodoAddModal: React.FC<TodoAddModalProps> = ({ onAdd }) => {
  const [newTodoText, setNewTodoText] = useState("");
  const [newTodoDesc, setNewTodoDesc] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddTodo = () => {
    onAdd(newTodoText, newTodoDesc);
    setNewTodoText("");
    setNewTodoDesc("");
    setShowAddModal(false);
  };

  return (
    <>
      <button
        onClick={() => setShowAddModal(true)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg hover:bg-gray-800 md:h-16 md:w-16 mt-4"
      >
        <svg className="h-6 w-6 md:h-8 md:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>

      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-96 rounded-lg bg-white p-6 md:p-8">
            <h2 className="mb-4 text-xl font-bold md:text-2xl">Add New Task</h2>
            <input
              type="text"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
              placeholder="Task title"
              className="mb-4 w-full rounded border p-2 md:p-3"
            />
            <input
              type="text"
              value={newTodoDesc}
              onChange={(e) => setNewTodoDesc(e.target.value)}
              placeholder="Description"
              className="mb-4 w-full rounded border p-2 md:p-3"
            />
            <div className="flex justify-end space-x-2 md:space-x-4">
              <button
                onClick={() => setShowAddModal(false)}
                className="rounded px-4 py-2 text-gray-600 hover:bg-gray-100 md:px-6 md:py-3"
              >
                Cancel
              </button>
              <button
                onClick={handleAddTodo}
                className="rounded bg-black px-4 py-2 text-white hover:bg-gray-800 md:px-6 md:py-3"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoAddModal;
