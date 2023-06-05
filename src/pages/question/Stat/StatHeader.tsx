import * as React from "react";
import styles from "./StatHeader.module.scss";
import {
  Button,
  Input,
  InputRef,
  Space,
  Tooltip,
  Typography,
  message,
} from "antd";
import { CopyOutlined, LeftOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useRef } from "react";

const { Title } = Typography;

export const StatHeader: React.FC = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const inputRef = useRef<InputRef>(null);
  function copy() {
    //
    const elem = inputRef.current;
    if (elem === null) return;
    elem.select();
    document.execCommand("copy");
    message.success("链接已复制");
  }

  function genLinkAndQRCodeElem() {
    const url = `http://127.0.0.1:3000/question/${id}`;
    return (
      <Space>
        <Input value={url} style={{ width: "300px" }} ref={inputRef} />
        <Tooltip title="拷贝链接">
          <Button icon={<CopyOutlined />} onClick={() => copy()}></Button>
        </Tooltip>
      </Space>
    );
  }

  return (
    <div className={styles["header-wrapper"]}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Space>
            <Button type="link" icon={<LeftOutlined />} onClick={() => nav(-1)}>
              返回
            </Button>
            <Title>标题</Title>
          </Space>
        </div>
        <div className={styles.main}>{genLinkAndQRCodeElem()}</div>
        <div className={styles.right}>
          <Button type="primary" onClick={() => nav(`/question/edit/${id}`)}>
            编辑问卷
          </Button>
        </div>
      </div>
    </div>
  );
};
