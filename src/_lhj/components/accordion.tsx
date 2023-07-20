import React, { useState } from "react";
import "../style/components/accordion.scss";

interface Props {
  title: string;
  detail: string;
}

function Accordion(props: Props) {
  const { title, detail } = props;
  const [active, setActive] = useState(false);
  return (
    <div className={`accordion ${active === true ? "on" : ""}`}>
      <div
        className="top"
        onClick={() => {
          setActive(!active);
        }}
      >
        {title}
      </div>
      <div className="bottom">
        <p>{detail}</p>
      </div>
    </div>
  );
}

export default Accordion;
