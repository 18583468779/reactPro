import * as React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;

const onSearch = (value: string) => console.log(value);
export const ListSearch: React.FC = () => {
  return (
    <div>
      <Space>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </Space>
    </div>
  );
};
