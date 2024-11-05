import React from "react";

function Table() {
  return (
    <div className="container">
      <div className="area">
        <p>리스트 테이블</p>
        <div className="table_wrap">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>소속</th>
                <th>성명</th>
                <th>직급</th>
                <th>직책</th>
                <th>핸드폰</th>
                <th>이메일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button className="icon ham_btn"></button>
                </td>
                <td className="ellipsis_td">
                  <p className="ellipsis">
                    한국경제신문&gt;기획조정실1&gt;기획조정실1-1&gt;기획조정실1-2&gt;기획조정실1-3
                  </p>
                </td>
                <td>홍길동</td>
                <td className="black5">-</td>
                <td className="black5">사원</td>
                <td className="black5">010-1234-1234</td>
                <td className="black5">hk1@hubdnc.com</td>
              </tr>
              <tr>
                <td>
                  <button className="icon ham_btn"></button>
                </td>
                <td className="ellipsis_td">
                  <p className="ellipsis">
                    한국경제신문&gt;기획조정실1&gt;기획조정실1-1&gt;기획조정실1-2&gt;기획조정실1-3
                  </p>
                </td>
                <td>홍길동</td>
                <td className="black5">-</td>
                <td className="black5">사원</td>
                <td className="black5">010-1234-1234</td>
                <td className="black5">hk1@hubdnc.com</td>
              </tr>
              <tr>
                <td>
                  <button className="icon ham_btn"></button>
                </td>
                <td className="ellipsis_td">
                  <p className="ellipsis">
                    한국경제신문&gt;기획조정실1&gt;기획조정실1-1&gt;기획조정실1-2&gt;기획조정실1-3
                  </p>
                </td>
                <td>홍길동</td>
                <td className="black5">-</td>
                <td className="black5">사원</td>
                <td className="black5">010-1234-1234</td>
                <td className="black5">hk1@hubdnc.com</td>
              </tr>
              <tr>
                <td>
                  <button className="icon ham_btn"></button>
                </td>
                <td className="ellipsis_td">
                  <p className="ellipsis">
                    한국경제신문&gt;기획조정실1&gt;기획조정실1-1&gt;기획조정실1-2&gt;기획조정실1-3
                  </p>
                </td>
                <td>홍길동</td>
                <td className="black5">-</td>
                <td className="black5">사원</td>
                <td className="black5">010-1234-1234</td>
                <td className="black5">hk1@hubdnc.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="area">
        <p>상세 테이블</p>
        <div className="table_wrap">
          <table className="detail">
            <tbody>
              <tr>
                <th>
                  프로필 사진<span className="red1">*</span>
                </th>
                <td></td>
              </tr>
              <tr>
                <th>
                  재직상태<span className="red1">*</span>
                </th>
                <td></td>
              </tr>
              <tr>
                <th>회사</th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
}

export default Table;
