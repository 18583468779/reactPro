import { useSelector } from "react-redux";
import { StateType } from "../store";

export const useGetComponentInfo = () => {
  const state = useSelector<StateType>((state) => state.components);
  return { state };
};
