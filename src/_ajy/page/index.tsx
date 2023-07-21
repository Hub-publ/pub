import React from "react";
import "../style/common_ajy.scss";
import AccordionAjy from "../components/accordion_ajy";
import ImageAjy from "../components/image_ajy";
import ListAjy from "../components/list_ajy";
import ButtonAjy from "../components/button_ajy";
import CustomSelectAjy from "../components/custom_select_ajy";

function IndexAjy() {
  return (
    <>
      <section className="ajy">
        {/* 아코디언 */}
        <div className="area">
          <AccordionAjy title="아코디언 상위내용" detail="아코디언 하위내용" />
        </div>
        {/* 이미지 */}
        {/* <div className="area">
          <ImageAjy src="logo512.png" alt="리액트 로고" />
        </div> */}
        {/* 리스트 */}
        <div className="area">
          <ListAjy array={["리스트1", "리스트2", "리스트3"]} />
        </div>
        {/* 버튼 */}
        <div className="area">
          <ButtonAjy text="버튼" size="btn_xs" color="disabled" />
          <ButtonAjy text="버튼" size="btn_s" color="gray_line" />
          <ButtonAjy text="버튼" size="btn_m" color="gray" />
          <ButtonAjy text="버튼" size="btn_l" color="dark_gray" />
          <ButtonAjy text="버튼" size="btn_xl" color="black" />
        </div>
        {/* 버튼(+아이콘) */}
        <div className="area">
          <ButtonAjy text="추가" size="btn_m" color="dark_gray" child_left>
            <img
              src="/img/icon/icon_plus.svg"
              alt="추가"
              className="btn_icon"
            />
          </ButtonAjy>
          <ButtonAjy text="추가" size="btn_m" color="dark_gray" child_right>
            <img
              src="/img/icon/icon_plus.svg"
              alt="추가"
              className="btn_icon right"
            />
          </ButtonAjy>
        </div>
        {/* 커스텀 셀렉트 */}
        <div className="area">
          <CustomSelectAjy
            option={["옵션1", "옵션2", "옵션3", "옵션4", "옵션5"]}
          />
        </div>
      </section>
    </>
  );
}

export default IndexAjy;
