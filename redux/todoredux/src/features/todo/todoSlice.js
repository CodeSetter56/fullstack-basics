import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  //global state to store the todo which is being edited
  editableTodo: null,
};

// Create a slice of the Redux store for todos
export const todoSlice = createSlice({
  // Define the slice with a name, initial state, and reducers
  name: "todo",
  initialState,
  reducers: {
    //state->current State, action->parameter that contains the payload
    addTodo: (state, action) => {
      //data to be added using useDispatch from AddTodo.jsx
      const newTodo = {
        id: nanoid(),
        title: action.payload,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      //data to be removed using useDispatch from Todos.jsx
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
        state.editableTodo = null;
      }
    },
    setEditableTodo: (state, action) => {
      state.editableTodo = action.payload;
    },
    clearEditableTodo: (state) => {
      state.editableTodo = null;
    },
  },
});

// Export the actions to be used in components
export const {
  addTodo,
  removeTodo,
  updateTodo,
  setEditableTodo,
  clearEditableTodo,
} = todoSlice.actions;

// Export the reducer to be used in the store as todoReducer
export default todoSlice.reducer;
