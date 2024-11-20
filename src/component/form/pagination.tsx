import { useState } from "react";

interface Props {
  totalPage: number; // 전체 페이지 수
  perPage?: number; // 표시할 페이지 수
}

function Pagination(props: Props) {
  return (
    <>
      <ul className="pagination">
        {/* 이전 페이지 */}
        <li className="prev double disabled">
          <a href="javascript:;"></a>
        </li>
        <li className="prev single disabled">
          <a href="javascript:;"></a>
        </li>
        {/* 페이지 번호 */}
        <li className="on">
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">5</a>
        </li>
        {/* 다음 페이지 */}
        <li className="next single">
          <a href="javascript:;"></a>
        </li>
        <li className="next double">
          <a href="javascript:;"></a>
        </li>
      </ul>
    </>
  );
}

export default Pagination;
