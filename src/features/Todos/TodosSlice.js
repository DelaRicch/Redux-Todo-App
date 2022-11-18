import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// const initialState = localStorage.getItem("initialState")
//   ? JSON.parse(localStorage.getItem("initialState"))
//   : [];

// Using Cookies to get stored state
let result = Cookies.get("initialState");
result = JSON.parse(result);
const initialState = result;

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
      // localStorage.setItem("initialState", JSON.stringify(state));

      Cookies.set("initialState", JSON.stringify(state));
    },
    editTodo(state, action) {
      const { id, title, details } = action.payload;
      const existingTodo = state.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.title = title;
        existingTodo.details = details;
      }
      // localStorage.setItem("initialState", JSON.stringify(state));
      Cookies.set("initialState", JSON.stringify(state));
    },

    deleteTodo(state, action) {
      state = state.filter((item) => item.id !== action.payload);
      // localStorage.setItem("initialState", JSON.stringify(state));
      Cookies.set("initialState", JSON.stringify(state));
      return state;
    },
  },
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
