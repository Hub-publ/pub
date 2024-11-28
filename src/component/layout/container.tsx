import React, { useEffect, useRef, useState } from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

function Container(props: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [searchFold, setSearchFold] = useState(false); // 검색영역 접힙 여부

  // 검색영역 관련 수치
  const [dimensions, setDimensions] = useState({
    areaPadding: 0, // [추가] 검색영역 상하 패딩
    fixAreaPadding: 0, // [추가] 검색영역 상하 패딩 (소수점 4자리 까지)
    areaHeight: 0, // searchHeight
    fixAreaHeight: 0,
    areaBorderWidth: 0, // searchBorderWidth
    toolHeight: 0, // searchToolHeight
    fixToolHeight: 0, // searchToolHeight (소수점 4자리 까지)
    toolMarginTop: 0, // searchToolMarginTop
    fixToolMarginTop: 0, // searchToolMarginTop (소수점 4자리 까지)
    changePoint: 0,
    fixChangePoint: 0,
  });

  const handleToggleClick = () => {
    // 기존 소스
    // console.log("토글버튼 클릭함");
    // if (toggleButton) {
    //   toggleButton.classList.toggle("DDDDDDDDDDD");
    // }
    // 수정 진행중
    setSearchFold(prev => {
      const newFoldState = !prev;

      const containerElement = containerRef.current;
      if (containerElement) {
        const areaElement =
          containerElement.querySelector<HTMLDivElement>(".search_area");
        const toggleButton = containerElement.querySelector<HTMLButtonElement>(
          ".search_tool .toggle"
        );

        // 버튼에 open 클래스 추가/제거
        if (toggleButton) {
          if (newFoldState === true) {
            toggleButton.classList.add("open");
            console.log("open 클래스 추가");
          } else {
            toggleButton.classList.remove("open");
            console.log("open 클래스 제거");
          }
        }

        // areaElement에 Fold 클래스 추가/제거
        if (areaElement) {
          if (newFoldState === true) {
            areaElement.classList.add("fold");
            console.log("fold 클래스 추가");
          } else {
            areaElement.classList.remove("fold");
            console.log("fold 클래스 제거");
          }
        }
      }
      return newFoldState;
    });
  };

  // 검색영역 관련 수치 계산 함수
  const calcDimensions = () => {
    const containerElement = containerRef.current;
    if (!containerElement) return;

    const areaElement =
      containerElement.querySelector<HTMLDivElement>(".search_area"); // searchArea
    const areaTool = containerElement.querySelector(".search_tool"); // searchArea
    const toggleButton = containerElement.querySelector<HTMLButtonElement>(
      ".search_tool .toggle"
    ); // searchArea > Toggle Button

    let areaPadding = 0;
    let fixAreaPadding = 0;
    let areaHeight = 0;
    let fixAreaHeight = 0;
    let areaBorderWidth = 0;
    let toolHeight = 0;
    let fixToolHeight = 0;
    let toolMarginTop = 0;
    let fixToolMarginTop = 0;
    let changePoint = 0;
    let fixChangePoint = 0;

    if (areaElement && areaTool && toggleButton) {
      // 1. 검색영역이 있는 페이지
      // console.log("검색영역 ⭕");

      // 검색영역
      const areaStyles = window.getComputedStyle(areaElement);
      areaPadding =
        parseFloat(areaStyles.paddingTop) +
        parseFloat(areaStyles.paddingBottom);
      fixAreaPadding = parseFloat(areaPadding.toFixed(4));
      areaHeight = parseFloat(areaStyles.height);
      fixAreaHeight = parseFloat(areaHeight.toFixed(4));

      areaBorderWidth = parseFloat(areaStyles.borderBottomWidth);
      // 검색 버튼 영역
      const areaToolStyle = window.getComputedStyle(areaTool);
      toolHeight = parseFloat(areaToolStyle.height);
      fixToolHeight = parseFloat(toolHeight.toFixed(4));
      toolMarginTop = parseFloat(areaToolStyle.marginTop);
      fixToolMarginTop = parseFloat(toolMarginTop.toFixed(4));
      // 변경 기준점
      changePoint =
        fixAreaPadding + fixToolHeight + fixToolMarginTop + areaBorderWidth;
      fixChangePoint = parseFloat(changePoint.toFixed(4));

      if (fixChangePoint > fixAreaHeight) {
        toggleButton.classList.add("hide");
      } else {
        toggleButton.classList.remove("hide");
      }

      if (searchFold === true) {
        // 1. 검색영역이 접힌 경우
        areaElement.classList.add("fold");
        // areaElement.style.maxHeight = `${fixChangePoint}px`;
      } else {
        // 2. 검색영역이 열린 경우
        areaElement.classList.remove("fold");
        // areaElement.style.maxHeight = "auto";
      }
    } else {
      // 2. 검색영역이 없는 페이지
      // console.log("검색영역 ❌");
    }

    setDimensions({
      areaPadding,
      fixAreaPadding,
      areaHeight,
      fixAreaHeight,
      areaBorderWidth,
      toolHeight,
      fixToolHeight,
      toolMarginTop,
      fixToolMarginTop,
      changePoint,
      fixChangePoint,
    });
    // console.log("📌 fixAreaHeight ? ", fixAreaHeight);
    // console.log("🐿️ fixChangePoint ? ", fixChangePoint);
    if (toggleButton) {
      toggleButton.removeEventListener("click", handleToggleClick); // 기존 리스너 제거
      toggleButton.addEventListener("click", handleToggleClick); // 새 리스너 등록
    }
    return () => {
      if (toggleButton) {
        toggleButton.removeEventListener("click", handleToggleClick);
      }
    };
  };

  useEffect(() => {
    //  // 처음 렌더링 시 계산
    calcDimensions();
    // Resize 이벤트 리스너
    const handleResize = () => {
      calcDimensions();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [props.children]);

  return (
    <div ref={containerRef} className={`container ${props.className}`}>
      <div className="container_inner">{props.children}</div>
    </div>
  );
}

export default Container;
