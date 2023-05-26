import { FC } from "react";
import { useTitle } from "ahooks";
import {
  Typography,
  Empty,
  Table,
  Tag,
  Button,
  Space,
  Modal,
  Spin,
  message,
} from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { ListSearch } from "../../components/ListSearch";
import { useSearchQuestionData } from "../../hook/useSearchQuestionData";
import QuestionCard from "../../components/QuestionCard";
import { ListPagination } from "../../components/ListPagination";

const { Title } = Typography;
const { confirm } = Modal;

const Trash: FC = () => {
  useTitle("我的问卷 - 回收站");
  const {
    data = {},
    error,
    loading,
  } = useSearchQuestionData({ isDeleted: true });
  const { list = [], total = 0 } = data;

  function del() {
    confirm({
      title: "确认彻底删除该问卷？",
      icon: <ExclamationCircleOutlined />,
      content: "删除以后不可以找回",
      onOk: message.success("删除成功"),
    });
  }

  const tableColumns = [
    {
      title: "标题",
      dataIndex: "title",
      // key: 'title', // 循环列的 key ，它会默认取 dataIndex 的值
    },
    {
      title: "是否发布",
      dataIndex: "isPublished",
      render: (isPublished: boolean) => {
        return isPublished ? (
          <Tag color="processing">已发布</Tag>
        ) : (
          <Tag>未发布</Tag>
        );
      },
    },
    {
      title: "答卷",
      dataIndex: "answerCount",
    },
    {
      title: "创建时间",
      dataIndex: "createdAt",
    },
  ];

  const TableElem = (
    <>
      <div style={{ marginBottom: "16px" }}>
        <Space>
          <Button type="primary" disabled={data.length === 0}>
            恢复
          </Button>
          <Button danger disabled={data.length === 0} onClick={del}>
            彻底删除
          </Button>
        </Space>
      </div>
      <div style={{ border: "1px solid #e8e8e8" }}>
        <Table
          dataSource={list}
          columns={tableColumns}
          pagination={false}
          rowKey={(q) => q._id}
          rowSelection={{
            type: "checkbox",
            onChange: (selectedRowKeys) => {
              console.log(selectedRowKeys);
            },
          }}
        />
      </div>
    </>
  );

  return (
    <>
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
        <div>{list.length !== 0 && <ListPagination total={total} />}</div>
      </div>

      <div>footer</div>
    </>
  );
};

export default Trash;
