import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo,clearEditableTodo,updateTodo } from "../features/todo/todoSlice";
import { useEffect } from "react";

function AddTodo() {
  const [title, setTitle] = useState("");
  //useDispatch to send data
  const dispatch = useDispatch();
  const editableTodo = useSelector((state) => state.editableTodo);

  //on initial render, if editableTodo is not null, set the title to the editableTodo's title
  useEffect(() => {
    if (editableTodo) setTitle(editableTodo.title);
    else setTitle("");
  }, [editableTodo]);

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (editableTodo) {
      dispatch(updateTodo({ id: editableTodo.id, title }));
    } else {
      dispatch(addTodo(title));
      setTitle("");
    }
  };

  return (
    <form onSubmit={submitTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        type="submit"
        className="text-white bg-green-600 order-0 py-1 px-4 focus:outline-none hover:bg-green-700 rounded text-md"
      >
        {editableTodo ? "Save" : "Add Todo"}
      </button>

      {/* Optional: Add a cancel button */}
      {editableTodo && (
        <button
          type="button"
          onClick={() => dispatch(clearEditableTodo())}
          className="text-white bg-gray-500 order-0 py-1 px-4 focus:outline-none hover:bg-gray-600 rounded text-md"
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default AddTodo;
