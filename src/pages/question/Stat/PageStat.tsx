import { useRequest } from "ahooks";
import * as React from "react";
import { getQuestionStatListService } from "../../../lib/stat";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Pagination, Spin, Table } from "antd";
import { useGetComponentInfo } from "../../../hook/useGetComponentInfo";
import { ListPagination } from "../../../components/ListPagination";

type PropsType = {
  selectedComponentId: string;
  setSelectedComponentId: (id: string) => void;
  setSelectedComponentType: (type: string) => void;
};

export const PageStat: React.FC<PropsType> = (props) => {
  const {
    selectedComponentId,
    setSelectedComponentId,
    setSelectedComponentType,
  } = props;
  const { id = "" } = useParams();
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { loading } = useRequest(
    async () => {
      const res = await getQuestionStatListService(id, {
        page,
        pageSize,
      });
      return res;
    },
    {
      refreshDeps: [page, pageSize, id],
      onSuccess(res) {
        const { total, list = [] } = res;
        setList(list);
        setTotal(total);
      },
    }
  );

  const { componentList } = useGetComponentInfo();
  const columns = componentList.map((c) => {
    const { fe_id, title, props = {}, type } = c;

    const colTitle = props.title || title;
    return {
      title: (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            setSelectedComponentId(fe_id);
            setSelectedComponentType(type);
          }}
        >
          {fe_id === selectedComponentId ? (
            <span style={{ color: "#1890ff" }}>{colTitle}</span>
          ) : (
            <span>{colTitle}</span>
          )}
        </div>
      ),
      dataIndex: fe_id,
    };
  });
  const dataSource = list.map((item: any) => ({ ...item, key: item._id }));
  const TableElem = (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </>
  );

  return (
    <div>
      <h3>{!loading && total}</h3>
      {loading && (
        <div style={{ textAlign: "center" }}>
          <Spin />
        </div>
      )}
      {!loading && TableElem}
      <Pagination
        total={total}
        pageSize={pageSize}
        current={page}
        onChange={(page) => setPage(page)}
        onShowSizeChange={(page, pageSize) => {
          setPage(page);
          setPageSize(pageSize);
        }}
      />
    </div>
  );
};
