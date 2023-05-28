import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../store";
import { InputForm } from "./InputForm";
import { deleteList } from "../store/todoList";

export const TodoList: React.FC = () => {
  const stateList = useSelector((state: StateType) => state.todoList);
  const dispatch = useDispatch();
  //   console.log(stateList);
  return (
    <div>
      <InputForm />
      <ul>
        {stateList.map(
          (item) =>
            !item.isDelete && (
              <li key={item.id}>
                {item.title} --
                <button onClick={() => dispatch(deleteList({ id: item.id }))}>
                  删除
                </button>
              </li>
            )
        )}
      </ul>
    </div>
  );
};
