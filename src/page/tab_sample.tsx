import Container from "../component/layout/container";
import Header from "../component/layout/header";
import Select from "react-select";
import Switch from "../component/form/switch";
import Checkbox from "../component/form/checkbox";
import Radio from "../component/form/radio";
import SearchInput from "../component/form/search_input";
import Tab from "../component/tab/tab";
import SampleTabContents1 from "../component/tab/tab_content/sample/sample_tab_contents1";
import SampleTabContents2 from "../component/tab/tab_content/sample/sample_tab_contents2";
import SampleTabContents3 from "../component/tab/tab_content/sample/sample_tab_contents3";

interface OptionType {
  label: string;
  value: string;
}

function TabSample() {
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
            {/*
             - <Tab> 컴포넌트 사용법
             - 1. options 배열에 탭 메뉴명을 순서대로 기재.
             - 2. 각 탭의 콘텐츠 내용을 <Tab>의 Children으로 탭 순서에 맞게 콘텐츠 작업. 
             */}
            <Tab options={["빨간색", "노란색", "초록색"]}>
              {/* 1번째 탭(빨간색) 내용 */}
              <SampleTabContents1 />
              {/* 2번째 탭(노란색) 내용 */}
              <SampleTabContents2 />
              {/* 3번째 탭(초록색) 내용 */}
              <SampleTabContents3 />
            </Tab>
          </div>
        </div>
      </Container>
    </>
  );
}

export default TabSample;
