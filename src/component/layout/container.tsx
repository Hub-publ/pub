import React, { useCallback, useEffect, useRef, useState } from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

function Container(props: Props) {
  // useState
  const [searchFold, setSearchFold] = useState(false); // 검색영역 접힙 여부
  const [searchOver, setSearchOver] = useState(false); // 검색영역 줄바뀜 여부
  const [togglePoint, setTogglePoint] = useState<number>(120); // 검색영역 접힙 기준점

  // useRef
  const containerRef = useRef<HTMLDivElement>(null);
  const togglePointRef = useRef(togglePoint);

  // 검색영역 관련 수치
  const [dimensions, setDimensions] = useState({
    areaPadding: 0, // 검색영역 상하 패딩
    areaHeight: 0, // 검색영역 높이
    fixAreaHeight: 0, // 검색영역 높이 (소수점 4자리까지)
    areaBorderWidth: 0, // 검색영역 하단 보더
    toolHeight: 0, // 검색 버튼 영역 높이
    toolMarginTop: 0, // 검색 버튼 영역 상단 마진
    changePoint: 0, // 토글 기준점
    fixChangePoint: 0, // 토글 기준점 (소수점 4자리까지)
  });

  // 검색영역 토글 버튼 클릭 핸들러
  const handleToggleClick = useCallback(() => {
    setSearchFold(prev => {
      const newFoldState = !prev;
      const containerElement = containerRef.current;

      if (containerElement) {
        const areaElement =
          containerElement.querySelector<HTMLDivElement>(".search_area");
        const toggleButton = containerElement.querySelector<HTMLButtonElement>(
          ".search_tool .toggle"
        );

        // 토글 버튼에 open 클래스 추가/제거
        if (toggleButton) {
          toggleButton.classList.toggle("open", newFoldState);
        }

        // 검색영역 Fold 클래스 추가/제거, maxHeight 설정
        if (areaElement) {
          if (newFoldState) {
            areaElement.classList.add("fold");
            areaElement.style.maxHeight = `${togglePointRef.current}px`;
          } else {
            areaElement.classList.remove("fold");
            areaElement.style.maxHeight = "unset";
          }
        }
      }
      // setTogglePoint(togglePoint)
      return newFoldState;
    });
  }, []);

  // 검색영역 관련 수치 계산 함수
  const calcDimensions = useCallback(() => {
    const containerElement = containerRef.current;
    if (!containerElement) return;

    const areaElement =
      containerElement.querySelector<HTMLDivElement>(".search_area");
    const areaTool = containerElement.querySelector(".search_tool");
    const toggleButton = containerElement.querySelector<HTMLButtonElement>(
      ".search_tool .toggle"
    );

    let areaPadding = 0;
    let areaHeight = 0;
    let fixAreaHeight = 0;
    let areaBorderWidth = 0;
    let toolHeight = 0;
    let toolMarginTop = 0;
    let changePoint = 0;
    let fixChangePoint = 0;

    if (areaElement && areaTool && toggleButton) {
      // 검색영역 계산
      const areaStyles = window.getComputedStyle(areaElement);
      areaPadding =
        parseFloat(areaStyles.paddingTop) +
        parseFloat(areaStyles.paddingBottom);
      areaHeight = parseFloat(areaStyles.height);
      fixAreaHeight = parseFloat(areaHeight.toFixed(4));
      areaBorderWidth = parseFloat(areaStyles.borderBottomWidth);
      // 검색 버튼 영역 계산
      const areaToolStyle = window.getComputedStyle(areaTool);
      toolHeight = parseFloat(areaToolStyle.height);
      toolMarginTop = parseFloat(areaToolStyle.marginTop);
      // 변경 기준점 계산
      changePoint = areaPadding + toolHeight + toolMarginTop + areaBorderWidth;
      fixChangePoint = parseFloat(changePoint.toFixed(4));

      // 토글 버튼 가시성 처리
      if (fixChangePoint > fixAreaHeight) {
        // toggleButton.classList.add("hide");
        setSearchOver(false);
        areaElement.classList.remove("over_height");
        areaElement.classList.add("under_height");
      } else {
        // toggleButton.classList.remove("hide");
        setSearchOver(true);
        areaElement.classList.remove("under_height");
        areaElement.classList.add("over_height");
      }
    }

    // 상태 업데이트
    setDimensions({
      areaPadding,
      areaHeight,
      fixAreaHeight,
      areaBorderWidth,
      toolHeight,
      toolMarginTop,
      changePoint,
      fixChangePoint,
    });

    // TogglePoint 업데이트
    setTogglePoint(fixChangePoint);
    togglePointRef.current = fixChangePoint;
    if (toggleButton) {
      toggleButton.removeEventListener("click", handleToggleClick); // 기존 리스너 제거
      toggleButton.addEventListener("click", handleToggleClick); // 새 리스너 등록
    }
    return () => {
      if (toggleButton) {
        toggleButton.removeEventListener("click", handleToggleClick);
      }
    };
  }, []);

  // dimensions.fixChangePoint가 변경되면 togglePoint를 업데이트
  useEffect(() => {
    if (dimensions.fixChangePoint !== 0) {
      setTogglePoint(dimensions.fixChangePoint);
    }
  }, [dimensions.fixChangePoint]);

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
    <div
      ref={containerRef}
      className={`container ${searchOver ? "search_over" : ""} ${
        props.className
      }`}
    >
      <div className="container_inner">{props.children}</div>
    </div>
  );
}

export default Container;
