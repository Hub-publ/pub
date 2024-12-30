import { Meta } from "@storybook/react";
import StorybookTable from "./storybook_list_table";
import StorybookDetailTable from "./storybook_detail_table";

export default {
  title: "Table", // 1뎁스 구조로 설정
  component: StorybookTable,
} as Meta<typeof StorybookTable>;

const Template1 = () => <StorybookTable />;
export const ListTable = Template1.bind({});
const Template2 = () => <StorybookDetailTable />;
export const DetailTable = Template2.bind({});
