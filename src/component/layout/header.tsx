import { DarkMode } from "../../function/darkmode";
import React, { useState } from "react";
import Switch from "../form/switch";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

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
        <div className="right">
          <Switch id="dark_switch" onChange={(event) => DarkMode(event)} />
        </div>
      </header>
      <nav className={`gnb ${fold === true ? "active" : ""}`}>
        <button className="nav_close" onClick={() => setFold(false)}>
          <img src="/img/icon/icon_close.svg" alt="" />
        </button>
        메롱
      </nav>
    </>
  );
}

export default Header;
