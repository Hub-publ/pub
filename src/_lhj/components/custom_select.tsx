import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/components/custom_select.scss";

interface Props {
  option: Array<string>;
}

function CustomSelect(props: Props) {
  const [active, setActive] = useState<String>(props.option[0]);
  const [open, isOpen] = useState(false);

  return (
    <div className={`custom_select ${open === true ? "on" : ""}`}>
      <p
        onClick={() => {
          isOpen(!open);
        }}
      >
        {active}
      </p>
      <ul>
        {props.option.map((item, index) => {
          return (
            <li
              onClick={() => {
                setActive(item);
              }}
            >
              <Link to="">{item}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CustomSelect;
