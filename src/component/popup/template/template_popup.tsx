import { useState } from "react";
import Select from "react-select";
import Button from "../../form/button";
import SearchInput from "../../form/search_input";
import Switch from "../../form/switch";
import Checkbox from "../../form/checkbox";
import Radio from "../../form/radio";
import BasicTooltip from "../../tooltip/basic_tooltip";
import DatePicker from "react-datepicker";

interface OptionType {
  label: string;
  value: string;
}

function TemplatePopup() {
  // Date Picker
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  // Year Picker
  const [selectedYear, setSelectedYear] = useState<Date | null>(null);
  // Month Picker
  const [selectedMonth, setSelectedMonth] = useState<Date | null>(null);
  // Date Time Picker
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
  // Time Picker
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  // Date Picker Change
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  // Year Picker Change
  const handleYearChange = (date: Date | null) => {
    setSelectedYear(date);
  };
  // Month Picker Change
  const handleMonthChange = (date: Date | null) => {
    setSelectedMonth(date);
  };
  // Date Time Picker Change
  const handleDateTimeChange = (date: Date | null) => {
    setSelectedDateTime(date);
  };
  // Time Picker Change
  const handleTimeChange = (time: Date | null) => {
    setSelectedTime(time);
  };
  // Time Picker Change
  const TimePickerClassHandler = () => {
    const time_wrap = document.querySelectorAll(".time_picker");
    for (let i = 0; time_wrap.length > i; i++) {
      const time = time_wrap[i] as HTMLElement;
      const target = time.parentNode?.parentNode as HTMLElement;
      target.classList.add("time_picker_wrap");
    }
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
                <input type="text" placeholder="placeholder" disabled />
              </li>
              <li>
                <p className="label">search input</p>
                <SearchInput placeholder="placeholder" />
              </li>
              <li>
                <p className="label">DatePicker</p>
                <DatePicker
                  id="date_picker"
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select a date"
                />
              </li>
              <li>
                <p className="label">YearPicker</p>
                <DatePicker
                  id="year_picker"
                  selected={selectedYear}
                  onChange={handleYearChange}
                  dateFormat="yyyy" // 연도만 선택하도록 포맷 설정
                  showYearPicker={true} // 연도 선택만 가능
                  placeholderText="Select a year"
                  minDate={new Date("2020-01-01")} // 최소 선택 연도
                  maxDate={new Date("2030-01-01")} // 최대 선택 연도
                />
              </li>
              <li>
                <p className="label">MonthPicker</p>
                <DatePicker
                  id="month_picker"
                  selected={selectedMonth}
                  onChange={handleMonthChange}
                  dateFormat="yyyy-MM"
                  showMonthYearPicker={true}
                  placeholderText="Select a date"
                />
              </li>
              <li>
                <p className="label">DateTimePicker</p>
                <DatePicker
                  id="date_time_picker"
                  selected={selectedDateTime}
                  onChange={handleDateTimeChange}
                  dateFormat="yyyy-MM-dd HH:mm" // 날짜와 시간 포맷
                  showTimeSelect={true} // 시간 선택 UI 활성화
                  timeFormat="HH:mm" // 시간 포맷 (24시간 형식)
                  timeIntervals={15} // 시간을 선택할 수 있는 간격 (예: 15분 간격)
                  timeCaption="Time" // 시간 선택 항목 제목
                  placeholderText="Select a date and time"
                />
              </li>
              <li>
                <p className="label">TimePicker</p>
                <DatePicker
                  id="time_picker"
                  className="time_picker"
                  selected={selectedTime}
                  onChange={handleTimeChange}
                  showTimeSelect={true} // 시간 선택 UI 활성화
                  timeFormat="HH:mm" // 시간 포맷 (24시간 형식)
                  timeIntervals={15} // 시간을 15분 간격으로 선택 가능
                  timeCaption="Time" // 시간 선택 항목 제목
                  dateFormat="HH:mm" // 시간 포맷
                  placeholderText="Select a time"
                  showMonthYearPicker={false} // 월/연도 선택 비활성화
                  showYearPicker={false} // 연도 선택 비활성화
                  shouldCloseOnSelect={true} // 시간 선택 후 팝업 닫기
                  inline={false} // 인라인 달력 비활성화
                  showPopperArrow={false} // 팝업 화살표 숨기기
                  popperPlacement="bottom" // 팝업 위치 설정 (bottom)
                />
              </li>
              <li>
                <p className="label">select</p>
                <div
                  className="select_area"
                  data-value={[
                    "딸기 🍓",
                    "사과 🍎",
                    "오렌지 🍊",
                    "키위 🥝",
                    "포도 🍇",
                  ]}
                >
                  <p className="select_value" aria-placeholder="셀렉트 기본값">
                    셀렉트 기본값
                  </p>
                </div>
                {/* <Select
                options={[
                  { value: "chocolate", label: "Chocolate" },
                  { value: "strawberry", label: "Strawberry" },
                  { value: "vanilla", label: "Vanilla" },
                ]}
              /> */}
              </li>
              <li>
                <p className="label">select disabled</p>
                <div
                  className="select_area"
                  aria-disabled
                  data-value={[
                    "원숭이 🐵",
                    "여우 🦊",
                    "늑대 🐺",
                    "호랑이 🐯",
                    "강아지 🐶",
                    "고양이 🐱",
                  ]}
                >
                  <p className="select_value" aria-placeholder="셀렉트 기본값">
                    호랑이 🐯
                  </p>
                </div>
                {/* <Select
                options={[
                  { value: "Almond", label: "Almond" },
                  { value: "Peanut", label: "Peanut" },
                  { value: "Macadamia", label: "Macadamia" },
                ]}
                value={{ value: "Almond", label: "Almond" }}
                isDisabled
              /> */}
              </li>
              <li>
                <p className="label">switch</p>
                <div className="form_wrap">
                  <Switch id="switch" />
                  <BasicTooltip contents="왜요, <strong>뭘봐요</strong>😠" />
                </div>
              </li>
              <li>
                <p className="label">checkbox</p>
                <div className="form_wrap">
                  <Checkbox id="checkbox1" label="체크박스1" />
                  <Checkbox id="checkbox2" label="체크박스2" />
                  <Checkbox id="checkbox3" label="체크박스3" />
                  <BasicTooltip contents="꽝,<br/>풉킼풉킼😠" right />
                </div>
              </li>
              <li>
                <p className="label">radio</p>
                <div className="form_wrap">
                  <Radio id="radio1" name="radio" label="라디오1" />
                  <Radio id="radio2" name="radio" label="라디오2" />
                  <Radio id="radio3" name="radio" label="라디오3" />
                  <BasicTooltip
                    contents="<strong>메롱</strong>, 저리갓!👻"
                    top
                  />
                </div>
              </li>
            </ul>
            <div className="search_tool">
              <button type="button" className="toggle"></button>
              <Button
                title="검색"
                size="h_32"
                bg_color="btn-bg-wh-to-gr3"
                bd_color="btn-bd-gr-to-wh9"
                color="btn-text-bk-to-wh3"
              />
            </div>
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
                  <col width={180} />
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
                    <td>
                      <div
                        className="select_area"
                        data-value="딸기 🍓,사과 🍎,오렌지 🍊,키위 🥝,포도 🍇"
                      >
                        <p
                          className="select_value"
                          aria-placeholder="셀렉트 기본값"
                        >
                          사과 🍎
                        </p>
                      </div>
                    </td>
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
