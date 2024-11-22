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
          <a href="javascript:;">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10.992"
              height="10.999"
              viewBox="0 0 10.992 10.999"
            >
              <g
                id="그룹_1"
                data-name="그룹 1"
                transform="translate(-452.501 -310.496)"
              >
                <g
                  id="arrow-down-sign-to-navigate"
                  transform="translate(555.641 310.495) rotate(90)"
                >
                  <path
                    id="패스_16"
                    data-name="패스 16"
                    d="M5.5,103.14a.786.786,0,0,1-.545-.216L.226,98.4a.715.715,0,0,1,0-1.042.8.8,0,0,1,1.089,0l4.185,4,4.185-4a.8.8,0,0,1,1.089,0,.715.715,0,0,1,0,1.042l-4.73,4.526A.786.786,0,0,1,5.5,103.14Z"
                  />
                </g>
                <g
                  id="arrow-down-sign-to-navigate-2"
                  data-name="arrow-down-sign-to-navigate"
                  transform="translate(560.637 310.495) rotate(90)"
                >
                  <path
                    id="패스_16-2"
                    data-name="패스 16"
                    d="M5.5,103.14a.786.786,0,0,1-.545-.216L.226,98.4a.715.715,0,0,1,0-1.042.8.8,0,0,1,1.089,0l4.185,4,4.185-4a.8.8,0,0,1,1.089,0,.715.715,0,0,1,0,1.042l-4.73,4.526A.786.786,0,0,1,5.5,103.14Z"
                  />
                </g>
              </g>
            </svg>
          </a>
        </li>
        <li className="prev single disabled">
          <a href="javascript:;">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5.996"
              height="10.999"
              viewBox="0 0 5.996 10.999"
            >
              <g
                id="arrow-down-sign-to-navigate"
                transform="translate(103.14 -0.001) rotate(90)"
              >
                <path
                  id="패스_16"
                  data-name="패스 16"
                  d="M5.5,103.14a.786.786,0,0,1-.545-.216L.226,98.4a.715.715,0,0,1,0-1.042.8.8,0,0,1,1.089,0l4.185,4,4.185-4a.8.8,0,0,1,1.089,0,.715.715,0,0,1,0,1.042l-4.73,4.526A.786.786,0,0,1,5.5,103.14Z"
                />
              </g>
            </svg>
          </a>
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
          <a href="javascript:;">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5.996"
              height="10.999"
              viewBox="0 0 5.996 10.999"
            >
              <g
                id="arrow-down-sign-to-navigate"
                transform="translate(103.14 -0.001) rotate(90)"
              >
                <path
                  id="패스_16"
                  data-name="패스 16"
                  d="M5.5,103.14a.786.786,0,0,1-.545-.216L.226,98.4a.715.715,0,0,1,0-1.042.8.8,0,0,1,1.089,0l4.185,4,4.185-4a.8.8,0,0,1,1.089,0,.715.715,0,0,1,0,1.042l-4.73,4.526A.786.786,0,0,1,5.5,103.14Z"
                />
              </g>
            </svg>
          </a>
        </li>
        <li className="next double">
          <a href="javascript:;">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10.992"
              height="10.999"
              viewBox="0 0 10.992 10.999"
            >
              <g
                id="그룹_1"
                data-name="그룹 1"
                transform="translate(-452.501 -310.496)"
              >
                <g
                  id="arrow-down-sign-to-navigate"
                  transform="translate(555.641 310.495) rotate(90)"
                >
                  <path
                    id="패스_16"
                    data-name="패스 16"
                    d="M5.5,103.14a.786.786,0,0,1-.545-.216L.226,98.4a.715.715,0,0,1,0-1.042.8.8,0,0,1,1.089,0l4.185,4,4.185-4a.8.8,0,0,1,1.089,0,.715.715,0,0,1,0,1.042l-4.73,4.526A.786.786,0,0,1,5.5,103.14Z"
                  />
                </g>
                <g
                  id="arrow-down-sign-to-navigate-2"
                  data-name="arrow-down-sign-to-navigate"
                  transform="translate(560.637 310.495) rotate(90)"
                >
                  <path
                    id="패스_16-2"
                    data-name="패스 16"
                    d="M5.5,103.14a.786.786,0,0,1-.545-.216L.226,98.4a.715.715,0,0,1,0-1.042.8.8,0,0,1,1.089,0l4.185,4,4.185-4a.8.8,0,0,1,1.089,0,.715.715,0,0,1,0,1.042l-4.73,4.526A.786.786,0,0,1,5.5,103.14Z"
                  />
                </g>
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </>
  );
}

export default Pagination;
