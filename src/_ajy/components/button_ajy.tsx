import React from "react";
import "../style/components/button_ajy.scss";

interface Props {
  text: string;
  size: string;
  color: string;
  shape?: string; // Defualt = rounded | circle(원형) | angular(각형)
  width?: string;
  children?: React.ReactNode;
  child_left?: boolean;
  child_right?: boolean;
}

function ButtonAjy(props: Props) {
  const { text, size, color, shape, width, children, child_left, child_right } =
    props;
  return (
    <>
      <button
        type="button"
        className={`btn_ajy ${size} ${color} ${shape} ${width}`}
      >
        {child_left && <>{children}</>}
        {text}
        {child_right && <>{children}</>}
      </button>
    </>
  );
}

export default ButtonAjy;
