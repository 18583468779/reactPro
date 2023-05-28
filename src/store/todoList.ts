import { createSlice } from "@reduxjs/toolkit";
export type todoListType = {
  id: number;
  title: string;
  isDelete: boolean;
};
let id = 0;

export function createId() {
  id += 1;
  return id;
}

const INIT_STATE = [
  {
    id: createId(),
    title: "吃饭",
    isDelete: false,
  },
  {
    id: createId(),
    title: "睡觉",
    isDelete: false,
  },
];

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: INIT_STATE,
  reducers: {
    addList(state, action) {
      return [action.payload, ...state];
    },
    deleteList(state, action) {
      const { id } = action.payload;
      return state.filter((item) => item.id !== id);
    },
  },
});

export const { addList, deleteList } = todoListSlice.actions;

export default todoListSlice.reducer;
