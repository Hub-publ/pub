import React, { useEffect, useRef, useState } from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

function Container(props: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasSearch, setHasSearch] = useState(false); // 확인용 클래스로 삭제해도 OK
  const [searchHeight, setSearchHeight] = useState<number | null>(null);

  useEffect(() => {
    // console.log("실행");
    // 검색영역 확인
    const container = containerRef.current;
    if (container) {
      const searchArea = container.querySelector(".search_area");
      const toggle_btn = container.querySelector<HTMLButtonElement>(
        ".search_tool .toggle"
      );
      const handleToggleClick = () => {
        if (toggle_btn) {
          toggle_btn.classList.toggle("open");
        }
        // console.log("토글 버튼 클릭!!");
      };
      if (searchArea) {
        // 검색영역 있는 페이지
        setHasSearch(true); // 확인용 클래스로 삭제해도 OK
        setSearchHeight(searchArea.getBoundingClientRect().height); // height 중복
        // console.log("검색영역 높이값", searchHeight);

        // 검색영역 높이가 특정 값 이상일 경우 클래스 부여
        const search_h = searchArea.getBoundingClientRect().height; // height 중복
        // if (search_h > 100) {
        //   searchArea.classList.add("over_height");
        // } else {
        //   searchArea.classList.remove("over_height");
        // }

        const resizeObserver = new ResizeObserver(entries => {
          for (let entry of entries) {
            if (entry.target === searchArea) {
              const resizeHeight = entry.contentRect.height;
              // console.log("리사이즈 새로운 높이는?", resizeHeight);
            }
          }
        });
        // console.log("리사이즈 확인1");
        resizeObserver.observe(searchArea);
        // console.log("리사이즈 확인2");
      } else {
        // 검색영역 없는 페이지
        setHasSearch(false); // 확인용 클래스로 삭제해도 OK
        setSearchHeight(null);
        // console.log("검색영역 없음", searchHeight);
      }
      if (toggle_btn) {
        toggle_btn.addEventListener("click", handleToggleClick);
      }
      return () => {
        if (toggle_btn) {
          toggle_btn.removeEventListener("click", handleToggleClick);
        }
      };
    }
  }, [props.children]);
  return (
    <div
      ref={containerRef}
      // search_on, search_not 는 확인용 클래스로 삭제해도 OK
      className={`container ${hasSearch ? "search_on" : "search_not"} ${
        props.className
      }`}
    >
      <div className="container_inner">{props.children}</div>
    </div>
  );
}

export default Container;
