import React from "react";
import "../style/components/contents_card.scss";

interface Props {
  // className?: string;
  // Props 로 클래스를 불러올 시  Props 이름은 시멘틱하게 분리하기 (ex : styleName)
  bgColor: "transparent" | "gray" | "pink" | "khaki";
  size: "large" | "medium" | "small";
  round?: boolean;
  children?: React.ReactNode;
}

function ContentsCard(props: Props) {
  return (
    <div>
      <div
        className={`contents_card ${props.bgColor} ${props.size} ${
          props.round ? "round" : ""
        }`}
      >
        {props.children}
      </div>
    </div>
  );
}

export default ContentsCard;
