import React, { useEffect, useRef, useState } from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

function Container(props: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasSearch, setHasSearch] = useState(false); // 확인용 클래스로 삭제해도 OK
  const [searchHeight, setSearchHeight] = useState<number | null>(null);

  // 검색영역 관련 수치
  const [dimensions, setDimensions] = useState({
    paddingTop: 0, // searchPaddingTop
    PaddingBottom: 0, // searchPaddingBottom
    marginTop: 0, // toggleMarginTop
    buttonHeight: 0, // toggleHeight
  });

  // 검색영역 관련 수치 계산 함수
  const calcDimensions = () => {
    const containerElement = containerRef.current;
    if (!containerElement) return;

    const areaElement = containerElement.querySelector(".search_area"); // searchArea
    const toggleButton = containerElement.querySelector<HTMLButtonElement>(
      ".search_tool .toggle"
    );

    let paddingTop = 0;
    let paddingBottom = 0;
    let marginTop = 0;
    let buttonHeight = 0;

    if (areaElement) {
      const areaStyle = window.getComputedStyle(areaElement);
      paddingTop = parseFloat(areaStyle.paddingTop);
      paddingBottom = parseFloat(areaStyle.paddingBottom);
    }
  };

  useEffect(() => {
    // 처음 렌더링 시 계산
    calcDimensions();
    // Resize 이벤트 리스너
    const handleResize = () => {
      calcDimensions();
    };
    window.addEventListener("resize", calcDimensions);
    return () => {
      window.removeEventListener("resize", calcDimensions);
    };
  }, [props.children]);

  useEffect(() => {
    // console.log("실행");
    // 검색영역 확인
    const containerElement = containerRef.current;
    if (containerElement) {
      const areaElement = containerElement.querySelector(".search_area"); // searchArea
      const toggleButton = containerElement.querySelector<HTMLButtonElement>(
        ".search_tool .toggle"
      );
      const handleToggleClick = () => {
        if (toggleButton) {
          toggleButton.classList.toggle("open");
        }
        // console.log("토글 버튼 클릭!!");
      };
      if (areaElement) {
        // 검색영역 있는 페이지
        setHasSearch(true); // 확인용 클래스로 삭제해도 OK
        setSearchHeight(areaElement.getBoundingClientRect().height); // height 중복
        // console.log("검색영역 높이값", searchHeight);
        // 검색영역 상,하 패딩 값
        const searchStyle = window.getComputedStyle(areaElement);
        const searchPadding =
          parseFloat(searchStyle.paddingTop) +
          parseFloat(searchStyle.paddingBottom);
        // console.log("검색영역 패딩", searchPadding);

        // 검색영역 높이가 특정 값 이상일 경우 클래스 부여
        const search_h = areaElement.getBoundingClientRect().height; // height 중복
        if (search_h > 100) {
          areaElement.classList.remove("under_height");
          areaElement.classList.add("over_height");
        } else {
          areaElement.classList.remove("over_height");
          areaElement.classList.add("under_height");
        }

        const resizeObserver = new ResizeObserver(entries => {
          for (let entry of entries) {
            if (entry.target === areaElement) {
              const resizeHeight = entry.contentRect.height;
              // console.log("리사이즈 새로운 높이는?", resizeHeight);
            }
          }
        });
        // console.log("리사이즈 확인1");
        resizeObserver.observe(areaElement);
        // console.log("리사이즈 확인2");
        return () => resizeObserver.disconnect;
      } else {
        // 검색영역 없는 페이지
        setHasSearch(false); // 확인용 클래스로 삭제해도 OK
        setSearchHeight(null);
        // console.log("검색영역 없음", searchHeight);
      }
      if (toggleButton) {
        toggleButton.addEventListener("click", handleToggleClick);
      }
      return () => {
        if (toggleButton) {
          toggleButton.removeEventListener("click", handleToggleClick);
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
