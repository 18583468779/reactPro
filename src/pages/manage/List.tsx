import { FC, useEffect, useState } from "react";
import QuestionCard from "../../components/QuestionCard";
import { Empty, Spin, Typography } from "antd";
import { useRequest, useTitle } from "ahooks";
import { ListSearch } from "../../components/ListSearch";
import { getQuestionAllService } from "../../lib/question";

const { Title } = Typography;
const List: FC = () => {
  useTitle("我的问卷 - 列表");

  const { data = {}, error, loading } = useRequest(getQuestionAllService);
  const { list = [], total = 0 } = data;
  console.log(data);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title level={3}>我的问卷</Title>
        <div>
          <ListSearch />
        </div>
      </div>
      {loading ? (
        <div style={{ textAlign: "center" }}>
          <Spin />
        </div>
      ) : null}
      <div style={{ marginTop: "50px" }}>
        {!loading && list.length === 0 && <Empty description="暂无数据" />}
        {list.length !== 0 &&
          list.map((item: any) => <QuestionCard key={item._id} {...item} />)}
      </div>
    </div>
  );
};

export default List;
