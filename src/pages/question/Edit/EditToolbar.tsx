import { DeleteOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";
import * as React from "react";
import { useDispatch } from "react-redux";
import {
  removeComponent,
  visibleAndHidden,
} from "../../../store/componentsReducer";
export const EditToolbar: React.FC = () => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    //删除
    dispatch(removeComponent());
  };

  const handleHidden = () => {
    //隐藏
    dispatch(visibleAndHidden({ isHidden: true }));
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
      <Tooltip placement="bottom" title={"隐藏"}>
        <Button
          shape="circle"
          icon={<EyeInvisibleOutlined />}
          onClick={handleHidden}
        ></Button>
      </Tooltip>
    </Space>
  );
};
