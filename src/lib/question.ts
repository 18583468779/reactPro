import axios from "./ajax";
import { ResType } from "../global";

//获取问卷
export async function getQuestionService(id: string): Promise<ResType> {
  const url = `/api/question/${id}`;
  const data = (await axios.get(url)) as ResType;
  return data;
}

//创建问卷
export async function createQuestionService(): Promise<{ id: string }> {
  const url = `/api/question`;
  const data = (await axios.post(url)) as { id: string };
  return data;
}
