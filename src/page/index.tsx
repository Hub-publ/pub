import { useState } from "react";
import Container from "../component/layout/container";
import Header from "../component/layout/header";
import Select from "react-select";
import Switch from "../component/form/switch";
import Checkbox from "../component/form/checkbox";
import Radio from "../component/form/radio";
import SearchInput from "../component/form/search_input";
import Button from "../component/form/button";
import Pagination from "../component/form/pagination";
import PopupManage from "../component/popup/popup_manage";
import TemplatePopup from "../component/popup/template/template_popup";
interface OptionType {
  label: string;
  value: string;
}

function Main() {
  const [popup, setPopup] = useState<Number | undefined>(undefined);
  const handleChange = (selectedOption: OptionType | null) => {
    console.log(selectedOption);
  };

  return (
    <>
      <Header />
      <Container className="index_page">
        <div className="search_area">
          <ul>
            <li>
              <p className="label">input</p>
              <input type="text" placeholder="placeholder" />
            </li>
            <li>
              <p className="label">input disabled</p>
              <input type="text" disabled />
            </li>
            <li>
              <p className="label">search input</p>
              <SearchInput />
            </li>
            <li>
              <p className="label">select</p>
              <Select
                options={[
                  { value: "chocolate", label: "Chocolate" },
                  { value: "strawberry", label: "Strawberry" },
                  { value: "vanilla", label: "Vanilla" },
                ]}
                onChange={handleChange}
              />
            </li>
            <li>
              <p className="label">select disabled</p>
              <Select
                options={[
                  { value: "Almond", label: "Almond" },
                  { value: "Peanut", label: "Peanut" },
                  { value: "Macadamia", label: "Macadamia" },
                ]}
                value={{ value: "Almond", label: "Almond" }}
                onChange={handleChange}
                isDisabled
              />
            </li>
            <li>
              <p className="label">switch</p>
              <Switch id="switch" />
            </li>
            <li>
              <p className="label">checkbox</p>
              <div className="form_wrap">
                <Checkbox id="checkbox1" label="체크박스1" />
                <Checkbox id="checkbox2" label="체크박스2" />
                <Checkbox id="checkbox3" label="체크박스3" />
              </div>
            </li>
            <li>
              <p className="label">radio</p>
              <div className="form_wrap">
                <Radio id="radio1" name="radio" label="라디오1" />
                <Radio id="radio2" name="radio" label="라디오2" />
                <Radio id="radio3" name="radio" label="라디오3" />
              </div>
            </li>
          </ul>
        </div>
        <div className="contents_wrap">
          <div className="area">
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
                      <td className="black1">-</td>
                      <td className="black1">사원</td>
                      <td className="black1">010-1234-1234</td>
                      <td className="black1">test@hubdnc.com</td>
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
                      <td className="black1">-</td>
                      <td className="black1">사원</td>
                      <td className="black1">010-1234-1234</td>
                      <td className="black1">test@hubdnc.com</td>
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
                      <td className="black1">-</td>
                      <td className="black1">사원</td>
                      <td className="black1">010-1234-1234</td>
                      <td className="black1">test@hubdnc.com</td>
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
                      <td className="black1">-</td>
                      <td className="black1">사원</td>
                      <td className="black1">010-1234-1234</td>
                      <td className="black1">test@hubdnc.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <Pagination totalPage={5} />
            <div className="page_btn center_t">
              <Button
                title="Main Popup Open"
                size="h_38"
                bg_color="btn-bg-bk1"
                bd_color="btn-bd-bk1"
                color="btn-text-wh1"
                onClick={() => {
                  setPopup(1);
                }}
              />
              <Button
                title="Side Popup Open"
                size="h_38"
                bg_color="transparent"
                bd_color="btn-bd-bk1"
                color="btn-text-bk1"
                onClick={() => {
                  setPopup(2);
                }}
              />
              <Button
                title="Bottom Popup Open"
                size="h_38"
                bg_color="btn-bg-blue1"
                bd_color="btn-bd-blue1"
                color="btn-text-wh1"
                onClick={() => {
                  setPopup(3);
                }}
              />
              <Button
                title="버튼버튼"
                size="h_38"
                bg_color="transparent"
                bd_color="btn-bd-blue1"
                color="btn-text-blue1"
              />
              <Button
                title="버튼버튼"
                size="h_38"
                bg_color="btn-bg-green1"
                bd_color="btn-bd-green1"
                color="btn-text-wh1"
              />
              <Button
                title="버튼버튼"
                size="h_38"
                bg_color="transparent"
                bd_color="btn-bd-green1"
                color="btn-text-green1"
              />
            </div>
          </div>
        </div>
      </Container>
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

export default Main;
