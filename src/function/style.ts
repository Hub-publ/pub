// ts 파일에서는 useState를 사용할 수 없음 ➡️ javascript로 대체
import { useEffect } from "react";
import { SingleValue } from "react-select";

type OptionType = {
  label: string;
  value: string;
};

// 공통 변수
const html = document.querySelector("html");
const body = document.querySelector("body");
// script에서 color 변수의 hex값을 한번에 변경할 수 있지만, 공통적인 문제로 style에서 제어
/*export function DarkMode(event: React.ChangeEvent<HTMLInputElement>) {
  const target = event.target as HTMLInputElement;
  if (body) {
    if (target.checked === true) {
      body.classList.add("dark");
      document.documentElement.style.setProperty("--text-black2", "#ffffff");
    } else {
      body.classList.remove("dark");
      document.documentElement.style.setProperty("--text-black2", "#444444");
    }
  }
}*/
// Color Palette를 Script에서 제어하지 않고 Scss 에서 제어
export function DarkMode(event: React.ChangeEvent<HTMLInputElement>) {
  const root = document.documentElement;
  const target = event.target as HTMLInputElement;
  if (target.checked === true) {
    root.setAttribute("data-theme", "dark");
  } else {
    root.setAttribute("data-theme", "light");
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

// 1024 아래로 비율맞춰 줄어들게 :: zoom을 줄여주는 방식이라 zoom이 조정될 때 More Popup의 위치를 잡을 수 없어 주석처리 함.
/* function resizeApply() {
  const minWidth = 1024;
  if (window.innerWidth < minWidth) {
    if (body) {
      (body.style as any).zoom = `${window.innerWidth / minWidth}`;
    }
  } else {
    if (body) {
      (body as any).style.zoom = "1";
    }
  }
}
resizeApply();
window.addEventListener("resize", resizeApply); */
