import { useState } from "react";
import Button from "../../form/button";
import Pagination from "../../form/pagination";
import PopupManage from "../../popup/popup_manage";
import TemplatePopup from "../../popup/template/template_popup";

function StorybookTable() {
  const [more, setMore] = useState<Number | undefined>(undefined);
  const [popup, setPopup] = useState<Number | undefined>(undefined);
  return (
    <>
      <div className="table_wrap">
        {/* 오른쪽 영역에 버튼만 있을 때 */}
        {/* <div className="table_top flex justify_start">
                  <p className="num">총 갯수</p>
                </div> */}
        {/* 양쪽 영역에 버튼만 있을 때 */}
        <div className="table_top flex align_center justify_between">
          <p className="num">총 갯수</p>
          <div>
            <Button
              title="Main Popup Open"
              size="h_28"
              bg_color="btn-bg-bk1"
              bd_color="btn-bd-bk1"
              color="btn-text-wh1"
              onClick={() => {
                setPopup(1);
              }}
            />
            <Button
              title="Side Popup Open"
              size="h_28"
              bg_color="transparent"
              bd_color="btn-bd-bk1"
              color="btn-text-bk1"
              onClick={() => {
                setPopup(2);
              }}
            />
            <Button
              title="Bottom Popup Open"
              size="h_28"
              bg_color="btn-bg-blue1"
              bd_color="btn-bd-blue1"
              color="btn-text-wh1"
              onClick={() => {
                setPopup(3);
              }}
            />
            <Button
              title="버튼버튼"
              size="h_28"
              bg_color="transparent"
              bd_color="btn-bd-blue1"
              color="btn-text-blue1"
            />
            <Button
              title="버튼버튼"
              size="h_28"
              bg_color="btn-bg-green1"
              bd_color="btn-bd-green1"
              color="btn-text-wh1"
            />
            <Button
              title="버튼버튼"
              size="h_28"
              bg_color="transparent"
              bd_color="btn-bd-green1"
              color="btn-text-green1"
            />
          </div>
        </div>
        {/* 왼쪽 영역에 버튼만 있을 때 */}
        {/* <div className="table_top flex justify_end">
                  <Button title="버튼버튼" size="h_28" color="black" />
                  <Button title="버튼버튼" size="h_28" color="black_line" />
                  <Button title="버튼버튼" size="h_28" color="blue" />
                  <Button title="버튼버튼" size="h_28" color="blue_line" />
                  <Button title="버튼버튼" size="h_28" color="green" />
                  <Button title="버튼버튼" size="h_28" color="green_line" />
                </div> */}

        <div className="scroll_area">
          <table className="list">
            <colgroup>
              <col width={50} />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col width={50} />
            </colgroup>
            <thead>
              <tr>
                <th>#</th>
                <th>TH</th>
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
                    텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                    들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가 들어갑니다.
                    길어지면 말줄임처리됩니다. 텍스트가 들어갑니다. 길어지면
                    말줄임처리됩니다.
                  </p>
                </td>
                <td>홍길동</td>
                <td>-</td>
                <td>사원</td>
                <td className="ellipsis_td">
                  <p className="ellipsis center_t">010-1234-5678</p>
                </td>
                <td className="ellipsis_td">
                  <p className="ellipsis center_t">test@hubdnc.com</p>
                </td>
                <td>
                  <button
                    className="only_more_btn"
                    onClick={() => {
                      setMore(1);
                    }}
                  ></button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="icon ham_btn"></button>
                </td>
                <td className="ellipsis_td">
                  <p className="ellipsis">
                    텍스트가 들어갑니다. 길어지면 말줄임처리됩니다.
                  </p>
                </td>
                <td>홍길동</td>
                <td>-</td>
                <td>사원</td>
                <td className="ellipsis_td">
                  <p className="ellipsis center_t">010-1234-5678</p>
                </td>
                <td className="ellipsis_td">
                  <p className="ellipsis center_t">test@hubdnc.com</p>
                </td>
                <td>
                  <button
                    className="only_more_btn"
                    onClick={() => {
                      setMore(2);
                    }}
                  ></button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="icon ham_btn"></button>
                </td>
                <td className="ellipsis_td">
                  <p className="ellipsis">
                    텍스트가 들어갑니다. 길어지면 말줄임처리됩니다.
                  </p>
                </td>
                <td>홍길동</td>
                <td>-</td>
                <td>사원</td>
                <td className="ellipsis_td">
                  <p className="ellipsis center_t">010-1234-5678</p>
                </td>
                <td className="ellipsis_td">
                  <p className="ellipsis center_t">test@hubdnc.com</p>
                </td>
                <td>
                  <button
                    className="only_more_btn"
                    onClick={() => {
                      setMore(3);
                    }}
                  ></button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="icon ham_btn"></button>
                </td>
                <td className="ellipsis_td">
                  <p className="ellipsis">
                    텍스트가 들어갑니다. 길어지면 말줄임처리됩니다.
                  </p>
                </td>
                <td>홍길동</td>
                <td>-</td>
                <td>사원</td>
                <td className="ellipsis_td">
                  <p className="ellipsis center_t">010-1234-5678</p>
                </td>
                <td className="ellipsis_td">
                  <p className="ellipsis center_t">test@hubdnc.com</p>
                </td>
                <td>
                  <button
                    className="only_more_btn"
                    onClick={() => {
                      setMore(4);
                    }}
                  ></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination totalPage={5} />
      </div>

      <PopupManage
        className={`${popup === 1 ? "on" : ""}`}
        title="Template Popup"
        popup={popup}
        setPopup={() => setPopup(undefined)}
      >
        {/* popup template의 구조에 맞게 작업 부탁드립니다👻 */}
        <TemplatePopup />
      </PopupManage>
      <PopupManage
        className={`${popup === 2 ? "on" : ""} side`}
        title="Template Popup"
        popup={popup}
        setPopup={() => setPopup(undefined)}
      >
        <TemplatePopup />
      </PopupManage>
      <PopupManage
        className={`${popup === 3 ? "on" : ""} bottom`}
        title="Template Popup"
        popup={popup}
        setPopup={() => setPopup(undefined)}
      >
        <TemplatePopup />
      </PopupManage>
    </>
  );
}

export default StorybookTable;
