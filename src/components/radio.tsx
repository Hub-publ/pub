import React from "react";
import "../style/components/radio.scss";

interface Props {
  id: string;
  name: string;
  text: string;
  children?: React.ReactNode;
}

function Radio(props: Props) {
  return (
    <>
      <input type="radio" id={props.id} name={props.name} />
      <label htmlFor={props.id}>
        <i></i>
        {props.text}
        {props.children}
      </label>
    </>
  );
}

export default Radio;
