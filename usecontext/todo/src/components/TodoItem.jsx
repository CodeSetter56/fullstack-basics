import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { editTodo, deleteTodo, checkTodo } = useTodo();
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.body);
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.checked ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        // This checkbox will toggle the checked state of the todo
        checked={todo.checked}
        onChange={() => checkTodo(todo.id)}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.checked ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 readOnly:opacity-50"
        onClick={() => {
          // If the todo is checked, do not allow editing
          if (todo.checked) return;

          if (isTodoEditable) {
            editTodo(todo.id, todoMsg);
            // After saving, set the todo as not editable
            setIsTodoEditable(false);
          }
          // If not editable, toggle to editable state 
          else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.checked}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
