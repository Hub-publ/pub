import { DarkMode, FontReSize } from "../../function/darkmode";
import React, { useState } from "react";
import Switch from "../form/switch";
import Select from "react-select";

interface Props {
  className?: string;
  children?: React.ReactNode;
}
// interface OptionType {
//   label: string;
//   value: string;
// }

function Header(props: Props) {
  const [fold, setFold] = useState(false);

  return (
    <>
      <header className="flex align_center justify_between">
        <div className="left">
          <button
            className={`menu_btn ${fold === true ? "active" : ""}`}
            onClick={() => setFold(!fold)}
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
      <nav className={`gnb ${fold === true ? "active" : ""}`}>
        <a href="/" className="logo">
          <img src="/img/logo_hubdnc.png" alt="HUBDNC" />
        </a>
        <button className="nav_close" onClick={() => setFold(false)}>
          <img src="/img/icon/icon_close.svg" alt="" />
        </button>
        <div className="user">
          <p>
            홍길동<span>(gildong1234)</span>
          </p>
        </div>
        <ul className="main">
          <li>
            <a href="javascript:;">상위메뉴1</a>
            <ul className="sub">
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
          <li>
            <a href="javascript:;">상위메뉴2</a>
            <ul className="sub">
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
          <li>
            <a href="javascript:;">상위메뉴3</a>
            <ul className="sub">
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
          <li>
            <a href="javascript:;">상위메뉴4</a>
            <ul className="sub">
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
          <li>
            <a href="javascript:;">상위메뉴5</a>
            <ul className="sub">
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
          <li>
            <a href="javascript:;">상위메뉴6</a>
            <ul className="sub">
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
      </nav>
    </>
  );
}

export default Header;
