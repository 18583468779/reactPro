import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./count";
import todoListReducer, { todoListType } from "./todoList";
export type StateType = {
  count: number;
  todoList: todoListType[];
};

export default configureStore({
  reducer: {
    count: countReducer,
    todoList: todoListReducer,
  },
});
