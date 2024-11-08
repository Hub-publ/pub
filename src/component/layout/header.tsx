import React, { useState } from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

function Header(props: Props) {
  const [fold, setFold] = useState(false);
  return (
    <>
      <header>
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
