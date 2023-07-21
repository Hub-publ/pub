import React from "react";
import Accordion from "../components/accordion";
import Button from "../components/button";
import Radio from "../components/radio";
import CustomSelect from "../components/custom_select";

function LhjMain() {
  return (
    <div className="container">
      <div className="area">
        <Accordion title="아코디언 타이틀" detail="아코디언 상세내용" />
      </div>
      <div className="btn_wrap area">
        <Button size="small" color="green">
          칠드런???
        </Button>
        <Button color="blue">하이루</Button>
        <Button size="medium" color="red">
          하이루
        </Button>
        <Button size="large" color="black">
          하이루
        </Button>
      </div>
      <div className="radio_wrap area">
        <Radio id="radio1" name="radio" text="두더지" />
        <Radio id="radio2" name="radio" text="개구리" />
      </div>
      <div className="area">
        <CustomSelect option={["전체", "진짜", "가짜"]} />
      </div>
    </div>
  );
}

export default LhjMain;
