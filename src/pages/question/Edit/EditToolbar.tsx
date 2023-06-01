import { DeleteOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";
import * as React from "react";
import { useDispatch } from "react-redux";
import { removeComponent } from "../../../store/componentsReducer";
export const EditToolbar: React.FC = () => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeComponent());
  };

  return (
    <Space>
      <Tooltip placement="bottom" title={"删除"}>
        <Button
          shape="circle"
          icon={<DeleteOutlined />}
          onClick={handleDelete}
        ></Button>
      </Tooltip>
    </Space>
  );
};
