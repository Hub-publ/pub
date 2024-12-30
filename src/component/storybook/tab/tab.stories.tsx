import { Meta } from "@storybook/react";
import Tab from "../../tab/tab";
import SampleTabContents1 from "../../tab/tab_content/sample/sample_tab_contents1";
import SampleTabContents2 from "../../tab/tab_content/sample/sample_tab_contents2";
import SampleTabContents3 from "../../tab/tab_content/sample/sample_tab_contents3";

export default {
  title: "Tab", // 1뎁스 구조로 설정
  component: Tab,
} as Meta<typeof Tab>;

const Template = () => (
  <>
    <Tab options={["빨간색", "노란색", "초록색"]}>
      <SampleTabContents1 />
      <SampleTabContents2 />
      <SampleTabContents3 />
    </Tab>
  </>
);
export const MainTab = Template.bind({});
