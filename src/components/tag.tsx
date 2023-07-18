import React from "react";
import "../style/components/tag.scss";

interface Props {
  name: Array<string>;
}

function Tag(props: Props) {
  return (
    <div className="tag_wrap">
      {props.name.map((item) => {
        return <span className="tag">{item}</span>;
      })}
    </div>
  );
}

export default Tag;
