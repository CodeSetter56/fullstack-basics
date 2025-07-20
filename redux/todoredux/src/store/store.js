import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  // Configure the Redux store with the todoReducer
  reducer: {
    todo:todoReducer, //keep the name same as the slice name
  }
});
