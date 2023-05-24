import axios from "./ajax";
import { ResType } from "../global";
export async function getQuestionService(id: string): Promise<ResType> {
  const url = `/api/question/${id}`;
  const data = (await axios.get(url)) as ResType;
  return data;
}
