import { useTitle } from "ahooks";
import { Button } from "antd";
import { FC } from "react";

const Home: FC = () => {
  useTitle("我的主页");
  return (
    <div>
      Home<Button type="primary">Button</Button>
    </div>
  );
};

export default Home;
