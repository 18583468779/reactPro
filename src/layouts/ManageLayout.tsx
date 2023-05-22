import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./ManageLayout.module.scss";
export const ManageLayout: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        ManageLayout left
        <button>创建问卷</button>
        <div>
          <Link to={"/"}>我的问卷</Link>
        </div>
        <div>
          <Link to={"/"}>星标问卷</Link>
        </div>
        <div>
          <Link to={"/"}>回收站</Link>
        </div>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  );
};
