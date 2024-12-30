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

  // 검색영역 관련 수치
  // const [dimensions, setDimensions] = useState({
  //   areaPadding: 0, // 검색영역 상하 패딩
  //   fixAreaPadding: 0, // 검색영역 상하 패딩 (소수점 4자리까지)
  //   areaHeight: 0, // 검색영역 높이
  //   fixAreaHeight: 0, // 검색영역 높이 (소수점 4자리까지)
  //   areaBorderWidth: 0, // 검색영역 하단 보더
  //   toolHeight: 0, // 검색 버튼 영역 높이
  //   fixToolHeight: 0, // 검색 버튼 영역 높이 (소수점 4자리까지)
  //   toolMarginTop: 0, // 검색 버튼 영역 상단 마진
  //   fixToolMarginTop: 0, // 검색 버튼 영역 상단 마진 (소수점 4자리까지)
  //   changePoint: 0, // 토글 기준점
  //   fixChangePoint: 0, // 토글 기준점 (소수점 4자리까지)
  // });

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
      ////// console.log("검색영역 ⭕");

      const areaStyle = window.getComputedStyle(areaElement);
      const itemStyle = window.getComputedStyle(item);
      // 검색 영역
      const areaPadding = normalizeValue(parseFloat(areaStyle.paddingTop));
      const areaBorder = normalizeValue(
        parseFloat(areaStyle.borderBottomWidth)
      );
      const areaHeight = normalizeValue(parseFloat(areaStyle.height));
      const itemHeight = normalizeValue(parseFloat(itemStyle.height));
      // 기준점
      const standard = roundToPrecision(
        areaPadding * 2 + areaBorder + itemHeight
      );

      ////// console.log("A. areaHeight", areaHeight);
      ////// console.log("4. standard", standard);

      // 검색영역 넘침 여부
      if (areaHeight > standard) {
        // 2줄 이상 노출
        areaElement.classList.remove("under_height");
        areaElement.classList.add("over_height");
        // 토글 버튼 노출
        if (toggleButton) {
          toggleButton.style.display = "block";
          ////// console.log("🍇토글 버튼 있음~~~@@");
        }
      } else {
        // 1줄 노출
        areaElement.classList.remove("over_height");
        areaElement.classList.add("under_height");

        // 토글 버튼 미노출
        if (toggleButton) {
          toggleButton.style.display = "none";
          ////// console.log("🥕토글 버튼 없음!!!!");
        }
      }
    } else {
      ////// console.log("검색영역 ❌");
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
  // }, [props.children]);

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

  //const calcDimensions = useCallback(() => {
  //  const containerElement = containerRef.current;
  //  if (!containerElement) return;
  //
  //  const areaElement =
  //    containerElement.querySelector<HTMLDivElement>(".search_area");
  //  const areaTool = containerElement.querySelector(".search_tool");
  //  const toggleButton = containerElement.querySelector<HTMLButtonElement>(
  //    ".search_tool .toggle"
  //  );
  //
  //  let areaPadding = 0;
  //  let fixAreaPadding = 0;
  //  let areaHeight = 0;
  //  let fixAreaHeight = 0;
  //  let areaBorderWidth = 0;
  //  let toolHeight = 0;
  //  let fixToolHeight = 0;
  //  let toolMarginTop = 0;
  //  let fixToolMarginTop = 0;
  //  let changePoint = 0;
  //  let fixChangePoint = 0;
  //
  //  // 검색영역 관련 수치 계산
  //  if (areaElement && areaTool && toggleButton) {
  //    // 검색영역
  //    const areaStyles = window.getComputedStyle(areaElement);
  //    areaPadding =
  //      parseFloat(areaStyles.paddingTop) +
  //      parseFloat(areaStyles.paddingBottom);
  //    fixAreaPadding = parseFloat(areaPadding.toFixed(4));
  //    areaHeight = parseFloat(areaStyles.height);
  //    fixAreaHeight = parseFloat(areaHeight.toFixed(4));
  //    areaBorderWidth = parseFloat(areaStyles.borderBottomWidth);
  //    // 검색 버튼 영역
  //    const areaToolStyle = window.getComputedStyle(areaTool);
  //    toolHeight = parseFloat(areaToolStyle.height);
  //    fixToolHeight = parseFloat(toolHeight.toFixed(4));
  //    toolMarginTop = parseFloat(areaToolStyle.marginTop);
  //    fixToolMarginTop = parseFloat(toolMarginTop.toFixed(4));
  //    // 변경 기준점
  //    // changePoint = areaPadding + areaBorderWidth + toolHeight + toolMarginTop;
  //    changePoint =
  //      fixAreaPadding + areaBorderWidth + fixToolHeight + fixToolMarginTop;
  //    fixChangePoint = parseFloat(changePoint.toFixed(4));
  //
  //    // console.log("📛", fixChangePoint);
  //    // console.log("🧀", fixAreaHeight);
  //
  //    // 영역 넘침 여부에 따른 클래스 부여
  //    // if (fixChangePoint > fixAreaHeight) {
  //    //   // 1단
  //    //   // toggleButton.classList.add("hide"); [정리] 일단 사용 X
  //    //   setSearchOver(false);
  //    //   areaElement.classList.remove("over_height__2222");
  //    //   areaElement.classList.add("under_height_11"); // [정리] underheight는 꼭 필요한지 확인 후 삭제 필요
  //    // } else {
  //    //   // 2단 이상
  //    //   // toggleButton.classList.remove("hide"); [정리] 일단 사용 X
  //    //   setSearchOver(true);
  //    //   areaElement.classList.remove("under_height_11"); // [정리] underheight는 꼭 필요한지 확인 후 삭제 필요
  //    //   areaElement.classList.add("over_height__2222");
  //    // }
  //  }
  //  const isSearchOver = fixChangePoint <= fixAreaHeight;
  //  // console.log("Calculated:", {
  //  //   fixChangePoint,
  //  //   fixAreaHeight,
  //  //   isSearchOver,
  //  // }); // 디버깅 로그
  //
  //  setSearchOver(isSearchOver);
  //  // 상태 업데이트
  //  setDimensions({
  //    areaPadding,
  //    fixAreaPadding,
  //    areaHeight,
  //    fixAreaHeight,
  //    areaBorderWidth,
  //    toolHeight,
  //    fixToolHeight,
  //    toolMarginTop,
  //    fixToolMarginTop,
  //    changePoint,
  //    fixChangePoint,
  //  });
  //
  //  // TogglePoint 업데이트
  //  // setSearchOver(fixChangePoint <= fixAreaHeight); // 상태 업데이트
  //  setTogglePoint(fixChangePoint);
  //  togglePointRef.current = fixChangePoint;
  //  // if (toggleButton) {
  //  //   toggleButton.removeEventListener("click", handleToggleClick); // 기존 리스너 제거
  //  //   toggleButton.addEventListener("click", handleToggleClick); // 새 리스너 등록
  //  // }
  //  // return () => {
  //  //   if (toggleButton) {
  //  //     toggleButton.removeEventListener("click", handleToggleClick);
  //  //   }
  //  // };
  //
  //  // console.log("✅넘침 여부 :: setSearchOver! === >", searchOver);
  //  // console.log("✅넘침 여부 :: isSearchOver! === >", isSearchOver);
  //}, []); // calcDimensions
  //
  // useEffect

  // 상태 변화 감지 후 DOM 업데이트
  // useEffect(() => {
  //   const areaElement =
  //     containerRef.current?.querySelector<HTMLDivElement>(".search_area");
  //   if (!areaElement) return;
  //
  //   if (searchOver) {
  //     areaElement.classList.remove("under_height_11");
  //     areaElement.classList.add("over_height__2222");
  //     // console.log("업데이트 True");
  //   } else {
  //     areaElement.classList.remove("over_height__2222");
  //     areaElement.classList.add("under_height_11");
  //     // console.log("업데이트 False");
  //   }
  // }, [searchOver]);

  return (
    <div ref={containerRef} className={`container ${props.className}`}>
      <div className="container_inner">{props.children}</div>
    </div>
  );
}

