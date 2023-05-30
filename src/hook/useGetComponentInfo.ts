import { useSelector } from "react-redux";
import { StateType } from "../store";
import { ComponentsStateType } from "../store/componentsReducer";

export const useGetComponentInfo = () => {
  const { componentList, id } = useSelector<StateType>(
    (state) => state.components
  ) as ComponentsStateType;
  return { componentList, id };
};
