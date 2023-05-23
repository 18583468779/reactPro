import { FC, useState } from "react";
import QuestionCard from "../../components/QuestionCard";
import { Empty, Typography } from "antd";

const dataList = [
  {
    _id: "1",
    title: "问卷1",
    isStar: false,
    isPublished: false,
    answerCount: 100,
    createdAt: "2023-05-23 9:03",
  },
  {
    _id: "2",
    title: "问卷2",
    isStar: true,
    isPublished: true,
    answerCount: 100,
    createdAt: "2023-05-23 9:03",
  },
  {
    _id: "3",
    title: "问卷3",
    isStar: false,
    isPublished: false,
    answerCount: 100,
    createdAt: "2023-05-23 9:03",
  },
];

const { Title } = Typography;
const List: FC = () => {
  const [data, setData] = useState(dataList);
  return (
    <div>
      <div>
        <Title level={3}>我的问卷</Title>
      </div>
      <div>
        {data.length === 0 && <Empty description="暂无数据" />}
        {data.length !== 0 &&
          data.map((item) => <QuestionCard key={item._id} {...item} />)}
      </div>
    </div>
  );
};

export default List;
