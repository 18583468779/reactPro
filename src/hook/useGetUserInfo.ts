import { useSelector } from "react-redux";
import { StateType } from "../store";
import { userInfoType } from "../global";

export function useGetUserInfo() {
  const { username, nickname } = useSelector<StateType>(
    (state) => state.user
  ) as userInfoType;
  return { username, nickname };
}
