import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../Todos/TodosSlice";

export default configureStore({
  reducer: {
    todo: todosReducer,
  },
});
