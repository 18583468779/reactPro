import * as React from "react";
import { FileTextOutlined, SettingOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import { ComponentProp } from "./ComponentProp";

export const RightPanel: React.FC = () => {
  const tabsItem = [
    {
      key: "componentLib",
      label: (
        <span>
          <FileTextOutlined />
          属性
        </span>
      ),
      children: <ComponentProp />,
    },
    {
      key: "layers",
      label: (
        <span>
          <SettingOutlined />
          页面设置
        </span>
      ),
      children: <div>页面设置</div>,
    },
  ];

  return (
    <div>
      <Tabs defaultActiveKey="1" items={tabsItem} />
    </div>
  );
};
