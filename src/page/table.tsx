import React from "react";
import Header from "../component/layout/header";
import Container from "../component/layout/container";

function Table() {
  return (
    <>
      <Header />
      <Container className="index_page">
        <div className="search_area">
          <ul>
            <li>
              <p className="label">타이틀</p>
              <input type="text" />
            </li>
            <li>
              <p className="label">타이틀</p>
              <input type="text" />
            </li>
            <li>
              <p className="label">타이틀</p>
              <input type="text" />
            </li>
            <li>
              <p className="label">타이틀</p>
              <input type="text" />
            </li>
            <li>
              <p className="label">타이틀</p>
              <input type="text" />
            </li>
          </ul>
        </div>
        <div className="contents_wrap">
          <div className="container">
            <div className="area">
              <div className="table_wrap list">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>TH</th>
                      <th>TH</th>
                      <th>TH</th>
                      <th>TH</th>
                      <th>TH</th>
                      <th>TH</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <button className="icon ham_btn"></button>
                      </td>
                      <td className="ellipsis_td">
                        <p className="ellipsis">
                          텍스트가 들어갑니다. 길어지면 말줄임처리됩니다.
                          텍스트가 들어갑니다. 길어지면 말줄임처리됩니다.
                          텍스트가 들어갑니다. 길어지면 말줄임처리됩니다.
                          텍스트가 들어갑니다. 길어지면 말줄임처리됩니다.
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
            <div className="area">
              <div className="table_wrap">
                <table className="detail">
                  <tbody>
                    <tr>
                      <th>
                        TH<span className="red1">*</span>
                      </th>
                      <td>
                        텍스트가 들어갑니다. 텍스트가 들어갑니다. 텍스트가
                        들어갑니다. 텍스트가 들어갑니다. 텍스트가 들어갑니다.
                        텍스트가 들어갑니다. 텍스트가 들어갑니다. 텍스트가
                        들어갑니다. 텍스트가 들어갑니다. 텍스트가 들어갑니다.
                        텍스트가 들어갑니다. 텍스트가 들어갑니다.
                      </td>
                    </tr>
                    <tr>
                      <th>
                        TH<span className="red1">*</span>
                      </th>
                      <td></td>
                    </tr>
                    <tr>
                      <th>TH</th>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Table;