export default Container;

// 스크럼 진행 전 원본
// import React, { useCallback, useEffect, useRef, useState } from "react";
// import { FontReSize } from "../../function/style";
// interface Props {
//   className?: string;
//   children?: React.ReactNode;
// }

// function Container(props: Props) {
//   // useState
//   // const [searchFold, setSearchFold] = useState(false); // 검색영역 접힙 여부
//   const [searchOver, setSearchOver] = useState(false); // 검색영역 넘침(줄바뀜) 여부
//   const [togglePoint, setTogglePoint] = useState<number>(50); // 검색영역 접힙 기준점

//   // useRef
//   const containerRef = useRef<HTMLDivElement>(null);
//   const searchOvertRef = useRef(false);
//   const togglePointRef = useRef(togglePoint);

//   // 검색영역 관련 수치
//   const [dimensions, setDimensions] = useState({
//     areaPadding: 0, // 검색영역 상하 패딩
//     fixAreaPadding: 0, // 검색영역 상하 패딩 (소수점 4자리까지)
//     areaHeight: 0, // 검색영역 높이
//     fixAreaHeight: 0, // 검색영역 높이 (소수점 4자리까지)
//     areaBorderWidth: 0, // 검색영역 하단 보더
//     toolHeight: 0, // 검색 버튼 영역 높이
//     fixToolHeight: 0, // 검색 버튼 영역 높이 (소수점 4자리까지)
//     toolMarginTop: 0, // 검색 버튼 영역 상단 마진
//     fixToolMarginTop: 0, // 검색 버튼 영역 상단 마진 (소수점 4자리까지)
//     changePoint: 0, // 토글 기준점
//     fixChangePoint: 0, // 토글 기준점 (소수점 4자리까지)
//   });

