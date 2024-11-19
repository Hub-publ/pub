import React from "react";
import Header from "../component/layout/header";
import Container from "../component/layout/container";
import Select from "react-select";
import Switch from "../component/form/switch";
import Checkbox from "../component/form/checkbox";
import Radio from "../component/form/radio";
import SearchInput from "../component/form/search_input";
import Button from "../component/form/button";
import Attachment from "../component/form/attachment";
import Pagination from "../component/form/pagination";
interface OptionType {
  label: string;
  value: string;
}

function Table() {
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
              <input type="text" />
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
          <div className="search_tool">
            <button type="button" className="toggle"></button>
            <Button title="검색" size="h_32" color="gray_bg_line" />
            <Button title="입력" size="h_32" color="gray_bg_line" />
            <Button title="입력 취소" size="h_32" color="gray_bg_line" />
          </div>
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
                  <Button title="버튼버튼" size="h_28" color="black" />
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
                        </p>
                      </td>
                      <td>홍길동</td>
                      <td>-</td>
                      <td>사원</td>
                      <td>010-1234-1234</td>
                      <td>test@hubdnc.com</td>
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
                      <td>010-1234-1234</td>
                      <td>test@hubdnc.com</td>
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
                      <td>010-1234-1234</td>
                      <td>test@hubdnc.com</td>
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
                      <td>010-1234-1234</td>
                      <td>test@hubdnc.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="area">
            <div className="table_wrap">
              <table className="detail">
                <colgroup>
                  <col className="col_th" />
                  <col />
                  <col className="col_th" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>
                      TH<span className="red1">*</span>
                    </th>
                    <td colSpan={3}>
                      <input
                        type="text"
                        placeholder="100자 이내"
                        maxLength={100}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      TH<span className="red1">*</span>
                    </th>
                    <td>
                      <Select
                        placeholder="선택"
                        options={[
                          { value: "Development", label: "개발팀" },
                          { value: "Plan", label: "기획팀" },
                          { value: "Design", label: "디자인팀" },
                          { value: "Publishing", label: "퍼블팀" },
                        ]}
                        onChange={handleChange}
                        isDisabled
                      />
                    </td>
                    <th>
                      TH<span className="red1">*</span>
                    </th>
                    <td>
                      <div className="form_wrap">
                        <Radio id="radio_a1" name="radio_a" label="선택1" />
                        <Radio id="radio_a2" name="radio_a" label="선택2" />
                        <Radio id="radio_a3" name="radio_a" label="선택3" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      TH / TH<span className="red1">*</span>
                    </th>
                    <td>홍길동 / 2024-11-14</td>
                    <th>
                      TH<span className="red1">*</span>
                    </th>
                    <td>1,234,567</td>
                  </tr>
                  <tr>
                    <th>
                      TH<span className="red1">*</span>
                    </th>
                    <td colSpan={3}>
                      <textarea
                        name=""
                        id=""
                        rows={5}
                        placeholder="500자 이내"
                        maxLength={500}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>TH</th>
                    <td colSpan={3}>
                      <Attachment id="attach_01" maxText={10} />
                    </td>
                  </tr>
                </tbody>
              </table>
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
      </Container>
    </>
  );
}

export default Table;
