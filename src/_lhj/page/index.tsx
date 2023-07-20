import React from "react";
import Accordion from "../components/accordion";
import Button from "../components/button";

function LhjMain() {
  return (
    <div className="container">
      <div className="area">
        <Accordion title="아코디언 타이틀" detail="아코디언 상세내용" />
      </div>
      <div className="button_wrap area">
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
    </div>
  );
}

export default LhjMain;
