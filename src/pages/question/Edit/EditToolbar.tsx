import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";
import * as React from "react";
import { useDispatch } from "react-redux";
import {
  lockedComponent,
  removeComponent,
  visibleAndHidden,
} from "../../../store/componentsReducer";
import { useGetComponentInfo } from "../../../hook/useGetComponentInfo";
export const EditToolbar: React.FC = () => {
  const dispatch = useDispatch();
  const { selectComponent } = useGetComponentInfo();
  const { isLocked } = selectComponent || {};
  const handleDelete = () => {
    //删除
    dispatch(removeComponent());
  };

  const handleHidden = () => {
    //隐藏
    dispatch(visibleAndHidden({ isHidden: true }));
  };

  const handleLocked = () => {
    //锁定
    dispatch(lockedComponent());
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
      <Tooltip placement="bottom" title={"锁定"}>
        <Button
          shape="circle"
          icon={<LockOutlined />}
          onClick={handleLocked}
          type={isLocked ? "primary" : "text"}
        ></Button>
      </Tooltip>
    </Space>
  );
};