//   // 검색영역 관련 수치 계산 함수
//   const calcDimensions = useCallback(() => {
//     const containerElement = containerRef.current;
//     if (!containerElement) return;

//     const areaElement =
//       containerElement.querySelector<HTMLDivElement>(".search_area");
//     const areaTool = containerElement.querySelector(".search_tool");
//     const toggleButton = containerElement.querySelector<HTMLButtonElement>(
//       ".search_tool .toggle"
//     );

//     let areaPadding = 0;
//     let fixAreaPadding = 0;
//     let areaHeight = 0;
//     let fixAreaHeight = 0;
//     let areaBorderWidth = 0;
//     let toolHeight = 0;
//     let fixToolHeight = 0;
//     let toolMarginTop = 0;
//     let fixToolMarginTop = 0;
//     let changePoint = 0;
//     let fixChangePoint = 0;

//     // 검색영역 관련 수치 계산
//     if (areaElement && areaTool && toggleButton) {
//       // 검색영역
//       const areaStyles = window.getComputedStyle(areaElement);
//       areaPadding =
//         parseFloat(areaStyles.paddingTop) +
//         parseFloat(areaStyles.paddingBottom);
//       fixAreaPadding = parseFloat(areaPadding.toFixed(4));
//       areaHeight = parseFloat(areaStyles.height);
//       fixAreaHeight = parseFloat(areaHeight.toFixed(4));
//       areaBorderWidth = parseFloat(areaStyles.borderBottomWidth);
//       // 검색 버튼 영역
//       const areaToolStyle = window.getComputedStyle(areaTool);
//       toolHeight = parseFloat(areaToolStyle.height);
//       fixToolHeight = parseFloat(toolHeight.toFixed(4));
//       toolMarginTop = parseFloat(areaToolStyle.marginTop);
//       fixToolMarginTop = parseFloat(toolMarginTop.toFixed(4));
//       // 변경 기준점
//       // changePoint = areaPadding + areaBorderWidth + toolHeight + toolMarginTop;
//       changePoint =
//         fixAreaPadding + areaBorderWidth + fixToolHeight + fixToolMarginTop;
//       fixChangePoint = parseFloat(changePoint.toFixed(4));

