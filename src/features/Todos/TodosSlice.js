import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("initialState")
  ? JSON.parse(localStorage.getItem("initialState"))
  : [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
      localStorage.setItem("initialState", JSON.stringify(state));
    },
    editTodo(state, action) {
      const { id, title, details } = action.payload;
      const existingTodo = state.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.title = title;
        existingTodo.content = details;
      }
      localStorage.setItem("initialState", JSON.stringify(state));
    },

    deleteTodo(state, action) {
      state = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("initialState", JSON.stringify(state));
      return state;
    },
  },
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
