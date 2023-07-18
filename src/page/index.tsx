import React from "react";
import Tab from "../components/tab";
import CustomSelect from "../components/custom_select";
import List from "../components/list";
import Tag from "../components/tag";
import Accordion from "../components/accordion";

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
    </div>
  );
}

export default Main;
