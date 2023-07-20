import React from "react";
import "../style/components/button.scss";

interface Props {
  size?: "small" | "medium" | "large";
  color?: "green" | "blue" | "red" | "black";
  children: React.ReactNode;
}

function Button(props: Props) {
  const { size, color, children } = props;
  return (
    <div>
      <button className={`button ${color} ${size}`}>{children}</button>
    </div>
  );
}

export default Button;
