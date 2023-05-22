import { FC } from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const NotFound: FC = () => (
  <div style={{ height: "100%", marginTop: "100px" }}>
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to={"/"}>
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  </div>
);

export default NotFound;
