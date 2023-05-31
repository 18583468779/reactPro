import { useSelector } from "react-redux";
import { StateType } from "../store";
import {
  ComponentInfoType,
  ComponentsStateType,
} from "../store/componentsReducer";

export const useGetComponentInfo = () => {
  const { componentList, id } = useSelector<StateType>(
    (state) => state.components
  ) as ComponentsStateType;

  const selectComponent = componentList.find(
    (c) => c.fe_id === id
  ) as ComponentInfoType;

  return { componentList, id, selectComponent };
};
