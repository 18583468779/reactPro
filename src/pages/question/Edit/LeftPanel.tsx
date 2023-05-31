import * as React from "react";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import { ComponentLib } from "./ComponentLib";
export const LeftPanel: React.FC = () => {
  const tabsItem = [
    {
      key: "componentLib",
      label: (
        <span>
          <AppstoreOutlined />
          组件库
        </span>
      ),
      children: <ComponentLib />,
    },
    {
      key: "layers",
      label: (
        <span>
          <BarsOutlined />
          图层
        </span>
      ),
      children: <div>图层</div>,
    },
  ];

  return (
    <div>
      <Tabs defaultActiveKey="1" items={tabsItem} />
    </div>
  );
};
