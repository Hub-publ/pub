export function DarkMode(event: React.ChangeEvent<HTMLInputElement>) {
  const target = event.target as HTMLInputElement;
  const body = document.querySelector("body");
  const th = document.querySelectorAll("table th");
  const td = document.querySelectorAll("table td");
  const button = document.querySelectorAll("button");
  const input = document.querySelectorAll("input");
  if (body) {
    if (target.checked === true) {
      body.classList.add("dark");
      /*====================
          공통
      ==================== */
      /* input */
      for (let i = 0; input.length > i; i++) {
        if (input) {
          const inputElement = input[i] as HTMLInputElement;
          inputElement.style.setProperty("--bg-white1", "transparent");
          inputElement.style.setProperty(
            "--bg-white3",
            "rgba(255,255,255,0.2)"
          );
        }
      }
      /* 헤더 전용컬러 */
      document.documentElement.style.setProperty("--bg-header", "#000000");
      /* 블랙배경 버튼 */
      document.documentElement.style.setProperty(
        "--btn-black1",
        "rgba(253, 253, 255, 0.235)"
      );
      /* 블랙라인 버튼 */
      document.documentElement.style.setProperty(
        "--btn-black-line1",
        "rgba(253, 253, 255, 0.5)"
      );
      for (let i = 0; button.length > i; i++) {
        if (button) {
          const btn = button[i] as HTMLElement;
          btn.style.setProperty("--text-black1", "#f1f1f1");
        }
      }
      /* 기본 텍스트 */
      document.documentElement.style.setProperty("--text-black2", "#ffffff");
      /* 체크박스, 라디오박스에 들어가는 컬러 */
      document.documentElement.style.setProperty("--text-gray1", "#ffffff");
      /* 테이블 관련 */
      /* TR Hover */
      document.documentElement.style.setProperty(
        "--bg-table-hover",
        "rgba(255,255,255,0.05)"
      );
      /* th */
      for (let i = 0; th.length > i; i++) {
        if (th) {
          const cell = th[i] as HTMLElement;
          cell.style.setProperty("--border-white3", "rgba(255,255,255,0.2)");
        }
      }
      /* td */
      for (let i = 0; td.length > i; i++) {
        if (td) {
          const cell = td[i] as HTMLElement;
          cell.style.setProperty("--bg-white1", "transparent");
          cell.style.setProperty("--bg-white2", "rgba(255,255,255,0.1)");
          cell.style.setProperty("--border-white3", "rgba(255,255,255,0.2)");
          cell.style.setProperty("--text-black1", "#ffffff");
        }
      }
    } else {
      body.classList.remove("dark");
      /*====================
          공통
      ==================== */
      /* input */
      for (let i = 0; input.length > i; i++) {
        if (input) {
          const inputElement = input[i] as HTMLInputElement;
          inputElement.style.setProperty("--bg-white1", "#ffffff");
          inputElement.style.setProperty("--bg-white3", "#dcdcdc");
        }
      }
      /* 헤더 전용컬러 */
      document.documentElement.style.setProperty("--bg-header", "#444444");
      /* 블랙배경 버튼 */
      document.documentElement.style.setProperty("--btn-black1", "#000000");
      /* 블랙라인 버튼 */
      document.documentElement.style.setProperty(
        "--btn-black-line1",
        "#000000"
      );
      for (let i = 0; button.length > i; i++) {
        if (button) {
          const btn = button[i] as HTMLElement;
          btn.style.setProperty("--text-black1", "#000000");
        }
      }
      /* 기본 텍스트 */
      document.documentElement.style.setProperty("--text-black2", "#444444");
      /* 체크박스, 라디오박스에 들어가는 컬러 */
      document.documentElement.style.setProperty("--text-gray1", "#808080");
      /* 테이블 관련 */
      /* TR Hover */
      document.documentElement.style.setProperty("--bg-table-hover", "#dcdcdc");
      /* td */
      for (let i = 0; td.length > i; i++) {
        if (td) {
          const cell = td[i] as HTMLElement;
          /* 테이블 텍스트 */
          cell.style.setProperty("--text-black1", "#444444");
          /* 테이블 보더 */
          cell.style.setProperty("--border-white3", "#dcdcdc");
        }
      }
    }
  }
}
