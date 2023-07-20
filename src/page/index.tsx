import React from "react";
import Tab from "../components/tab";
import CustomSelect from "../components/custom_select";
import List from "../components/list";
import Tag from "../components/tag";
import Accordion from "../components/accordion";
import Checkbox from "../components/checkbox";
import Radio from "../components/radio";
import ContentsCard from "../components/contents_card";
import Image from "../components/image";
import Button from "../components/button";

function Main() {
  return (
    <div className="container">
      <div className="area">
        <Tab text={["탭1", "탭2", "탭3", "탭4", "탭5"]} />
      </div>
      <div className="area">
        <CustomSelect option={["전체1", "전체2", "전체3", "전체4", "전체5"]} />
      </div>
      <div className="area">
        <List text={["리스트1", "리스트2", "리스트3"]} />
      </div>
      <div className="area">
        <Tag name={["태그1", "태그2", "태그3"]} />
      </div>
      <div className="area">
        <Accordion title="아코디언 타이틀" detail="아코디언 상세내용" />
      </div>
      <div className="area">
        <div className="gap">
          <Checkbox id="chk1" text="체크박스" />
        </div>
      </div>
      <div className="area">
        <div className="gap">
          <Radio id="ra1" name="radio" text="라디오1" />
          <Radio id="ra2" name="radio" text="라디오2" />
          <Radio id="ra3" name="radio" text="라디오3" />
        </div>
      </div>
      <div className="area">
        <ContentsCard bgColor="pink" size="large" round>
          <Image src="logo512.png" alt="리엑트 로고" />
          <p className="title">리엑트 공부중임;</p>
          <p className="detail">오늘은 한주님 레전드</p>
        </ContentsCard>
      </div>
      <div className="area">
        <Button bgColor="purple" size="h_28" text="버튼버튼" />
        <Button bgColor="gray" size="h_32" text="버튼버튼" />
        <Button bgColor="pink" size="h_36" text="버튼버튼" />
        <Button bgColor="khaki" size="h_40" text="버튼버튼" />
        <Button bgColor="purple_line" size="h_50" text="버튼버튼" />
      </div>
    </div>
  );
}

export default Main;
