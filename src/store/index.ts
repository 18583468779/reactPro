import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userReducer";
import { userInfoType } from "../global";
import componentsSlice from "./componentsReducer";

export type StateType = {
  user: userInfoType;
};

export default configureStore({
  reducer: {
    user: userSlice,
    components: componentsSlice,
  },
});
