import { Pagination, PaginationProps } from "antd";
import * as React from "react";
import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { PAGE_SIZE, SEARCH_PAGE_SIZE_VAL, SEARCH_PAGE_VAL } from "../constant";

type Props = {
  total: number;
};

export const ListPagination: React.FC<Props> = (props) => {
  const { total } = props;

  const nav = useNavigate();
  const { pathname } = useLocation();
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE);
  const [searchParams] = useSearchParams(); //获取每页的条数

  useEffect(() => {
    const page = parseInt(searchParams.get(SEARCH_PAGE_VAL) || "") || 1;
    setCurrent(page);

    const pageSize =
      parseInt(searchParams.get(SEARCH_PAGE_SIZE_VAL) || "") || PAGE_SIZE;
    setPageSize(pageSize);
  }, [searchParams]);

  const onChange: PaginationProps["onChange"] = (page, pageSize) => {
    setCurrent(page);
    setPageSize(pageSize);
    searchParams.set(SEARCH_PAGE_VAL, page.toString());
    searchParams.set(SEARCH_PAGE_SIZE_VAL, pageSize.toString());
    nav({
      pathname,
      search: searchParams.toString(),
    });
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <Pagination
        current={current}
        onChange={onChange}
        total={total}
        pageSize={pageSize}
      />
    </div>
  );
};
