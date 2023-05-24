import { useTitle } from "ahooks";
import { Button, Typography } from "antd";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MANAGE_INDEX_PATHNAME } from "../router";
import styles from "./Home.module.scss";
// import "../_mock/index";
import axios from "axios";

const { Title, Paragraph } = Typography;
const Home: FC = () => {
  useEffect(() => {
    axios.get("api/test").then((res) => console.log(res));
  }, []);

  useTitle("我的主页");
  const nav = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>问卷调查 | 在线投票</Title>
        <Paragraph>已累计创建问卷100份，发布问卷90份，收到问卷100份</Paragraph>
        <div>
          <Button type="primary" onClick={() => nav(MANAGE_INDEX_PATHNAME)}>
            开始使用
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
