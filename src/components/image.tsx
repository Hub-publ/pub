import React from "react";

interface Props {
  src: string;
  alt: string;
  icon?: boolean;
}

function Image(props: Props) {
  return (
    <>
      {props.icon ? (
        <img src={`/img/icon/${props.src}`} alt={props.alt} />
      ) : (
        <img src={`/img/${props.src}`} alt={props.alt} />
      )}
    </>
  );
}

export default Image;
