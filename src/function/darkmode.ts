// ts 파일에서는 useState를 사용할 수 없음 ➡️ javascript로 대체
import { SingleValue, MultiValue } from "react-select";

type OptionType = {
  label: string;
  value: string;
};
const handleChange = (selectedOption: OptionType | null) => {
  console.log(selectedOption);
};

// script에서 color 변수의 hex값을 한번에 변경할 수 있지만, 공통적인 문제로 style에서 제어
export function DarkMode(event: React.ChangeEvent<HTMLInputElement>) {
  const target = event.target as HTMLInputElement;
  const body = document.querySelector("body");
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

// export function FontReSize(
//   event: SingleValue<OptionType> | MultiValue<OptionType>
// ) {
//   // 선택된 옵션이 단일 값인지 배열인지 확인
//   if (!Array.isArray(event) && event !== null) {
//     // 단일 값일 때 접근
//     console.log(event.value, "Selected Value");
//   } else if (Array.isArray(event)) {
//     // 배열일 때 (다중 선택이 설정된 경우) 처리
//     event.forEach((option) => {
//       console.log(option.value, "Selected Value in Multi-Select");
//     });
//   }
// }
