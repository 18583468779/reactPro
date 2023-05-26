import { useRequest } from "ahooks";
import { getQuestionAllService } from "../lib/question";
import { useSearchParams } from "react-router-dom";
import { SEARCH_INPUT_VAL } from "../constant";
import { ParamsType } from "../global";

export const useSearchQuestionData = (option?: ParamsType) => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get(SEARCH_INPUT_VAL) || "";
  const {
    data = {},
    error,
    loading,
  } = useRequest(
    async () => {
      const data = await getQuestionAllService({ keyword, ...option });
      return data;
    },
    {
      refreshDeps: [searchParams], //刷新请求的依赖
    }
  );

  return { data, error, loading };
};
