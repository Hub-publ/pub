import { useState } from "react";
import Select from "react-select";
import Button from "../../form/button";
import SearchInput from "../../form/search_input";
import Switch from "../../form/switch";
import Checkbox from "../../form/checkbox";
import Radio from "../../form/radio";

interface OptionType {
  label: string;
  value: string;
}

function TemplatePopup() {
  const handleChange = (selectedOption: OptionType | null) => {
    console.log(selectedOption);
  };
  return (
    <>
      <div className="pop_inner">
        <div className="popup_scroll_area">
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
                <Switch id="pop_switch" />
              </li>
              <li>
                <p className="label">checkbox</p>
                <div className="form_wrap">
                  <Checkbox id="popup_checkbox1" label="체크박스1" />
                  <Checkbox id="popup_checkbox2" label="체크박스2" />
                  <Checkbox id="popup_checkbox3" label="체크박스3" />
                </div>
              </li>
              <li>
                <p className="label">radio</p>
                <div className="form_wrap">
                  <Radio id="popup_radio1" name="radio" label="라디오1" />
                  <Radio id="popup_radio2" name="radio" label="라디오2" />
                  <Radio id="popup_radio3" name="radio" label="라디오3" />
                </div>
              </li>
            </ul>
          </div>
          <div className="table_wrap">
            <div className="table_top flex align_center justify_between">
              <p className="num">총 갯수</p>
              <div>
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
            <div className="scroll_area">
              <table className="list">
                <colgroup>
                  <col width={50} />
                  <col />
                  <col width={100} />
                  <col width={80} />
                </colgroup>
                <thead>
                  <tr>
                    <th>#</th>
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
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                  <tr>
                    <td>
                      <button className="icon ham_btn"></button>
                    </td>
                    <td className="ellipsis_td">
                      <p className="ellipsis">
                        텍스트가 들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다. 텍스트가
                        들어갑니다. 길어지면 말줄임처리됩니다.
                      </p>
                    </td>
                    <td>홍길동</td>
                    <td>사원</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="pop_btns">
        <Button
          size="h_38"
          bg_color="transparent"
          bd_color="btn-bd-gr6"
          color="btn-text-bk-to-wh9"
          title="닫기"
        />
        <Button
          size="h_38"
          bg_color="btn-bg-bk1"
          bd_color="btn-bd-bk1"
          color="btn-text-wh1"
          title="완료"
        />
      </div>
    </>
  );
}

export default TemplatePopup;
