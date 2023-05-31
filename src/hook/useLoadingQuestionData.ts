import { useParams } from "react-router-dom";
import { getQuestionService } from "../lib/question";
import { useRequest } from "ahooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetComponents } from "../store/componentsReducer";

export function useLoadingQuestionData() {
  const { id = "" } = useParams();
  const dispatch = useDispatch();
  //请求
  const { data, loading, run, error } = useRequest(
    async (id: string) => {
      if (!id) throw new Error("没有问卷 id");
      const data = await getQuestionService(id);
      return data;
    },
    {
      manual: true,
    }
  );

  //根据data设置 redux store
  useEffect(() => {
    if (!data) return;
    const { title = "", componentList = [] } = data;

    //设置默认选中的组件
    let selectId = "";
    if (componentList.length > 0) {
      console.log(componentList[0]);
      selectId = componentList[0].fe_id;
    }

    //componentList存储到redux
    dispatch(resetComponents({ componentList, id: selectId }));
  }, [data]);

  //根据id判断执行ajax

  useEffect(() => {
    run(id);
  }, [id]);
  return { loading, error };
}
