import * as React from "react";
import styles from "./StatHeader.module.scss";
import {
  Button,
  Input,
  InputRef,
  Popover,
  Space,
  Tooltip,
  Typography,
  message,
} from "antd";
import { CopyOutlined, LeftOutlined, QrcodeOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useRef } from "react";
import QRCode from "qrcode.react";

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

    const QRCodeElem = (
      <div style={{ textAlign: "center" }}>
        <QRCode value={url} size={150} />
      </div>
    );
    return (
      <Space>
        <Input value={url} style={{ width: "300px" }} ref={inputRef} />
        <Tooltip title="拷贝链接">
          <Button icon={<CopyOutlined />} onClick={() => copy()}></Button>
        </Tooltip>
        <Popover content={QRCodeElem}>
          <Button icon={<QrcodeOutlined />}></Button>
        </Popover>
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
