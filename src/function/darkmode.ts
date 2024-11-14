// ts 파일에서는 useState를 사용할 수 없음 ➡️ javascript로 대체
import { SingleValue } from "react-select";

type OptionType = {
  label: string;
  value: string;
};

const html = document.querySelector("html");
const body = document.querySelector("body");
// script에서 color 변수의 hex값을 한번에 변경할 수 있지만, 공통적인 문제로 style에서 제어
export function DarkMode(event: React.ChangeEvent<HTMLInputElement>) {
  const target = event.target as HTMLInputElement;
  if (body) {
    if (target.checked === true) {
      body.classList.add("dark");
      /* 기본 텍스트 */
      // document.documentElement.style.setProperty("--text-black2", "#ffffff");
    } else {
      body.classList.remove("dark");
      /* 기본 텍스트 */
      // document.documentElement.style.setProperty("--text-black2", "#444444");
    }
  }
}

// Font Size Change
export function FontReSize(event: SingleValue<OptionType>) {
  // 선택된 옵션이 단일 값인지 배열인지 확인
  if (!Array.isArray(event) && event !== null) {
    if (html) {
      if (event.value === "Font Size Small") {
        html.classList.remove("font_size_large");
        html.classList.add("font_size_small");
      } else if (event.value === "Font Size Large") {
        html.classList.remove("font_size_small");
        html.classList.add("font_size_large");
      } else if (event.value === "Font Size Normal") {
        html.classList.remove("font_size_small");
        html.classList.remove("font_size_large");
      }
    }
  }
}
