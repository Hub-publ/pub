import React from "react";
import { useState } from "react";

interface Props {
  options: Array<string>;
  children?: React.ReactNode;
}

function Tab(props: Props) {
  const { options, children } = props;
  const [tab, setTab] = useState(0);
  const tabContents = React.Children.toArray(children);

  return (
    <>
      <div className="tab_wrap">
        <ul className="tab">
          {options.map((text, index) => (
            <li key={index} className={tab === index ? "on" : ""}>
              <a
                href="javascript"
                onClick={e => {
                  e.preventDefault();
                  setTab(index);
                }}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
        <div className="tab_contents">{tabContents[tab]}</div>
      </div>
    </>
  );
}

export default Tab;
