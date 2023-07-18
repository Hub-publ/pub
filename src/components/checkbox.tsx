import React from "react";
import "../style/components/checkbox.scss";

interface Props {
  id: string;
  text: string;
  children?: React.ReactNode;
}

function Checkbox(props: Props) {
  return (
    <>
      <input type="checkbox" id={props.id} />
      <label htmlFor={props.id}>
        <i></i>
        {props.text}
        {props.children}
      </label>
    </>
  );
}

export default Checkbox;
