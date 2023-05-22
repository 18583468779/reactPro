import * as React from "react";
import { Outlet } from "react-router-dom";
export const QuestionLayout: React.FC = () => {
  return (
    <>
      <div>QuestionLayout header</div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
