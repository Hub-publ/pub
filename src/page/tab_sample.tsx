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
      <Container className="tab_sample_page">
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
