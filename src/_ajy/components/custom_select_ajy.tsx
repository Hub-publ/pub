import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/components/custom_select_ajy.scss";

interface Props {
  option: Array<string>;
}

function CustomSelectAjy(props: Props) {
  const [current, setCurrent] = useState<string>(props.option[0]);
  const [open, isOpen] = useState(false);
  return (
    <>
      <div className={`custom_select ${open === true ? "on" : ""}`}>
        <p onClick={() => isOpen(!open)}>{current}</p>
        <ul>
          {props.option.map((item, index) => {
            return (
              <li onClick={() => setCurrent(item)}>
                <Link to="">{item}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default CustomSelectAjy;
