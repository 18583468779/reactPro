import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addList, createId } from "../store/todoList";
export const InputForm: React.FC = () => {
  const dispatch = useDispatch();
  const [val, setVal] = useState("");

  const inputOnchange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setVal(e.target.value);
  };
  const add = () => {
    console.log(val);
    const obj = {
      id: createId(),
      title: val,
      isDelete: false,
    };
    dispatch(addList(obj));
    // console.log("123");
  };
  return (
    <div>
      <input type="text" value={val} onChange={inputOnchange} />
      <button onClick={add}>add</button>
    </div>
  );
};
