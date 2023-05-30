import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ComponentPropsType } from "../../components/QuestionComponents";

export type ComponentInfoType = {
  fe_id: string;
  type: string;
  title: string;
  props: ComponentPropsType;
};

export type ComponentsStateType = {
  id: string;
  componentList: Array<ComponentInfoType>;
};

const INIT_STATE: ComponentsStateType = {
  id: "",
  componentList: [],
};

export const componentsSlice = createSlice({
  name: "components",
  initialState: INIT_STATE,
  reducers: {
    //重置所以组件
    resetComponents: (
      state: ComponentsStateType,
      action: PayloadAction<ComponentsStateType>
    ) => {
      return action.payload;
    },
    //选中组件
    changeComponentId: (
      state: ComponentsStateType,
      action: PayloadAction<string>
    ) => {
      return { ...state, id: action.payload };
    },
  },
});

export const { resetComponents, changeComponentId } = componentsSlice.actions;

export default componentsSlice.reducer;
