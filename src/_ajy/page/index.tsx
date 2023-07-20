import React from "react";
import "../style/common_ajy.scss";
import AccordionAjy from "../components/accordion_ajy";
import ImageAjy from "../components/image_ajy";
import ListAjy from "../components/list_ajy";
import ButtonAjy from "../components/button_ajy";
import ButtonAjy2 from "../components/button_ajy2";
import ButtonAjy3 from "../components/button_ajy3";

function IndexAjy() {
  return (
    <>
      <section className="ajy">
        <div className="area">
          <AccordionAjy title="아코디언 상위내용" detail="아코디언 하위내용" />
        </div>
        <div className="area">
          <ImageAjy src="logo512.png" alt="리액트 로고" />
        </div>
        <div className="area">
          <ListAjy array={["리스트1", "리스트2", "리스트3"]} />
        </div>
        {/* 버튼 스타일 props 각각 지정 */}
        <div className="area">
          {/* shape */}
          <ButtonAjy text="버튼 (기본)" />
          <ButtonAjy text="버튼 (원형)" shape="circle" />
          <ButtonAjy text="버튼 (각형)" shape="angular" />
        </div>
        <div className="area">
          {/* size */}
          <ButtonAjy text="버튼 XS" size="btn_xs" />
          <ButtonAjy text="버튼 S" size="btn_s" />
          <ButtonAjy text="버튼 M" />
          <ButtonAjy text="버튼 L" size="btn_l" />
          <ButtonAjy text="버튼 XL" size="btn_xl" />
        </div>
        <div className="area">
          {/* color */}
          <ButtonAjy text="버튼 (비활성화)" color="disabled" />
          <ButtonAjy text="버튼 (Gray)" color="gray" />
          <ButtonAjy text="버튼 (비활성화)" color="black" />
          <ButtonAjy text="버튼 (Gray Line)" color="gray_line" />
        </div>
        <div className="area">
          {/* width */}
          <ButtonAjy text="버튼 Full size" width="full" />
        </div>
        <div className="area">
          {/* children & icon */}
          <ButtonAjy text="추가" child_left>
            <img
              src="/img/icon/icon_plus.svg"
              alt="추가"
              className="btn_icon"
            />
          </ButtonAjy>
          <ButtonAjy text="추가" child_right>
            <img
              src="/img/icon/icon_plus.svg"
              alt="추가"
              className="btn_icon right"
            />
          </ButtonAjy>
        </div>
        {/* 버튼 스타일 props 하나로 지정 */}
        <div className="area">
          <ButtonAjy2 text="Button" />
          <ButtonAjy2 text="Button" />
          <ButtonAjy2 text="Button" />
        </div>
        {/* 구글링 기반 연습 */}
        <div className="area">
          <ButtonAjy3 label="버튼" />
        </div>
      </section>
    </>
  );
}

export default IndexAjy;
