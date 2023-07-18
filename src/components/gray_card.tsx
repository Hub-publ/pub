import React from "react";
import "../style/components/gray_card.scss";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

function GrayBox(props: Props) {
  return (
    <div>
      <div className={`gray_card ${props.className}`}>{props.children}</div>
    </div>
  );
}

export default GrayBox;
