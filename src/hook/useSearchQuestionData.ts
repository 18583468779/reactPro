import { useRequest } from "ahooks";
import { getQuestionAllService } from "../lib/question";
import { useSearchParams } from "react-router-dom";
import {
  PAGE_SIZE,
  SEARCH_INPUT_VAL,
  SEARCH_PAGE_SIZE_VAL,
  SEARCH_PAGE_VAL,
} from "../constant";
import { ParamsType } from "../global";

export const useSearchQuestionData = (option?: ParamsType) => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get(SEARCH_INPUT_VAL) || "";
  const page = parseInt(searchParams.get(SEARCH_PAGE_VAL) || "") || 1;
  const pageSize =
    parseInt(searchParams.get(SEARCH_PAGE_SIZE_VAL) || "") || PAGE_SIZE;

  const {
    data = {},
    error,
    loading,
  } = useRequest(
    async () => {
      const data = await getQuestionAllService({
        keyword,
        page,
        pageSize,
        ...option,
      });
      return data;
    },
    {
      refreshDeps: [searchParams], //刷新请求的依赖
    }
  );

  return { data, error, loading };
};
