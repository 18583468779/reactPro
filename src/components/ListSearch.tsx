import * as React from "react";
import { Input, Space } from "antd";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { SEARCH_INPUT_VAL } from "../constant";
import { getQuestionAllService } from "../lib/question";
import { useSearchQuestionData } from "../hook/useSearchQuestionData";
const { Search } = Input;

export const ListSearch: React.FC = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const [inputVal, setInputVal] = useState("");
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputVal(e.target.value);
  };

  const onSearch = async (value: string) => {
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
