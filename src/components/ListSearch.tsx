import * as React from "react";
import { Input, Space } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { SEARCH_INPUT_VAL } from "../constant";
const { Search } = Input;

export const ListSearch: React.FC = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const [inputVal, setInputVal] = useState("");
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputVal(e.target.value);
  };

  const onSearch = (value: string) => {
    nav({
      pathname,
      search: `${SEARCH_INPUT_VAL}=${value}`,
    });
  };

  useEffect(() => {
    const inputVal = searchParams.get(SEARCH_INPUT_VAL) || "";
    setInputVal(inputVal);
  }, [searchParams]);

  return (
    <div>
      <Space>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          value={inputVal}
          onChange={onChange}
        />
      </Space>
    </div>
  );
};