//       // console.log("📛", fixChangePoint);
//       // console.log("🧀", fixAreaHeight);

//       // 영역 넘침 여부에 따른 클래스 부여
//       // if (fixChangePoint > fixAreaHeight) {
//       //   // 1단
//       //   // toggleButton.classList.add("hide"); [정리] 일단 사용 X
//       //   setSearchOver(false);
//       //   areaElement.classList.remove("over_height__2222");
//       //   areaElement.classList.add("under_height_11"); // [정리] underheight는 꼭 필요한지 확인 후 삭제 필요
//       // } else {
//       //   // 2단 이상
//       //   // toggleButton.classList.remove("hide"); [정리] 일단 사용 X
//       //   setSearchOver(true);
//       //   areaElement.classList.remove("under_height_11"); // [정리] underheight는 꼭 필요한지 확인 후 삭제 필요
//       //   areaElement.classList.add("over_height__2222");
//       // }
//     }
//     const isSearchOver = fixChangePoint <= fixAreaHeight;
//     // console.log("Calculated:", {
//     //   fixChangePoint,
//     //   fixAreaHeight,
//     //   isSearchOver,
//     // }); // 디버깅 로그

//     setSearchOver(isSearchOver);
//     // 상태 업데이트
//     setDimensions({
//       areaPadding,
//       fixAreaPadding,
//       areaHeight,
//       fixAreaHeight,
//       areaBorderWidth,
//       toolHeight,
//       fixToolHeight,
//       toolMarginTop,
//       fixToolMarginTop,
//       changePoint,
//       fixChangePoint,
//     });

//     // TogglePoint 업데이트
//     // setSearchOver(fixChangePoint <= fixAreaHeight); // 상태 업데이트
//     setTogglePoint(fixChangePoint);
//     togglePointRef.current = fixChangePoint;
//     // if (toggleButton) {
//     //   toggleButton.removeEventListener("click", handleToggleClick); // 기존 리스너 제거
//     //   toggleButton.addEventListener("click", handleToggleClick); // 새 리스너 등록
//     // }
//     // return () => {
//     //   if (toggleButton) {
//     //     toggleButton.removeEventListener("click", handleToggleClick);
//     //   }
//     // };

//     // console.log("✅넘침 여부 :: setSearchOver! === >", searchOver);
//     // console.log("✅넘침 여부 :: isSearchOver! === >", isSearchOver);
//   }, []); // calcDimensions

//   // useEffect

//   // 상태 변화 감지 후 DOM 업데이트
//   useEffect(() => {
//     const areaElement =
//       containerRef.current?.querySelector<HTMLDivElement>(".search_area");
//     if (!areaElement) return;

//     if (searchOver) {
//       areaElement.classList.remove("under_height_11");
//       areaElement.classList.add("over_height__2222");
//       // console.log("업데이트 True");
//     } else {
//       areaElement.classList.remove("over_height__2222");
//       areaElement.classList.add("under_height_11");
//       // console.log("업데이트 False");
//     }
//   }, [searchOver]);

//   useEffect(() => {
//     // 처음 렌더링 시 계산
//     calcDimensions();
//     // Resize 이벤트 리스너
//     const handleResize = () => {
//       calcDimensions();
//     };
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [props.children]);

//   useEffect(() => {
//     // html, body의 font-size 변경시 수치 재계산
//     const htmlElement = document.documentElement;

//     const resizeObserver = new ResizeObserver(() => {
//       const fontSize = getComputedStyle(htmlElement).fontSize;
//       calcDimensions(); // 폰트 변경 시 dimensions 다시 계산
//       // console.log("🌱font-size 변경됨!!", fontSize);
//     });

