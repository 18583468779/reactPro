import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { userInfoType } from "../global";

const INIT_STATE: userInfoType = { username: "", nickname: "" };

export const userSlice = createSlice({
  name: "user",
  initialState: INIT_STATE,
  reducers: {
    loginReducer: (
      state: userInfoType,
      action: PayloadAction<userInfoType>
    ) => {
      return action.payload;
    },
    logoutReducer: () => INIT_STATE,
  },
});

export const { loginReducer, logoutReducer } = userSlice.actions;
export default userSlice.reducer;
