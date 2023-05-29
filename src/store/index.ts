import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userReducer";
import { userInfoType } from "../global";

export type StateType = {
  user: userInfoType;
};

export default configureStore({
  reducer: {
    user: userSlice,
  },
});