//     resizeObserver.observe(htmlElement); // html 요소 감지 시작
//     return () => {
//       resizeObserver.disconnect(); // Observer 해제
//     };
//   }, [FontReSize]);

//   return (
//     <div ref={containerRef} className={`container ${props.className}`}>
//       <div className="container_inner">{props.children}</div>
//     </div>
//   );
// }

// export default Container;

// 원본1

// import React, { useCallback, useEffect, useRef, useState } from "react";
// import { FontReSize } from "../../function/style";
// interface Props {
//   className?: string;
//   children?: React.ReactNode;
// }

// function Container(props: Props) {
//   // useState
//   const [searchFold, setSearchFold] = useState(false); // 검색영역 접힙 여부
//   const [searchOver, setSearchOver] = useState(false); // 검색영역 줄바뀜 여부
//   const [togglePoint, setTogglePoint] = useState<number>(50); // 검색영역 접힙 기준점

//   // useRef
//   const containerRef = useRef<HTMLDivElement>(null);
//   const togglePointRef = useRef(togglePoint);

//   // 검색영역 관련 수치
//   const [dimensions, setDimensions] = useState({
//     areaPadding: 0, // 검색영역 상하 패딩
//     areaHeight: 0, // 검색영역 높이
//     fixAreaHeight: 0, // 검색영역 높이 (소수점 4자리까지)
//     areaBorderWidth: 0, // 검색영역 하단 보더
//     toolHeight: 0, // 검색 버튼 영역 높이
//     toolMarginTop: 0, // 검색 버튼 영역 상단 마진
//     changePoint: 0, // 토글 기준점
//     fixChangePoint: 0, // 토글 기준점 (소수점 4자리까지)
//   });

//   // 검색영역 max-height 업데이트 함수
//   const updateMaxHeight = useCallback(() => {
//     const containerElement = containerRef.current;
//     if (!containerElement) return;

//     const areaElement =
//       containerElement.querySelector<HTMLDivElement>(".search_area");

//     if (areaElement) {
//       if (searchFold) {
//         // 접힌 상태: max-height를 togglePoint에 맞게 설정
//         areaElement.style.maxHeight = `${togglePointRef.current}px`;
//       } else {
//         // 펼쳐진 상태 : max-height 제거
//         areaElement.style.maxHeight = "unset";
//       }
//     }

//     console.log("업데이트 완료!!!");
//   }, [searchFold]);

//   // 검색영역 토글 버튼 클릭 핸들러
//   const handleToggleClick = useCallback(() => {
//     setSearchFold(prev => {
//       const newFoldState = !prev;
//       const containerElement = containerRef.current;

//       if (containerElement) {
//         const areaElement =
//           containerElement.querySelector<HTMLDivElement>(".search_area");
//         const toggleButton = containerElement.querySelector<HTMLButtonElement>(
//           ".search_tool .toggle"
//         );

//         // 토글 버튼에 open 클래스 추가/제거
//         if (toggleButton) {
//           toggleButton.classList.toggle("open", newFoldState);
//         }

//         // 검색영역 Fold 클래스 추가/제거, maxHeight 설정
//         if (areaElement) {
//           if (newFoldState) {
//             areaElement.classList.add("fold");
//             // areaElement.style.maxHeight = `${togglePointRef.current}px`;
//           } else {
//             areaElement.classList.remove("fold");
//             // areaElement.style.maxHeight = "unset";
//           }
//         }
//       }
//       // setTogglePoint(togglePoint)
//       return newFoldState;
//     });
//   }, []);

//   // 검색영역 관련 수치 계산 함수
//   const calcDimensions = useCallback(() => {
//     const containerElement = containerRef.current;
//     if (!containerElement) return;

//     const areaElement =
//       containerElement.querySelector<HTMLDivElement>(".search_area");
//     const areaTool = containerElement.querySelector(".search_tool");
//     const toggleButton = containerElement.querySelector<HTMLButtonElement>(
//       ".search_tool .toggle"
//     );

