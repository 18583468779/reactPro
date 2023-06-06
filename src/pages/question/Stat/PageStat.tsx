import { useRequest } from "ahooks";
import * as React from "react";
import { getQuestionStatListService } from "../../../lib/stat";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Spin } from "antd";

type PropsType = {
  selectedComponentId: string;
  setSelectedComponentId: (id: string) => void;
  setSelectedComponentType: (type: string) => void;
};

export const PageStat: React.FC<PropsType> = () => {
  const { id = "" } = useParams();
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(null);
  const { loading } = useRequest(
    async () => {
      const res = await getQuestionStatListService(id, {
        page: 1,
        pageSize: 10,
      });
      return res;
    },
    {
      onSuccess(res) {
        const { total, list = [] } = res;
        setList(list);
        setTotal(total);
      },
    }
  );
  return (
    <div>
      <h3>{!loading && total}</h3>
      {loading && (
        <div style={{ textAlign: "center" }}>
          <Spin />
        </div>
      )}
    </div>
  );
};
