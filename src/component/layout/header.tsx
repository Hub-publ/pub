import React, { useState } from "react";
import Switch from "../form/switch";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

function Header(props: Props) {
  const [fold, setFold] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const body = document.querySelector("body");
  const darkMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    if (body) {
      if (isChecked === true) {
        body.classList.add("dark");
        document.documentElement.style.setProperty("--black1", "#ff0000");
      } else {
        body.classList.remove("dark");
        document.documentElement.style.setProperty("--black1", "#000000");
      }
    }
    console.log(isChecked);
  };
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
          <Switch id="dark_switch" onChange={(event) => darkMode(event)} />
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