//     let areaPadding = 0;
//     let areaHeight = 0;
//     let fixAreaHeight = 0;
//     let areaBorderWidth = 0;
//     let toolHeight = 0;
//     let toolMarginTop = 0;
//     let changePoint = 0;
//     let fixChangePoint = 0;

//     if (areaElement && areaTool && toggleButton) {
//       // 검색영역 계산
//       const areaStyles = window.getComputedStyle(areaElement);
//       areaPadding =
//         parseFloat(areaStyles.paddingTop) +
//         parseFloat(areaStyles.paddingBottom);
//       areaHeight = parseFloat(areaStyles.height);
//       fixAreaHeight = parseFloat(areaHeight.toFixed(4));
//       areaBorderWidth = parseFloat(areaStyles.borderBottomWidth);
//       // 검색 버튼 영역 계산
//       const areaToolStyle = window.getComputedStyle(areaTool);
//       toolHeight = parseFloat(areaToolStyle.height);
//       toolMarginTop = parseFloat(areaToolStyle.marginTop);
//       // 변경 기준점 계산
//       changePoint = areaPadding + toolHeight + toolMarginTop + areaBorderWidth;
//       fixChangePoint = parseFloat(changePoint.toFixed(4));

//       // 토글 버튼 가시성 처리
//       if (fixChangePoint > fixAreaHeight) {
//         // toggleButton.classList.add("hide");
//         setSearchOver(false);
//         areaElement.classList.remove("over_height");
//         areaElement.classList.add("under_height");
//       } else {
//         // toggleButton.classList.remove("hide");
//         setSearchOver(true);
//         areaElement.classList.remove("under_height");
//         areaElement.classList.add("over_height");
//       }
//     }

//     // 상태 업데이트
//     setDimensions({
//       areaPadding,
//       areaHeight,
//       fixAreaHeight,
//       areaBorderWidth,
//       toolHeight,
//       toolMarginTop,
//       changePoint,
//       fixChangePoint,
//     });

//     // TogglePoint 업데이트
//     setTogglePoint(fixChangePoint);
//     togglePointRef.current = fixChangePoint;
//     if (toggleButton) {
//       toggleButton.removeEventListener("click", handleToggleClick); // 기존 리스너 제거
//       toggleButton.addEventListener("click", handleToggleClick); // 새 리스너 등록
//     }
//     return () => {
//       if (toggleButton) {
//         toggleButton.removeEventListener("click", handleToggleClick);
//       }
//     };
//   }, []);

//   // searchFold/togglePoint 변경시 max-height 업데이트
//   useEffect(() => {
//     updateMaxHeight();
//   }, [searchFold, togglePoint, updateMaxHeight]);

//   // dimensions.fixChangePoint가 변경되면 togglePoint를 업데이트
//   useEffect(() => {
//     if (dimensions.fixChangePoint !== 0) {
//       setTogglePoint(dimensions.fixChangePoint);
//     }
//   }, [dimensions.fixChangePoint]);

//   useEffect(() => {
//     //  // 처음 렌더링 시 계산
//     calcDimensions();
//     // Resize 이벤트 리스너
//     const handleResize = () => {
//       calcDimensions();
//     };
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [props.children]);

//   useEffect(() => {
//     // html, body의 font-size 변경 감지
//     const htmlElement = document.documentElement;

//     const resizeObserver = new ResizeObserver(() => {
//       const fontSize = getComputedStyle(htmlElement).fontSize;
//       calcDimensions(); // 폰트 변경 시 dimensions 다시 계산
//       console.log("🌱font-size 변경됨!!", fontSize);
//     });

//     resizeObserver.observe(htmlElement); // html 요소 감시 시작
//     return () => {
//       resizeObserver.disconnect(); // Observer 해제
//     };
//   }, [FontReSize]);

//   return (
//     <div
//       ref={containerRef}
//       className={`container ${searchOver ? "search_over" : ""} ${
//         props.className
//       }`}
//     >
//       <div className="container_inner">{props.children}</div>
//     </div>
//   );
// }

// export default Container;
