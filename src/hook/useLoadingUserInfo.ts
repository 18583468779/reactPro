import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../store";
import { userInfoType } from "../global";
import { useRequest } from "ahooks";
import { getUserService } from "../lib/user";
import { loginReducer } from "../store/userReducer";

export const useLoadingUserInfo = () => {
  const dispatch = useDispatch();
  const [waitUserData, setWaitUserData] = useState(true);

  const { run } = useRequest(getUserService, {
    //统一获取用户信息
    manual: true,
    onSuccess(result) {
      const { username, nickname } = result;
      setWaitUserData(false);
      //存 redux
      dispatch(loginReducer({ username, nickname }));
    },
    onFinally() {
      setWaitUserData(false);
    },
  });

  const { username } = useSelector<StateType>(
    (state) => state.user
  ) as userInfoType;

  useEffect(() => {
    if (username) {
      //如果已经登录，就不用发起请求
      setWaitUserData(false);
      return;
    }
    run();
  }, [username]);
  return { waitUserData };
};
