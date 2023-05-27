import axios from "./ajax";
import { DataType, ParamsType, ResType } from "../global";

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

//获取（所有）问卷包括星标问卷，回收问卷
export async function getQuestionAllService(
  params: Partial<ParamsType> = {}
): Promise<DataType> {
  const url = `/api/question`;
  const data = (await axios.get(url, { params })) as DataType;
  return data;
}

//更新问卷
export async function updateQuestionService(id: string, opt: DataType) {
  const url = `/api/question/${id}`;
  const data = await axios.patch(url, opt);
  return data;
}

//复制问卷
export async function duplicateQuestionService(id: string): Promise<DataType> {
  const url = `/api/question/duplicate/${id}`;
  const data = (await axios.post(url, id)) as DataType;
  return data;
}

//删除问卷
export async function deleteQuestionService(ids: string[]): Promise<DataType> {
  const url = `/api/question`;
  const data = (await axios.delete(url, { data: { ids } })) as DataType;
  return data;
}
