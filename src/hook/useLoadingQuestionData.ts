import { useParams } from "react-router-dom";
import { getQuestionService } from "../lib/question";
import { useRequest } from "ahooks";

export function useLoadingQuestionData() {
  const { id = "" } = useParams();
  async function load() {
    const data = await getQuestionService(id);
    return data;
  }
  const { loading, data, error } = useRequest(load);
  return { loading, data, error };
}
