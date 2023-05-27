import { FC, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Space, Divider, Tag, Popconfirm, Modal, message } from "antd";
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

import styles from "./QuestionCard.module.scss";
import { useRequest } from "ahooks";
import {
  duplicateQuestionService,
  updateQuestionService,
} from "../lib/question";

type PropsType = {
  _id: string;
  title: string;
  isStar: boolean;
  isPublished: boolean;
  answerCount: number;
  createdAt: string;
};

const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const nav = useNavigate();
  const { _id, title, createdAt, answerCount, isPublished, isStar } = props;
  const { confirm } = Modal;

  const [isStarState, setIsStarState] = useState(isStar);

  const { loading: isStarLoading, run: isStarRun } = useRequest(
    async () => {
      //标星和取消标星
      await updateQuestionService(_id, { isStar: !isStarState });
    },
    {
      manual: true,
      onSuccess() {
        setIsStarState(!isStarState);
        message.success("标星操作完成");
      },
    }
  );

  const { loading: duplicateLoading, run: duplicateRun } = useRequest(
    //复制问卷
    async () => await duplicateQuestionService(_id),
    {
      manual: true,
      onSuccess(res) {
        message.success("复制成功");
        nav(`/question/edit/${res.id}`);
      },
    }
  );

  const deleteFn = () => {
    confirm({
      title: "请确认是否删除？",
      icon: <ExclamationCircleOutlined />,
      onOk: () => message.success("删除"),
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <Link
            to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}
          >
            <Space>
              {isStarState && <StarOutlined style={{ color: "red" }} />}
              {title}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
          <Space>
            {isPublished ? (
              <Tag color="processing">已发布</Tag>
            ) : (
              <Tag>未发布</Tag>
            )}
            <span>答卷: {answerCount}</span>
            <span>{createdAt}</span>
          </Space>
        </div>
      </div>
      <Divider style={{ margin: "12px 0" }} />
      <div className={styles["button-container"]}>
        <div className={styles.left}>
          <Space>
            <Button
              icon={<EditOutlined />}
              type="text"
              size="small"
              onClick={() => nav(`/question/edit/${_id}`)}
            >
              编辑问卷
            </Button>
            <Button
              icon={<LineChartOutlined />}
              type="text"
              size="small"
              onClick={() => nav(`/question/stat/${_id}`)}
              disabled={!isPublished}
            >
              问卷统计
            </Button>
          </Space>
        </div>
        <div className={styles.right}>
          <Space>
            <Button
              type="text"
              icon={<StarOutlined />}
              size="small"
              disabled={isStarLoading}
              onClick={isStarRun}
            >
              {isStarState ? "取消标星" : "标星"}
            </Button>

            <Popconfirm
              title="确定复制该问卷？"
              okText="确定"
              cancelText="取消"
              onConfirm={duplicateRun}
            >
              <Button
                type="text"
                icon={<CopyOutlined />}
                size="small"
                disabled={duplicateLoading}
              >
                复制
              </Button>
            </Popconfirm>

            <Button
              type="text"
              icon={<DeleteOutlined />}
              size="small"
              disabled={isPublished}
              onClick={deleteFn}
            >
              删除
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
