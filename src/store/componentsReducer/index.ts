import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ComponentPropsType } from "../../components/QuestionComponents";
import { getNextSelectedId } from "./utils";

export type ComponentInfoType = {
  fe_id: string;
  type: string;
  isHidden?: boolean;
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
    //重置所有组件
    resetComponents: (
      state: ComponentsStateType,
      action: PayloadAction<ComponentsStateType>
    ) => {
      return action.payload;
    },
    //选中画布组件
    changeComponentId: (
      state: ComponentsStateType,
      action: PayloadAction<string>
    ) => {
      return { ...state, id: action.payload };
    },
    //添加新组件
    addComponent: (
      state: ComponentsStateType,
      action: PayloadAction<ComponentInfoType>
    ) => {
      //获取对应的id，将新的组件插入在后面
      const index = state.componentList.findIndex(
        (item) => item.fe_id === state.id
      );
      let newComponentList = state.componentList.slice();
      if (index >= 0) {
        newComponentList.splice(index + 1, 0, action.payload);
      } else {
        newComponentList = newComponentList.concat(action.payload);
      }
      return {
        ...state,
        componentList: newComponentList,
        id: action.payload.fe_id,
      };
    },
    //同步画布数据
    syncComponent: (
      state: ComponentsStateType,
      action: PayloadAction<{ id: string; val: ComponentPropsType }>
    ) => {
      const { val } = action.payload;
      const index = state.componentList.findIndex(
        (item) => item.fe_id === state.id
      );
      state.componentList[index].props = val;
      return state;
    },
    //删除组件
    removeComponent: (state: ComponentsStateType) => {
      const newState = state.componentList.filter((c) => c.fe_id !== state.id);
      const newSelectedId = getNextSelectedId(state.id, state.componentList);
      return { id: newSelectedId, componentList: newState };
    },
    //隐藏显示组件
    visibleAndHidden: (
      state: ComponentsStateType,
      action: PayloadAction<{ isHidden: boolean }>
    ) => {
      const { isHidden } = action.payload;
      const index = state.componentList.findIndex(
        (item) => item.fe_id === state.id
      );
      const newSelectedId = getNextSelectedId(state.id, state.componentList);
      state.id = newSelectedId;
      const newState = state.componentList.slice();
      newState[index].isHidden = isHidden;
      return state;
    },
  },
});

export const {
  resetComponents,
  changeComponentId,
  addComponent,
  syncComponent,
  removeComponent,
  visibleAndHidden,
} = componentsSlice.actions;

export default componentsSlice.reducer;
