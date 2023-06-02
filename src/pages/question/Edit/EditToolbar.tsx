import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
  CopyOutlined,
  BlockOutlined,
} from "@ant-design/icons";
import { Button, Space, Tooltip, message } from "antd";
import * as React from "react";
import { useDispatch } from "react-redux";
import {
  addComponent,
  copyComponentAction,
  lockedComponent,
  removeComponent,
  visibleAndHidden,
} from "../../../store/componentsReducer";
import { useGetComponentInfo } from "../../../hook/useGetComponentInfo";
import { nanoid } from "nanoid";
export const EditToolbar: React.FC = () => {
  const dispatch = useDispatch();
  const { selectComponent, copyComponent } = useGetComponentInfo();
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
  const handleCopy = () => {
    //复制
    dispatch(copyComponentAction());
    message.success("复制成功");
  };

  const handlePaste = () => {
    //粘贴
    const fe_id = nanoid(10);
    if (copyComponent) {
      const newCopyComponent = { ...copyComponent, fe_id };
      dispatch(addComponent(newCopyComponent));
      message.success("粘贴成功");
    }
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
      <Tooltip placement="bottom" title={"复制"}>
        <Button
          shape="circle"
          icon={<CopyOutlined />}
          onClick={handleCopy}
        ></Button>
      </Tooltip>
      <Tooltip placement="bottom" title={"粘贴"}>
        <Button
          shape="circle"
          icon={<BlockOutlined />}
          onClick={handlePaste}
          disabled={copyComponent ? false : true}
        ></Button>
      </Tooltip>
    </Space>
  );
};
