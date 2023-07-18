import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/components/tab.scss";

interface Props {
  text: Array<string>;
}

function Tab(props: Props) {
  const [active, setActive] = useState(0);

  return (
    <ul className="tab">
      {props.text.map((item, index) => {
        return (
          <li onClick={() => setActive(index)}>
            <Link to="" className={`${index === active ? "on" : ""}`}>
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Tab;
