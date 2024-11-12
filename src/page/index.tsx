import React, { useEffect, useRef, useState } from "react";
import Container from "../component/layout/container";
import Header from "../component/layout/header";
import Select from "react-select";
import Switch from "../component/form/switch";
import Checkbox from "../component/form/checkbox";
import Radio from "../component/form/radio";
import SearchInput from "../component/form/search_input";
import Button from "../component/form/button";
interface OptionType {
  label: string;
  value: string;
}

function Main() {
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
        </div>
        <div className="contents_wrap">
          <div className="container">
            <div className="area">
              <div className="table_wrap list">
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
                  <table>
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
        </div>
        {/* <div className="area">메인 페이지의 두 번째 영역 입니다.</div>
      <div className="area">메인 페이지의 세 번째 영역 입니다.</div>
      <div className="area">메인 페이지의 네 번째 영역 입니다.</div> */}
      </Container>
    </>
  );
}

export default Main;
