import { useContext, useState, useEffect } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
  todos: [],
  addTodo: () => {},
  editTodo: () => {},
  deleteTodo: () => {},
  checkTodo: () => {},
});

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      body: text,
      checked: false,
    };
    //spread operator to create a new array with the new todo
    setTodos((prev) => [...prev, newTodo]);
  };

  const editTodo = (id, text) => {
    setTodos((prev) => {
      return prev.map((todo) =>
        // spread operator to create a new todo object with updated text
        todo.id === id ? { ...todo, body: text } : todo
      );
    });
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const checkTodo = (id) => {
    setTodos((prev) => {
      return prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      );
    });
  };

  // Load todos from localStorage on initial render
  useEffect(() => {
    // Check if todos exist in localStorage
    const todosString = localStorage.getItem("todos");
    if (todosString) {
      try {
        const parsedTodos = JSON.parse(todosString);
        // Ensure parsedTodos is an array and has items
        if (Array.isArray(parsedTodos) && parsedTodos.length > 0) {
          setTodos(parsedTodos);
        }
      } catch (e) {
        console.error("Failed to parse todos from localStorage:", e);
        localStorage.removeItem("todos");
      }
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, editTodo, deleteTodo, checkTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};
