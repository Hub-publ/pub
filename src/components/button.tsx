import React from "react";
import "../style/components/button.scss";

interface Props {
  bgColor: "purple" | "gray" | "pink" | "khaki" | "purple_line";
  size: "h_28" | "h_32" | "h_36" | "h_40" | "h_50";
  text: string;
  children?: React.ReactNode;
  left?: boolean;
  right?: boolean;
}

function Button(props: Props) {
  const { bgColor, size, children, text, left, right } = props;

  return (
    <button type="button" className={`btn ${bgColor} ${size}`}>
      {left && <>{children}</>}
      {text}
      {right && <>{children}</>}
    </button>
  );
}

export default Button;
