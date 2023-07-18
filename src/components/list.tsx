import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/components/list.scss";

interface Props {
  text: Array<string>;
}

function List(props: Props) {
  return (
    <ul className="list">
      {props.text.map((item) => {
        return (
          <li>
            <Link to="">{item}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
