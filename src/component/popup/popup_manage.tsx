import { useState, Dispatch, SetStateAction, useEffect } from "react";

interface Props {
  title: string;
  children: React.ReactNode;
  setPopup: Dispatch<SetStateAction<number | undefined>>;
  className?: string;
}

function PopupManage(props: Props) {
  const [popup, setPopup] = useState<Number | undefined>();
  function popSizeHandler() {
    const scroll_area = document.querySelector(
      ".popup_scroll_area"
    ) as HTMLElement;
    const pop_wrap = document.querySelector(".pop_wrap") as HTMLElement;
    const pop_top = document.querySelector(".pop_top") as HTMLElement;
    const pop_btns = document.querySelector(".pop_btns") as HTMLElement;
    let popup_height;
    let pop_top_height;
    let pop_btns_height;
    let pop_top_mb;
    let pop_btns_mt;
    if (pop_wrap) {
      const computedStyle = window.getComputedStyle(pop_wrap);
      popup_height = parseFloat(computedStyle.height);
    }
    if (pop_top) {
      const computedStyle = window.getComputedStyle(pop_top);
      pop_top_height = parseFloat(computedStyle.height);
      pop_top_mb = parseFloat(computedStyle.marginBottom);
    }
    if (pop_btns) {
      const computedStyle = window.getComputedStyle(pop_btns);
      pop_btns_height = parseFloat(computedStyle.height);
      pop_btns_mt = parseFloat(computedStyle.marginTop);
    }
    if (
      scroll_area &&
      popup_height &&
      pop_top_height &&
      pop_top_mb &&
      pop_btns_height &&
      pop_btns_mt
    ) {
      scroll_area.style.maxHeight = `${
        popup_height -
        pop_top_height -
        pop_btns_height -
        pop_top_mb -
        pop_btns_mt -
        100
      }px`;
    }
  }
  useEffect(() => {
    popSizeHandler();
    window.addEventListener("resize", popSizeHandler);
    return () => {
      window.removeEventListener("resize", popSizeHandler);
    };
  }, []);

  return (
    <div className={`pop_wrap ${props.className}`}>
      <div
        className="pop_dim"
        onClick={() => {
          if (props.setPopup) props.setPopup(undefined);
        }}
      ></div>
      <div className="pop_contents">
        <div className="pop_top">
          <p className="pop_title">{props.title}</p>
          <button
            className="pop_x"
            onClick={() => {
              if (props.setPopup) props.setPopup(undefined);
            }}
          ></button>
        </div>
        <div>{props.children}</div>
      </div>
    </div>
  );
}

export default PopupManage;
