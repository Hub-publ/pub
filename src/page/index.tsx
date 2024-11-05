import React from "react";
import Container from "../component/layout/container";
import Header from "../component/layout/header";

function Main() {
  return (
    <>
      <Header />
      <Container className="index_page">
        <div className="search_area">
          <ul>
            <li>
              <p className="label">타이틀</p>
              <input type="text" />
            </li>
            <li>
              <p className="label">타이틀</p>
              <input type="text" />
            </li>
            <li>
              <p className="label">타이틀</p>
              <input type="text" />
            </li>
            <li>
              <p className="label">타이틀</p>
              <input type="text" />
            </li>
            <li>
              <p className="label">타이틀</p>
              <input type="text" />
            </li>
          </ul>
        </div>
        <div className="contents_wrap">콘텐츠 영역</div>
        {/* <div className="area">메인 페이지의 두 번째 영역 입니다.</div>
      <div className="area">메인 페이지의 세 번째 영역 입니다.</div>
      <div className="area">메인 페이지의 네 번째 영역 입니다.</div> */}
      </Container>
    </>
  );
}

export default Main;
