import { useRequest } from "ahooks";
import { getQuestionAllService } from "../lib/question";
import { useSearchParams } from "react-router-dom";
import { SEARCH_INPUT_VAL } from "../constant";

export const useSearchQuestionData = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get(SEARCH_INPUT_VAL) || "";
  const {
    data = {},
    error,
    loading,
  } = useRequest(
    async () => {
      const data = await getQuestionAllService({ keyword });
      return data;
    },
    {
      refreshDeps: [searchParams], //刷新请求的依赖
    }
  );

  return { data, error, loading };
};
