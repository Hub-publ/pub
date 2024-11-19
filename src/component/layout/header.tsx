import { DarkMode, FontReSize } from "../../function/darkmode";
import React, { useEffect, useRef, useState } from "react";
import Switch from "../form/switch";
import Select from "react-select";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

function Header(props: Props) {
  const [fold, setFold] = useState(false);
  const [openMenus, setOpenMenus] = useState<number[]>([]);

  // [Ref]
  const subMenuRefs = useRef<{ [key: number]: HTMLUListElement | null }>({}); // 각 서브 메뉴별 높이에 대한 ref 배열

  // 각 서브 메뉴별 높이 계산 및 반영
  useEffect(() => {
    Object.keys(subMenuRefs.current).forEach(menuId => {
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
    setOpenMenus(prevState => {
      // 메뉴가 이미 열린 상태라면 배열에서 제거, 닫힌 상태라면 배열에 추가
      if (prevState.includes(menuId)) {
        return prevState.filter(id => id !== menuId);
      } else {
        return [...prevState, menuId];
      }
    });
  };

  return (
    <>
      <header className="flex align_center justify_between">
        <div className="left">
          <button
            className={`menu_btn ${fold === true ? "active" : ""}`}
            onClick={() => {
              setFold(!fold);
              setOpenMenus([]);
            }}
          >
            <div className="inner">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <h1 className="logo">HUBDNC PUBLISHING GUIDE</h1>
        </div>
        <div className="right flex align_center">
          <Select
            // styles={{
            //   control: (state) => ({
            //     backgroundColor: state.isFocused ? "red" : "grey",
            //   }),
            // }}
            options={[
              { value: "Font Size Small", label: "Font Size Small" },
              { value: "Font Size Normal", label: "Font Size Normal" },
              { value: "Font Size Large", label: "Font Size Large" },
            ]}
            placeholder="Font Size ReSizing"
            onChange={event => FontReSize(event)}
          />
          <Switch id="dark_switch" onChange={event => DarkMode(event)} />
        </div>
      </header>
      {fold === true ? (
        <div className="gnb_dim" onClick={() => setFold(false)}></div>
      ) : (
        ""
      )}
      <nav className={`gnb ${fold === true ? "active" : ""}`}>
        {/*
        <button className="nav_close" onClick={() => setFold(false)}>
          <img src="/img/icon/icon_close.svg" alt="" />
        </button>
        */}
        <ul className="main">
          <li className={`${openMenus.includes(1) ? "on" : ""}`}>
            <a href="javascript:;" onClick={() => toggleSubMenu(1)}>
              <img src="/img/icon/icon_gnb01.svg" alt="상위메뉴1" />
              상위메뉴1
            </a>
            <ul className="sub" ref={el => (subMenuRefs.current[1] = el)}>
              <li>
                <a href="javascript:;">하위메뉴1</a>
              </li>
              <li>
                <a href="javascript:;">하위메뉴2</a>
              </li>
              <li>
                <a href="javascript:;">하위메뉴3</a>
              </li>
              <li>
                <a href="javascript:;">하위메뉴4</a>
              </li>
              <li>
                <a href="javascript:;">하위메뉴5</a>
              </li>
            </ul>
          </li>
          <li className={`${openMenus.includes(2) ? "on" : ""}`}>
            <a href="javascript:;" onClick={() => toggleSubMenu(2)}>
              <img src="/img/icon/icon_gnb02.svg" alt="상위메뉴2" />
              상위메뉴2
            </a>
            <ul className="sub" ref={el => (subMenuRefs.current[2] = el)}>
              <li>
                <a href="javascript:;">하위메뉴1</a>
              </li>
              <li>
                <a href="javascript:;">하위메뉴2</a>
              </li>
              <li>
                <a href="javascript:;">하위메뉴3</a>
              </li>
              <li>
                <a href="javascript:;">하위메뉴4</a>
              </li>
              <li>
                <a href="javascript:;">하위메뉴5</a>
              </li>
            </ul>
          </li>
          <li className={`${openMenus.includes(3) ? "on" : ""}`}>
            <a href="javascript:;" onClick={() => toggleSubMenu(3)}>
              <img src="/img/icon/icon_gnb03.svg" alt="상위메뉴3" />
              상위메뉴3
            </a>
            <ul className="sub" ref={el => (subMenuRefs.current[3] = el)}>
              <li>
                <a href="javascript:;">하위메뉴1</a>
              </li>
              <li>
                <a href="javascript:;">하위메뉴2</a>
              </li>
              <li>
                <a href="javascript:;">하위메뉴3</a>
              </li>
              <li>
                <a href="javascript:;">하위메뉴4</a>
              </li>
              <li>
                <a href="javascript:;">하위메뉴5</a>
              </li>
            </ul>
          </li>
          <li className={`${openMenus.includes(4) ? "on" : ""}`}>
            <a href="javascript:;" onClick={() => toggleSubMenu(4)}>
              <img src="/img/icon/icon_gnb04.svg" alt="상위메뉴4" />
              상위메뉴4
            </a>
            <ul className="sub" ref={el => (subMenuRefs.current[4] = el)}>
              <li>
                <a href="javascript:;">하위메뉴1</a>
              </li>
              <li>
                <a href="javascript:;">하위메뉴2</a>
              </li>
              <li>
                <a href="javascript:;">하위메뉴3</a>
              </li>
              <li>
                <a href="javascript:;">하위메뉴4</a>
              </li>
              <li>
                <a href="javascript:;">하위메뉴5</a>
              </li>
            </ul>
          </li>
          <li className={`${openMenus.includes(5) ? "on" : ""}`}>
            <a href="javascript:;" onClick={() => toggleSubMenu(5)}>
              <img src="/img/icon/icon_gnb05.svg" alt="상위메뉴5" />
              상위메뉴5
            </a>
            <ul className="sub" ref={el => (subMenuRefs.current[5] = el)}>
              <li>
                <a href="javascript:;">하위메뉴1</a>
              </li>
              <li>
                <a href="javascript:;">하위메뉴2</a>
              </li>
              <li>
                <a href="javascript:;">하위메뉴3</a>
              </li>
              <li>
                <a href="javascript:;">하위메뉴4</a>
              </li>
              <li>
                <a href="javascript:;">하위메뉴5</a>
              </li>
            </ul>
          </li>
          <li className={`${openMenus.includes(6) ? "on" : ""}`}>
            <a href="javascript:;" onClick={() => toggleSubMenu(6)}>
              <img src="/img/icon/icon_gnb06.svg" alt="상위메뉴6" />
              상위메뉴6
            </a>
            <ul className="sub" ref={el => (subMenuRefs.current[6] = el)}>
              <li>
                <a href="javascript:;">하위메뉴1</a>
              </li>
              <li>
                <a href="javascript:;">하위메뉴2</a>
              </li>
              <li>
                <a href="javascript:;">하위메뉴3</a>
              </li>
              <li>
                <a href="javascript:;">하위메뉴4</a>
              </li>
              <li>
                <a href="javascript:;">하위메뉴5</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="menu_fix">
          <p>메뉴고정</p>
          <Switch id="menu_fix" />
        </div>
      </nav>
    </>
  );
}

export default Header;
