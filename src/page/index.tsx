import { useState } from "react";
import Container from "../component/layout/container";
import Header from "../component/layout/header";
import Select from "react-select";
import Switch from "../component/form/switch";
import Checkbox from "../component/form/checkbox";
import Radio from "../component/form/radio";
import SearchInput from "../component/form/search_input";
import Button from "../component/form/button";
import PopupManage from "../component/popup/popup_manage";
import TemplatePopup from "../component/popup/template_popup";
import Pagination from "../component/form/pagination";
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
                    title="Popup Open"
                    size="h_28"
                    color="black"
                    onClick={() => {
                      setPopup(1);
                    }}
                  />
                  <Button title="버튼버튼" size="h_28" color="black_line" />
                  <Button title="버튼버튼" size="h_28" color="blue" />
                  <Button title="버튼버튼" size="h_28" color="blue_line" />
                  <Button title="버튼버튼" size="h_28" color="green" />
                  <Button title="버튼버튼" size="h_28" color="green_line" />
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
            <Pagination perPage={5} totalPage={12} />
            <div className="page_btn center_t">
              <Button title="버튼버튼" size="h_38" color="black" />
              <Button title="버튼버튼" size="h_38" color="black_line" />
              <Button title="버튼버튼" size="h_38" color="blue" />
              <Button title="버튼버튼" size="h_38" color="blue_line" />
              <Button title="버튼버튼" size="h_38" color="green" />
              <Button title="버튼버튼" size="h_38" color="green_line" />
            </div>
          </div>
        </div>
        {/* <div className="area">메인 페이지의 두 번째 영역 입니다.</div>
      <div className="area">메인 페이지의 세 번째 영역 입니다.</div>
      <div className="area">메인 페이지의 네 번째 영역 입니다.</div> */}
      </Container>
      <PopupManage
        className={`${popup === 1 ? "on" : ""}`}
        title="Template Popup"
        setPopup={() => setPopup(undefined)}
      >
        {/* popup template의 구조에 맞게 작업 부탁드립니다👻 */}
        <TemplatePopup />
      </PopupManage>
    </>
  );
}

export default Main;
