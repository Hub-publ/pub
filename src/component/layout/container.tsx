import React, { useCallback, useEffect, useRef, useState } from "react";
import { FontReSize } from "../../function/style";
interface Props {
  className?: string;
  children?: React.ReactNode;
}

function Container(props: Props) {
  // useRef
  // const searchOvertRef = useRef(false);
  // const togglePointRef = useRef(togglePoint);
  // useState
  // const [searchFold, setSearchFold] = useState(false); // 검색영역 접힙 여부
  // const [searchOver, setSearchOver] = useState(false); // 검색영역 넘침(줄바뀜) 여부
  // const [togglePoint, setTogglePoint] = useState<number>(50); // 검색영역 접힙 기준점

  // useRef
  const containerRef = useRef<HTMLDivElement>(null);
  // useState
  const [isFolded, setIsFolded] = useState(false); // fold 상태 관리
  const [standard, setStandard] = useState(0); // standard(기준점) 값 관리

  // 소수점 반올림 함수
  const roundToPrecision = (value: number, precision = 4) => {
    return (
      Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision)
    );
  };

  // devicePixelRatio를 활용한 보정 함수
  const normalizeValue = (value: number) => {
    const ratio = window.devicePixelRatio || 1;
    return Math.round(value * ratio) / ratio;
  };

  const toggleFold = () => {
    const containerElement = containerRef.current;
    if (!containerElement) return;
    const areaElement =
      containerElement.querySelector<HTMLDivElement>(".search_area");

    if (areaElement) {
      setIsFolded(prevState => {
        const newFoldState = !prevState;

        if (newFoldState) {
          // console.log("🚪접혓슝슝");
          // areaElement.classList.add("over_fold");
          // areaElement.style.height = `${standard}px`;
        } else {
          // console.log("🪟열렷슝슝");
          // areaElement.classList.remove("over_fold");
          // areaElement.style.height = "";
        }

        return newFoldState;
      });
    }
  };

  // 검생영역 수치 계산 함수
  const calcDimensions = () => {
    const containerElement = containerRef.current;
    if (!containerElement) return;
    // 검색영역
    const areaElement = containerElement.querySelector(".search_area");
    const item = containerElement.querySelector(".search_area > ul > li");
    // 토글 버튼
    const toggleButton = containerElement.querySelector<HTMLButtonElement>(
      ".search_tool .toggle"
    );

    if (areaElement && item) {
      // console.log("검색영역 ⭕");
      const areaStyle = window.getComputedStyle(areaElement);
      const itemStyle = window.getComputedStyle(item);
      // 검색 영역
      const areaPadding = normalizeValue(parseFloat(areaStyle.paddingTop));
      const areaBorder = normalizeValue(
        parseFloat(areaStyle.borderBottomWidth)
      );
      const areaHeight = normalizeValue(parseFloat(areaStyle.height));
      const itemHeight = normalizeValue(parseFloat(itemStyle.height));
      // 기준점 계산 (수정 전)
      // const standard = roundToPrecision(
      //   areaPadding * 2 + areaBorder + itemHeight
      // );

      // 기준점 계산 (수정 전)
      const newStandard = roundToPrecision(
        areaPadding * 2 + areaBorder + itemHeight
      );
      setStandard(newStandard);

      // 검색영역 넘침 여부
      if (areaHeight > newStandard) {
        // 1) 2줄 이상 노출
        areaElement.classList.remove("under_height");
        areaElement.classList.add("over_height");
        // 토글 버튼 노출
        if (toggleButton) {
          toggleButton.style.display = "block";
        }
      } else {
        // 2) 1줄 노출
        areaElement.classList.remove("over_height");
        areaElement.classList.add("under_height");

        // 토글 버튼 미노출
        if (toggleButton) {
          toggleButton.style.display = "none";
        }
      }

      // 토글 버튼 클릭릭
      if (toggleButton) {
        toggleButton.addEventListener("click", toggleFold);
      }
      return () => {
        if (toggleButton) {
          toggleButton.removeEventListener("click", toggleFold);
        }
      };
    } else {
      // console.log("검색영역 ❌");
    }
  };

  useEffect(() => {
    // 처음 렌더링 시 계산
    calcDimensions();
    // Resize
    const handleResize = () => {
      calcDimensions();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // html, body의 font-size 변경시 수치 재계산
  useEffect(() => {
    const htmlElement = document.documentElement;

    const resizeObserver = new ResizeObserver(() => {
      const fontSize = getComputedStyle(htmlElement).fontSize;
      calcDimensions(); // 폰트 변경 시 dimensions 다시 계산
      // console.log("🌱font-size 변경됨!!", fontSize);
    });

    resizeObserver.observe(htmlElement); // html 요소 감지 시작
    return () => {
      resizeObserver.disconnect(); // Observer 해제
    };
  }, [FontReSize]);

  return (
    <div ref={containerRef} className={`container ${props.className}`}>
      <div className="container_inner">{props.children}</div>
    </div>
  );
}

export default Container;
