import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button, { Props } from "../../form/button"; // Button과 Props를 가져옵니다

// Storybook 설정
export default {
  title: "Button", // Storybook 내에서 표시될 이름
  component: Button, // 해당 스토리에 사용할 컴포넌트
} as Meta<typeof Button>; // 타입을 Button 컴포넌트에 맞게 설정

// StoryFn에 Props 타입을 지정하여 명시적으로 맞추기
const Template: StoryFn<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Click Me", // title prop에 맞춰서 수정
  size: "h_32",
  bg_color: "btn-bg-wh-to-gr3",
  bd_color: "btn-bd-gr-to-wh9",
  color: "btn-text-bk-to-wh3",
};
