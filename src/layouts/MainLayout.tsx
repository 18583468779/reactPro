import * as React from "react";
import { Outlet } from "react-router-dom";
export const MainLayout: React.FC = () => {
  return (
    <>
      <div>mainLayout header</div>
      <div>
        <Outlet />
      </div>
      <div>mainLayout footer</div>
    </>
  );
};
