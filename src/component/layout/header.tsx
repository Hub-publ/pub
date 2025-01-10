import { DarkMode, FontReSize } from "../../function/style";
import React, { useEffect, useRef, useState } from "react";
import Switch from "../form/switch";
import Select from "react-select";
import CommonDim from "../common_dim";

interface Props {
  className?: string;
  children?: React.ReactNode;
  setMore?: React.Dispatch<React.SetStateAction<Number | undefined>>;
}

function Header(props: Props) {
  const [fold, setFold] = useState(false);
  const [quickFold, setQuickFold] = useState(false);
  const [innerPopup, setInnerPopup] = useState<number | undefined>(undefined);
  const [openMenus, setOpenMenus] = useState<number[]>([]);
  const [more, setLocalMore] = useState<Number | undefined>(undefined);

  // [Ref]
  const subMenuRefs = useRef<{ [key: number]: HTMLUListElement | null }>({}); // 각 서브 메뉴별 높이에 대한 ref 배열

  // Gnb 메뉴 펼침/접힘에 따라 container padding-left
  function GnbWidthHandler() {
    if (fold === true) {
      document.documentElement.style.setProperty("--gnb-width", "4.2857rem");
    } else {
      document.documentElement.style.setProperty("--gnb-width", "20rem");
    }
  }
  // Quick 메뉴 펼침/접힘에 따라 container padding-right
  function QuickWidthHandler() {
    const quick_ul = document.querySelector(".quick_menu ul") as HTMLElement;
    const quick_btn = document.querySelector(".quick_btn") as HTMLElement;
    if (quickFold === true) {
      document.documentElement.style.setProperty("--quick-width", "1rem");
      quick_ul.style.display = "none";
      quick_btn.style.transform = "translateX(-100%) rotateZ(-180deg)";
    } else {
      document.documentElement.style.setProperty("--quick-width", "5rem");
      quick_ul.style.display = "block";
      quick_btn.style.transform = "translateX(-100%) rotateZ(0deg)";
    }
  }

  // gnb 딤 영역 left 조정
  useEffect(() => {
    const gnbDim = document.querySelector<HTMLElement>(".gnb_dim");
    if (gnbDim) {
      if (fold === true) {
        gnbDim.style.setProperty("--gnb-width", "4.2857rem");
      } else {
        gnbDim.style.setProperty("--gnb-width", "0");
      }
    }
  }, [fold]);

  // 각 서브 메뉴별 높이 계산 및 반영
  useEffect(() => {
    Object.keys(subMenuRefs.current).forEach((menuId) => {
      const menu = subMenuRefs.current[parseInt(menuId)];
      if (menu) {
        const subMenuHeight = menu.scrollHeight;
        // 서브 메뉴가 열린 상태에서 max-height 값 설정
        if (openMenus.includes(parseInt(menuId))) {
          menu.style.maxHeight = `${subMenuHeight}px`;
        } else {
          menu.style.maxHeight = "0px";
        }
      }
    });
  }, [openMenus]);
  const toggleSubMenu = (menuId: number) => {
    setOpenMenus((prevState) => {
      // 메뉴가 이미 열린 상태라면 배열에서 제거, 닫힌 상태라면 배열에 추가
      if (prevState.includes(menuId)) {
        return prevState.filter((id) => id !== menuId);
      } else {
        return [...prevState, menuId];
      }
    });
  };

  // Custom Select
  const handleAreaClick = (event: MouseEvent) => {
    const select_option = document.querySelector(
      ".select_option"
    ) as HTMLElement;
    const currentArea = event.currentTarget as HTMLElement;
    const dataValue = currentArea.dataset.value;
    const valueArray = dataValue ? dataValue.split(",") : [];

    if (select_option) {
      // 기존 li 요소 제거
      select_option.innerHTML = "";
      select_option.style.cssText = "width:0; top:0; left:0;";

      if (valueArray.length > 0) {
        const select_width = currentArea.clientWidth;
        const select_height = currentArea.offsetHeight;
        const select_top =
          currentArea.getBoundingClientRect().top + window.scrollY;
        const select_left = currentArea.getBoundingClientRect().left;
        select_option.style.cssText = `width:${select_width}px; position:absolute; top: ${
          select_height + select_top + 4
        }px; left: ${select_left}px; z-index: 10;`;

        // valueArray에 내용이 있을 때만 li 생성
        valueArray.forEach((value) => {
          if (value.trim() !== "") {
            const li = document.createElement("li");
            // li의 내용 설정
            li.textContent = value;
            // select_option에 추가
            select_option.appendChild(li);
            const list = select_option.querySelectorAll("li");
            for (let i = 0; list.length > i; i++) {
              list[i].addEventListener("click", function () {
                const value_area = currentArea.querySelector(".select_value");
                if (value_area) {
                  const value = value_area.textContent;
                  const placeholder =
                    value_area.getAttribute("aria-placeholder");
                  if (value === placeholder) {
                    value_area.classList.add("placeholder");
                  } else {
                    value_area.classList.remove("placeholder");
                  }
                  value_area.textContent = `${list[i].textContent}`;
                }
                select_option.innerHTML = "";
                select_option.style.cssText = "width:0; top:0; left:0;";
              });
            }
          }
        });

        const option_height = select_option.offsetHeight;
        const option_top =
          select_option.getBoundingClientRect().top + window.scrollY;
        if (option_top + option_height > window.outerHeight) {
          // window 하단으로 넘칠 때 위로노출
          select_option.style.cssText = `width:${select_width}px; position:absolute; top: ${
            option_top - option_height - select_height - 8
          }px; left: ${select_left}px; z-index: 10;`;
        } else {
          // 기본 하단노출
          select_option.style.cssText = `width:${select_width}px; position:absolute; top: ${
            select_height + select_top + 4
          }px; left: ${select_left}px; z-index: 10;`;
        }
      }
    }

    const pop_wrap = document.querySelectorAll(".pop_wrap");
    const inner_popup_wrap = document.querySelectorAll(".inner_popup_wrap");
    for (let i = 0; pop_wrap.length > i; i++) {
      if (pop_wrap[i].classList.contains("on")) {
        select_option.style.zIndex = `100`;
      }
    }
    for (let i = 0; inner_popup_wrap.length > i; i++) {
      if (inner_popup_wrap[i].classList.contains("on")) {
        select_option.style.zIndex = `100`;
      }
    }
  };
  // Select Reset
  document.addEventListener("click", (event) => {
    const select_option = document.querySelector(
      ".select_option"
    ) as HTMLElement;
    if (event.target instanceof HTMLElement) {
      if (!event.target.closest(".select_area")) {
        select_option.innerHTML = "";
        select_option.style.cssText = "width:0; top:0; left:0;";
      }
    }
  });
  useEffect(() => {
    const selectAreas =
      document.querySelectorAll<HTMLDivElement>(".select_area");
    const addEventListeners = () => {
      selectAreas.forEach((area) => {
        const value_area = area.querySelectorAll(".select_value");
        // value_area의 각 요소에 대해 aria-placeholder 값 가져오기
        value_area.forEach((valueElement) => {
          const ariaValue = valueElement.textContent;
          const ariaPlaceholder = valueElement.getAttribute("aria-placeholder");
          if (ariaValue === ariaPlaceholder) {
            valueElement.classList.add("placeholder");
          } else {
            valueElement.classList.remove("placeholder");
          }
        });
        area.addEventListener("click", handleAreaClick);
      });
    };
    const removeEventListeners = () => {
      selectAreas.forEach((area) => {
        area.removeEventListener("click", handleAreaClick);
      });
    };
    addEventListeners();

    const popup_scroll_area = document.querySelectorAll(".popup_scroll_area");
    const scroll_area = document.querySelectorAll(".scroll_area");
    window.addEventListener("scroll", function () {
      const select_option = document.querySelector(
        ".select_option"
      ) as HTMLElement;
      // 리스트 Reset
      if (props.setMore) {
        props.setMore(undefined);
        setLocalMore(undefined);
      }
      // 팝업 위치 Reset
      if (more_pop) {
        more_pop.style.cssText = `right: 0; top: 0`;
      }
      // Select Reset
      select_option.innerHTML = "";
      select_option.style.cssText = "width:0; top:0; left:0;";
    });
    for (let i = 0; popup_scroll_area.length > i; i++) {
      popup_scroll_area[i].addEventListener("scroll", function () {
        const select_option = document.querySelector(
          ".select_option"
        ) as HTMLElement;
        // 리스트 Reset
        if (props.setMore) {
          props.setMore(undefined);
          setLocalMore(undefined);
        }
        // 팝업 위치 Reset
        if (more_pop) {
          more_pop.style.cssText = `right: 0; top: 0`;
        }
        // Select Reset
        select_option.innerHTML = "";
        select_option.style.cssText = "width:0; top:0; left:0;";
      });
    }
    for (let i = 0; scroll_area.length > i; i++) {
      scroll_area[i].addEventListener("scroll", function () {
        const select_option = document.querySelector(
          ".select_option"
        ) as HTMLElement;
        // 리스트 Reset
        if (props.setMore) {
          props.setMore(undefined);
          setLocalMore(undefined);
        }
        // 팝업 위치 Reset
        if (more_pop) {
          more_pop.style.cssText = `right: 0; top: 0`;
        }
        // Select Reset
        select_option.innerHTML = "";
        select_option.style.cssText = "width:0; top:0; left:0;";
      });
    }

    return () => {
      removeEventListeners();
    };
  }, []);

  // More Popup
  const body = document.querySelector("body") as HTMLElement;
  const more_pop = document.querySelector(".only_more_pop_wrap") as HTMLElement;
  setTimeout(() => {
    document.addEventListener("click", (event) => {
      if (event.target instanceof HTMLElement) {
        if (event.target.closest(".only_more_td")) {
          // 클릭한 더보기 버튼 Element
          const _target = event.target.closest(".only_more_td") as HTMLElement;
          // 클릭한 더보기 버튼의 부모 Table Element
          const parent_table = _target.closest("table") as HTMLTableElement;
          const parent_data_value = Number(_target.dataset.value);
          // 더보기 팝업이 배치 될 위치
          const height = _target.clientHeight;
          const top = _target.getBoundingClientRect().top + window.scrollY;
          const element_width = _target.clientWidth;
          const left = _target.getBoundingClientRect().left;
          const right = body.clientWidth - left - element_width;

          // data-value에 따라서 리스트 노출
          if (props.setMore) {
            props.setMore(parent_data_value);
            setLocalMore(parent_data_value);
          }
          if (more_pop) {
            more_pop.style.cssText = `right: ${right}px; top: ${
              height + top + 4
            }px`;
          }
        } else {
          // 리스트 Reset
          if (props.setMore) {
            props.setMore(undefined);
            setLocalMore(undefined);
          }
          // 팝업 위치 Reset
          if (more_pop) {
            more_pop.style.cssText = `right: 0; top: 0`;
          }
        }
      }
    });
  }, 200);
  window.addEventListener("resize", function () {
    const select_option = document.querySelector(
      ".select_option"
    ) as HTMLElement;
    // 리스트 Reset
    if (props.setMore) {
      props.setMore(undefined);
      setLocalMore(undefined);
    }
    // 팝업 위치 Reset
    if (more_pop) {
      more_pop.style.cssText = `right: 0; top: 0`;
    }
    // Select Reset
    select_option.innerHTML = "";
    select_option.style.cssText = "width:0; top:0; left:0;";
  });

  return (
    <>
      <ul className="select_option"></ul>
      <header className="flex align_center justify_between">
        <div className="left">
          <button
            className={`menu_btn ${fold === true ? "active" : ""}`}
            onClick={() => {
              setFold(!fold);
              setOpenMenus([]);
              GnbWidthHandler();
            }}
          >
            <div className="inner">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <h1 className="logo">
            <a href="/">HUBDNC PUBLISHING GUIDE</a>
          </h1>
          <ul className="header_gnb flex align_center">
            <li>
              <a href="#">딸기 🍓</a>
            </li>
            <li>
              <a href="#">사과 🍎</a>
            </li>
            <li>
              <a href="#">오렌지 🍊</a>
            </li>
            <li>
              <a href="#">키위 🥝</a>
            </li>
            <li>
              <a href="#">포도 🍇</a>
            </li>
          </ul>
        </div>
        <div className="right flex align_center">
          <CommonDim
            className={`${innerPopup === 1 && "on"}`}
            onClick={() => setInnerPopup(undefined)}
            transparent
          />
          <div className={`inner_popup_wrap ${innerPopup === 1 ? "on" : ""}`}>
            <button onClick={() => setInnerPopup(1)}>
              <img src="/img/icon/icon_setting.svg" alt="" />
            </button>
            <ul className="inner_popup medium right">
              <li className="flex align_center justify_between">
                <span>Font Sizing</span>
                <div
                  className="select_area fs_sizing_select"
                  data-value={[
                    "Font Size Small",
                    "Font Size Normal",
                    "Font Size Large",
                  ]}
                  onClick={FontReSize}
                >
                  <p className="select_value" aria-placeholder="셀렉트 기본값">
                    셀렉트 기본값
                  </p>
                </div>
              </li>
              <li className="flex align_center justify_between">
                <span>Dark Mode</span>
                <Switch
                  id="dark_switch"
                  onChange={(event) => DarkMode(event)}
                />
              </li>
            </ul>
          </div>
          {/* <Select
            options={[
              { value: "Font Size Small", label: "Font Size Small" },
              { value: "Font Size Normal", label: "Font Size Normal" },
              { value: "Font Size Large", label: "Font Size Large" },
            ]}
            placeholder="Font Size ReSizing"
            onChange={(event) => FontReSize(event)}
          />
          <Switch id="dark_switch" onChange={(event) => DarkMode(event)} /> */}
        </div>
      </header>
      <div
        className={`gnb_dim ${fold === true ? "on" : ""}`}
        onClick={() => {
          setFold(false);
          setOpenMenus([]);
          GnbWidthHandler();
          setQuickFold(false);
          QuickWidthHandler();
        }}
      ></div>
      <nav className={`gnb ${fold === true ? "active" : ""}`}>
        <ul className="main">
          <li className={`${openMenus.includes(1) ? "on" : ""}`}>
            <a href="#" onClick={() => toggleSubMenu(1)}>
              <img src="/img/icon/icon_gnb01.svg" alt="상위메뉴1" />
              상위메뉴1
            </a>
            <ul className="sub" ref={(el) => (subMenuRefs.current[1] = el)}>
              <li>
                <a href="#">하위메뉴1</a>
              </li>
              <li>
                <a href="#">하위메뉴2</a>
              </li>
              <li>
                <a href="#">하위메뉴3</a>
              </li>
              <li>
                <a href="#">하위메뉴4</a>
              </li>
              <li>
                <a href="#">하위메뉴5</a>
              </li>
            </ul>
          </li>
          <li className={`${openMenus.includes(2) ? "on" : ""}`}>
            <a href="#" onClick={() => toggleSubMenu(2)}>
              <img src="/img/icon/icon_gnb02.svg" alt="상위메뉴2" />
              상위메뉴2
            </a>
            <ul className="sub" ref={(el) => (subMenuRefs.current[2] = el)}>
              <li>
                <a href="#">하위메뉴1</a>
              </li>
              <li>
                <a href="#">하위메뉴2</a>
              </li>
              <li>
                <a href="#">하위메뉴3</a>
              </li>
              <li>
                <a href="#">하위메뉴4</a>
              </li>
              <li>
                <a href="#">하위메뉴5</a>
              </li>
            </ul>
          </li>
          <li className={`${openMenus.includes(3) ? "on" : ""}`}>
            <a href="#" onClick={() => toggleSubMenu(3)}>
              <img src="/img/icon/icon_gnb03.svg" alt="상위메뉴3" />
              상위메뉴3
            </a>
            <ul className="sub" ref={(el) => (subMenuRefs.current[3] = el)}>
              <li>
                <a href="#">하위메뉴1</a>
              </li>
              <li>
                <a href="#">하위메뉴2</a>
              </li>
              <li>
                <a href="#">하위메뉴3</a>
              </li>
              <li>
                <a href="#">하위메뉴4</a>
              </li>
              <li>
                <a href="#">하위메뉴5</a>
              </li>
            </ul>
          </li>
          <li className={`${openMenus.includes(4) ? "on" : ""}`}>
            <a href="/chatting" className="arrow_none">
              <img src="/img/icon/icon_gnb04.svg" alt="채팅" />
              채팅
            </a>
          </li>
          <li className={`${openMenus.includes(5) ? "on" : ""}`}>
            <a href="/comment" className="arrow_none">
              <img src="/img/icon/icon_gnb05.svg" alt="댓글" />
              댓글
            </a>
          </li>
          <li className={`${openMenus.includes(6) ? "on" : ""}`}>
            <a href="#" onClick={() => toggleSubMenu(6)}>
              <img src="/img/icon/icon_gnb06.svg" alt="상위메뉴6" />
              상위메뉴6
            </a>
            <ul className="sub" ref={(el) => (subMenuRefs.current[6] = el)}>
              <li>
                <a href="#">하위메뉴1</a>
              </li>
              <li>
                <a href="#">하위메뉴2</a>
              </li>
              <li>
                <a href="#">하위메뉴3</a>
              </li>
              <li>
                <a href="#">하위메뉴4</a>
              </li>
              <li>
                <a href="#">하위메뉴5</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="menu_fix">
          <p>메뉴고정</p>
          <Switch id="menu_fix" />
        </div>
      </nav>
      <div className="quick_menu">
        <ul>
          <li>
            <a href="#">
              <img src="/img/icon/icon_tooltip_btn.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/img/icon/icon_tooltip_btn.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/img/icon/icon_tooltip_btn.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/img/icon/icon_tooltip_btn.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/img/icon/icon_tooltip_btn.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/img/icon/icon_tooltip_btn.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/img/icon/icon_tooltip_btn.svg" alt="" />
            </a>
          </li>
        </ul>
        <button
          className="quick_btn"
          onClick={() => {
            setQuickFold(!quickFold);
            QuickWidthHandler();
          }}
        >
          <img src="/img/icon/icon_horizontal_arrow.svg" alt="" />
        </button>
      </div>
    </>
  );
}

export default Header;
