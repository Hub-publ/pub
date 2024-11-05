import React from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

function Container(props: Props) {
  return (
    <div className={`container ${props.className}`}>
      <div className="container_inner">{props.children}</div>
    </div>
  );
}

export default Container;
