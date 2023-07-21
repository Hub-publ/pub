import React from "react";
import "../style/components/radio.scss";

interface Props {
  id: string;
  name: string;
  text: string;
  children?: React.ReactNode;
}

function Radio(props: Props) {
  const { id, name, text, children } = props;
  return (
    <>
      <input type="radio" id={id} name={name} />
      <label htmlFor={id}>
        <i></i>
        {text}
        {children}
      </label>
    </>
  );
}

export default Radio;
