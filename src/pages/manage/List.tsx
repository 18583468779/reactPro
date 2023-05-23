import { FC } from "react";
import QuestionCard from "../../components/QuestionCard";

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

const List: FC = () => {
  return (
    <div>
      {dataList.map((item) => (
        <QuestionCard key={item._id} {...item} />
      ))}
    </div>
  );
};

export default List;
