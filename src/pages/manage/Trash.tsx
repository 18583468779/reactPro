import React, { FC, useState } from "react";
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
import styles from "../../components/common.module.scss";
import { ListSearch } from "../../components/ListSearch";

const { Title } = Typography;
const { confirm } = Modal;

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
const Trash: FC = () => {
  useTitle("我的问卷 - 回收站");
  const [data, setData] = useState(dataList);

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
          dataSource={data}
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
      <div style={{ marginTop: "50px" }}>
        {/* {
          <div style={{ textAlign: "center" }}>
            <Spin />
          </div>
        } */}
        {data.length === 0 && <Empty description="暂无数据" />}
        {data.length > 0 && TableElem}
      </div>
      <div>footer</div>
    </>
  );
};

export default Trash;
