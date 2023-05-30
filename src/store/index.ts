import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userReducer";
import { userInfoType } from "../global";
import componentsSlice, { ComponentsStateType } from "./componentsReducer";

export type StateType = {
  user: userInfoType;
  components: ComponentsStateType;
};

export default configureStore({
  reducer: {
    user: userSlice,
    components: componentsSlice,
  },
});
