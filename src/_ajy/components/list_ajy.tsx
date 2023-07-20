import React from "react";
import { Link } from "react-router-dom";

interface Props {
  array: Array<string>;
}

function ListAjy(props: Props) {
  return (
    <>
      <ul className="list">
        {props.array.map((item) => {
          return (
            <li>
              <Link to="">{item}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListAjy;
