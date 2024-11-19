import { useState } from "react";

interface Props {
  totalPage: number; // 전체 페이지 수
  perPage: number; // 표시할 페이지 수
}

function Pagination(props: Props) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageGroup, setPageGroup] = useState<number>(1);

  // 페이지 이동
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= props.totalPage) {
      setCurrentPage(page);
    }
  };

  // 이전 페이지로 이동
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      // setCurrentPage(currentPage - props.perPage);
    }
  };
  // 다음 페이지로 이동
  const handleNextPage = () => {
    if (currentPage < props.totalPage) {
      setCurrentPage(currentPage + 1);
      // setCurrentPage(currentPage + props.perPage);
    }
  };

  // 표시할 페이지 수 계산
  const startPage = Math.max(1, currentPage - Math.floor(props.perPage / 2));
  const endPage = Math.min(props.totalPage, startPage + props.perPage - 1);

  return (
    <>
      <ul className="pagination">
        {/* 이전 페이지 */}
        <li className={`prev double ${currentPage === 1 ? "disabled" : ""}`}>
          <a
            href="javascript:;"
            onClick={e => {
              e.preventDefault();
              handlePageChange(1);
            }}
          ></a>
        </li>
        <li className={`prev single ${currentPage === 1 ? "disabled" : ""}`}>
          <a
            href="javascript:;"
            onClick={e => {
              e.preventDefault();
              handlePrevPage();
            }}
          ></a>
        </li>
        {/* 페이지 번호 */}
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
          const page = startPage + index;
          return (
            <li key={page} className={page === currentPage ? "on" : ""}>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  handlePageChange(page);
                }}
              >
                {page}
              </a>
            </li>
          );
        })}
        {/* 다음 페이지 */}
        <li
          className={`next single ${
            currentPage === props.totalPage ? "disabled" : ""
          }`}
        >
          <a
            href="javascript:;"
            onClick={e => {
              e.preventDefault();
              handleNextPage();
            }}
          ></a>
        </li>
        <li
          className={`next double ${
            currentPage === props.totalPage ? "disabled" : ""
          }`}
        >
          <a
            href="javascript:;"
            onClick={e => {
              e.preventDefault();
              handlePageChange(props.totalPage);
            }}
          ></a>
        </li>
      </ul>
    </>
  );
}

export default Pagination;
