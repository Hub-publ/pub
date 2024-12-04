// .storybook/main.ts
import type { StorybookConfig } from "@storybook/react";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx|js|jsx)"], // .stories.tsx 파일 경로
  addons: [
    "@storybook/addon-links/register",
    "@storybook/addon-essentials/register",
    "@storybook/addon-knobs/register",
    "@storybook/preset-create-react-app", // 추가
    "@storybook/preset-scss",
  ],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.module?.rules?.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    });
    return config;
  },
};

export default config;
