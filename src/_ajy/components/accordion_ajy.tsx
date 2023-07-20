import React, { useState } from "react";

interface Props {
  title: string;
  detail: string;
}

function AccordionAjy(props: Props) {
  const { title, detail } = props;
  const [open, isOpen] = useState(false);

  return (
    <>
      <div className={`accordion ${open === true ? "on" : ""}`}>
        <div className="top" onClick={() => isOpen(!open)}>
          {title}
        </div>
        <div className="bom">
          <p>{detail}</p>
        </div>
      </div>
    </>
  );
}

export default AccordionAjy;
